import axios from "axios";

import { login, register } from "../redux/features/userSlice";

// inscription d'un nouvel utilisateur
export const signup = async (formData, dispatch, navigate) => {
    try {
        //  requête POST vers l'API pour l'inscription d'un nouvel utilisateur
        const { data } = await axios.post("http://localhost:5000/api/user/signup", formData);
        // Dispatch l'action register avec les données de l'utilisateur inscrit
        dispatch(register(data));
        // Navigue vers la page d'accueil après l'inscription
        navigate("/", { replace: true });
    } catch (error) {
        
        console.log(error.response.data);
    }   
};

// connexion d'un utilisateur existant
export const signin = async (formData, dispatch, navigate) => {
    try {
        //  requête POST vers l'API pour la connexion d'un utilisateur
        const { data } = await axios.post("http://localhost:5000/api/user/signin", formData);
        // Dispatch l'action login avec les données de l'utilisateur connecté
        dispatch(login(data));
        // Navigue vers la page d'accueil après la connexion
        navigate("/", { replace: true });
    } catch (error) {
        
        console.log(error.response);
    }   
};

// réinitialiser le mot de passe
export const resetPassword = async (formPassword, dispatch) => {
    try {
        //  requête POST vers l'API pour la réinitialisation du mot de passe
        const { data } = await axios.post(`http://localhost/5000/api/user/resetPassword`, formPassword);
        // Affiche les données de la réponse dans la console
        console.log(data);
    } catch (error) {
        
        console.log(error.response);
    }
};
