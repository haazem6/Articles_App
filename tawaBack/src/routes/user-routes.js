const router = require("express").Router();

const userControllers = require("../controllers/userController");

// Route POST pour l'inscription d'un nouvel utilisateur
router.post("/signup", userControllers.register);

// Route POST pour la connexion d'un utilisateur existant
router.post("/signin", userControllers.login);

module.exports = router;