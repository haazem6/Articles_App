import React, { useState, useEffect } from "react";

import Article from "../components/articles/Article";
import FormArticle from "../components/articles/FormArticle";
import { getAllArticles } from "../api/article";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  const articles = useSelector((state) => state.article.articles);

 
  useEffect(() => {
    getAllArticles(dispatch);
  }, [currentId]);

  console.log(articles);
  return (
    <div className="flex flex-col items-center justify-center w-full my-">
      <FormArticle currentId={currentId} setCurrentId={setCurrentId} />

      {(!articles || articles?.length === 0) && (
        <div className="text-3xl font-bold my-8">
          You don't have any Article. Try Add Some
        </div>
      )}
      {articles?.map((article) => (
        <Article setCurrentId={setCurrentId} key={article._id} article={article} />
      ))}
    </div>
  );
};

export default Home;
