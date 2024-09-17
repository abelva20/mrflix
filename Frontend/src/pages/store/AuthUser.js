import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

export const Authcontainer = create((set) => ({
    user:null,
    isSignUp:false,
    signup: async (credential) => {
        try {
            const response = await axios.post("http://localhost:8080/api/users/signup/", credential);
            set({user:response.data.user, isSignUp:false})
            toast.success("signup successfully")
        } catch (error) {
            const errorMessage = error.response?.data?.message || "An error occurred";
            toast.error(errorMessage);
            set({isSignUp:false, user:null})
        }
    },
    login:async () => {},
    logout:async () => {},
    auth:async () => {},
}))