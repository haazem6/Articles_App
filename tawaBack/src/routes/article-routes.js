const router = require("express").Router();

const articlesControllers = require("../controllers/articlesController");

// Route POST pour ajouter un nouvel article
router.post("/add", articlesControllers.addArticles);

// Route GET pour récupérer tous les articles
router.get("/getAll", articlesControllers.getAllArticles);

// Route DELETE pour supprimer un article par son identifiant
router.delete("/:articleId", articlesControllers.deleteArticle);

// Route PATCH pour mettre à jour un article par son identifiant
router.patch("/:articleId", articlesControllers.updateArticle);

module.exports = router;