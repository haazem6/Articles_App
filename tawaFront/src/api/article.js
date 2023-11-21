import axios from "axios";
import {
  addNewArticle,
  allArticles,
  editArticle,
  removeArticle,
} from "../redux/features/articleSlice";

// récupérer tous les articles
export const getAllArticles = async (dispatch) => {
  try {
    // Effectue une requête GET vers l'API pour récupérer tous les articles
    const { data } = await axios.get(
      "http://localhost:5000/api/article/getAll"
    );
    // Dispatch l'action allArticles avec les données récupérées
    dispatch(allArticles(data));
  } catch (error) {
    console.log(error.response);
  }
};

// ajouter un nouvel article
export const addArticle = async (article, dispatch) => {
  try {
    // Effectue une requête POST vers l'API pour ajouter un nouvel article
    const { data } = await axios.post(
      "http://localhost:5000/api/article/add",
      article
    );
    // Dispatch l'action addNewArticle avec les données de l'article ajouté
    dispatch(addNewArticle(data));
  } catch (error) {
    console.log(error.message);
  }
};

// supprimer un article par son id
export const deleteArticle = async (id, dispatch) => {
  try {
    // Effectue une requête DELETE vers l'API pour supprimer un article
    const { data } = await axios.delete(
      `http://localhost:5000/api/article/${id}`
    );
    // Dispatch l'action removeArticle avec les données de l'article supprimé
    dispatch(removeArticle(data));
  } catch (error) {
    console.log(error.message);
  }
};

//  mettre à jour un article par son id
export const updateArticle = async (id, updatedArticle, dispatch) => {
  try {
    // Effectue une requête PATCH vers l'API pour mettre à jour un article
    const { data } = await axios.patch(
      `http://localhost:5000/api/article/${id}`,
      updatedArticle
    );
    // Dispatch l'action editArticle avec les données de l'article mis à jour
    dispatch(editArticle(data));
  } catch (error) {
    console.log(error.message);
  }
};
