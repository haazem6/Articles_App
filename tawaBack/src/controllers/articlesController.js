const Article = require("../models/Article");

//ADD articles
const addArticles = async (req, res) => {
  const newArticles = new Article(req.body);

  try {
    const savedArticles = await newArticles.save();
    res.status(201).json(savedArticles);
  } catch (error) {
    res.status(500).json(error || "could not save Articles");
  }
};

//GET ALL ARTICLES
const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find();

    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

//DELETE
const deleteArticle = async (req, res) => {
  try {
    await Article.findByIdAndDelete(req.params.articleId);
    res.status(200).json("Article has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};

//UPDATE
const updateArticle = async (req, res) => {
  try {
    const updatedArticle = await Article.findByIdAndUpdate(
      req.params.articleId,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedArticle);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.addArticles = addArticles;
exports.getAllArticles = getAllArticles;
exports.deleteArticle = deleteArticle;
exports.updateArticle = updateArticle;
