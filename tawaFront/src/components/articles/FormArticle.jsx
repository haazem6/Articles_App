import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import { addArticle , updateArticle} from '../../api/article';

const FormArticle = ({currentId, setCurrentId}) => {
  const dispatch = useDispatch();
  const article = useSelector((state) => currentId ? state?.article?.articles.find((elem) => elem._id === currentId ) : null);

  const [articleData, setArticleData] = useState({
    title: "",
    description: "",
  })

  const formHandler = () => {
    if (currentId) {
      //update the Article
      updateArticle(article._id, articleData, dispatch);
      setCurrentId(null);
      setArticleData({
        title: "",
        description: "",
      })

    } else {
      //add new article
      addArticle(articleData, dispatch);
      setCurrentId(null);
      setArticleData({
        title: "",
        description: "",
      })
    }

  }

  const clearHandler = () => {
    setArticleData({title: "", description: ""})
    setCurrentId(null);
  }

  useEffect(() => {
     if (article) {
      setArticleData(article);
     }
  }, [article]);

  const updateTitleHandler = (e) => {
    setArticleData({...articleData, title: e.target.value})
  }
  return (
    <div className="flex flex-col bg-gray-100 w-[50%]  rounded-2xl space-y-3 p-3 ">
      <div><h1 className="text-center text-3xl font-bold ">{currentId ? "Update Article" : "Add a New Article" }</h1>
      <input
        className="p-3 rounded-md w-[90%] m-3 border-2 border-black"
        type="text"
        name="title"
      
        placeholder="Article Title..."
        value={articleData.title}
        onChange={updateTitleHandler}
      /></div>
      <div><textarea
        className="p-3 rounded-md w-[90%] m-3 border-2 border-black"
        type="text"
        name="description"
        placeholder="Article Description..."
        value={articleData.description}
        onChange={(e) => setArticleData({...articleData, description: e.target.value})}
      /></div>
      <div>   <button
        className="p-3 rounded-md w-[90%] m-3 bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold"
        onClick={formHandler}
      >{currentId ? "Update Article" : "Add Article" }</button></div>
      <div>     <button
        className="p-3 rounded-md w-[90%] m-3 bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold"
        onClick={clearHandler}
      >Clear</button></div>
   
 
    </div>
  )
}

export default FormArticle