import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articles: [],
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    //Get All Articles
    allArticles: (state, action) => {
      state.articles = action.payload ;
    },
    //Add Article
    addNewArticle: (state, action) => {
      state.articles.push(action.payload);
    },
    // Remove Article
    removeArticle: (state, action) => {
      state.articles.filter((t) => t._id === action.payload._id);
    },
    //Update Article
    editArticle: (state, action) => {
      state.articles.map((article) =>
      article._id === action.payload._id ? action.payload : article
      );
    },
  },
});

export const { allArticles, addNewArticle, removeArticle, editArticle } = articleSlice.actions;

export default articleSlice.reducer;
