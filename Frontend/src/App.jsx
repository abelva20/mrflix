import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import HomePage from "./pages/Home/HomePage";
import { Toaster } from "react-hot-toast";
import { Authcontainer } from "./pages/store/AuthUser";
import { useEffect } from "react";

export default function App() {
  const { user, isChecking, auth } = Authcontainer();
  console.log("auth user", user)
  
  useEffect(() => {
    auth();
  }, [])


  return (
    <>
    <Routes>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<HomePage/>} />
    </Routes>
    <Toaster />
    
    </>
  )
}