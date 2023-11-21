import React, { useState } from "react";
import {useDispatch} from "react-redux";

import { BsTrashFill} from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { deleteArticle } from "../../api/article";

const Article = ({article, setCurrentId}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setIsChecked((prevIsChecked) => !prevIsChecked);
  }

  const dispatch = useDispatch();
  return (
    <div className="my-8 bg-gray-100 w-[50%] p-4 w-[70%] rounded-md space-y-4 shadow-2xl">
      <div className="flex items-center justify-between">
      <h1 className={`text-black text-3xl font-bold ${isChecked && "line-through"}`}>{article.title}</h1>
      <div className=" flex space-x-4">
        <BiEditAlt  size={30} className="cursor-pointer" onClick={() => setCurrentId(article._id)}  />
        <BsTrashFill size={30} className="cursor-pointer" onClick={() => deleteArticle(article?._id, dispatch)} />
        <input type="checkbox" className="w-10 cursor-pointer" value={isChecked} onChange={handleChange} />
      </div>
      </div>
      <div className="flex items-center justify-between">
      <p className={`text-xl font-semibold p-2 w-full text-justify ${isChecked && "line-through"}`}>{article.description}</p>
      {isChecked && <h1 className="text-red-700 text-xl font-bold" >Done</h1>}
      </div>
    </div>
  );
};

export default Article;
