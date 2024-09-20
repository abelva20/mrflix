import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

export const Authcontainer = create((set) => ({
    user:null,
    isSignUp:false,
    isChecking: true,
    isLogingOut: false,
    isLogingIn: false,
    signup: async (credential) => {
        try {
            const billing = await axios.post("/api/users/signup", credential);
            set({ user: billing.data.user, isSignUp:false });
            toast.success("Create new user successfully");
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Sign up Failed";
            toast.error(errorMessage);
        }
    },
    login: async (credential) => {
        set({isLogingIn:true})
        try {
            const response = await axios.post("/api/users/login", credential)   
            set({user: response.data.user, isLogingIn:false})
            toast.success("Log in Successfully")
        } catch (error) {
            set({isLogingIn: false, user: null})
            toast.error(error.response?.message || "Wrong Password or Username")
            
        }
    },
    logout:async () => {
        set({isLogingOut: true})
        try {
            await axios.post("/api/users/logout")
            set({user: null, isLogingOut:false})
            toast.success("Logged out successfully")
        } catch (error) {
            set({isLogingOut:false})
            toast.error(error.response?.message || "An error occurred")
            
        }
    },
    auth: async () => {
        set({isChecking:true})
        try {
            const response = await axios.get("/api/users/auth");
            set({
                user:response.data.user,
                isChecking:false
            });
        } catch (error) {
            set({
                user: null,
                isChecking:false
            });
            toast.error(error.message.response || "Failed to authenticate");
        }
    },
}))