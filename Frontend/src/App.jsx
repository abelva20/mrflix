import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import HomePage from "./pages/Home/HomePage";
import { LoaderIcon, Toaster } from "react-hot-toast";
import { Authcontainer } from "./pages/store/AuthUser.js";
import { useEffect } from "react";

export default function App() {
  const { user, isChecking,auth } = Authcontainer();
  console.log("auth user", user)
  
  useEffect(() => {
    auth();
  }, [auth]);

  if(isChecking){
    return(
      <dv className="h-screen">
        <div className = "h-screen flex justify-center items-center bg-slate-900">
          <LoaderIcon className = "mx-auto text-white size-10" />
        </div>

      </dv>
    )
  };


  return (
    <>
    <Routes>
      <Route path="/signup" element={!user ? <Signup/> : <Navigate to={"/"}/>} />
      <Route path="/login" element={!user ? <Login/> : <Navigate to={"/"}/>} />
      <Route path="/" element={<HomePage/>} />
    </Routes>
    
    <Toaster />
    
    </>
  )
}