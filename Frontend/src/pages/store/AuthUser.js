import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

export const Authcontainer = create((set) => ({
    user:null,
    isSignUp:false,
    isChecking: true,
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
    login: async () => {},
    logout:async () => {},
    auth: async () => {
        set({isChecking:true})
        try {
            const response = await axios.get("http://localhost:8080/api/users/auth");
            set({
                user:response.data.user,
                isChecking:false
            });
        } catch (error) {
            set({
                isChecking:false,
                user: null
            });
            toast.error(error.message.response || "Failed to authenticate, please login again");
        }
    },
}))