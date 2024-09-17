import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import HomePage from "./pages/Home/HomePage";
import { Toaster } from "react-hot-toast";

export default function App() {
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