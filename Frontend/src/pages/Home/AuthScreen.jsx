import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


function AuthScreen() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Signup?email=" + email);

  }

  return (
    <>
    <div className="w-full h-screen hero-bg md:h-full xl:h-screen">
      <header className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to={"/"}>
        <h1 className='my-8 text-blue-400 text-4xl mx-2 font-serif'>
          MrFlix
        </h1>
        </Link>
        <Link to={"/Login"} className='text-white bg-red-500 py-1 px-2 rounded-md hover:shadow-xl hover:rounded-lg mx-7'>
          Sign In
        </Link>
      </header>

      {/* Hero section */}
      <div className="flex flex-col items-center justify-center text-center pt-32 md:pt-16 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 md:mb-4 text-gray-900 md:text-blue-400">
          Stream Movies, TV Shows, and More
        </h1>
        <p className="w-full px-8 text-md md:text-2xl mb-4 md:mb-10 font-light md:font-sans text-gray-900 md:text-blue-400">
          Discover the latest movies and TV Series from around the world.
        </p>
        <p className="w-full px-8 md:w-1/2 text-md md:text-2xl mb-6 font-light md:font-sans text-gray-900 md:text-blue-400">
          Sign up now for a free account to discover your favorite movies, TV Series, and more.
        </p>

        <form className="flex flex-col md:flex-row gap-4 w-1/2 mb-10" onSubmit={handleSubmit}>
          <input
            type="email"
            className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-blue-600"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="bg-red-500 py-3 px-10 rounded-md text-white hover:shadow-xl hover:rounded-lg flex-none">
            Sign Up
          </button>
        </form>
      </div>
    </div>
    {/* saperator */}
    <div className="h-4 w-full bg-[#232323]" aria-hidden='true' />
    <div className="flex items-center justify-center text-center pt-32 bg-gray-800 pb-20">
      <h2 className="text-5xl font-bold text-blue-400 font-mono">
        Stream Million of Movies and Tv Series
      </h2>
    </div>

    {/* Trending Movies */}
    <main className="flex justify-center items-center bg-gray-800">
      <div className="w-full flex-wrap mt-12 mx-40">
        <h1 className="text-white text-5xl font-bold text-start mb-8">
          Trending Now
        </h1>

      </div>
    </main>
    <main className='flex justify-center items-center bg-gray-800'>
        <div className='w-full flex justify-center items-center mt-32 flex-wrap mx-32'>
          <div className='w-1/2 px-10'>
            <h1 className='text-white text-5xl font-bold text-start mb-2'>
              Stream Anime Movies and Anime Series For Free
            </h1>
            <h2 className='text-blue-400 text-justify text-2xl font-serif font-medium mt-6'>
            Transform Your World,<br /> Anime Awaits Your Imagination!
            </h2>
          </div>
          <div className='w-1/2'>
          <img src='404BG.jpg' alt='hero' className='object-cover rounded-md' />
          </div>
        </div>
    </main>
    <main className='flex justify-center items-center pb-10 bg-gray-800'>
        <div className='w-full flex justify-center items-center mt-32 flex-wrap mx-32'>
          <div className='w-1/2'>
          <img src='Hollywood.jpg' alt='hero' className='object-cover rounded-md' />
          </div>
          <div className='w-1/2 px-10'>
            <h1 className='text-white text-5xl font-bold text-start mb-2'>
              Stream Hollywood movies and Tv Shows
            </h1>
            <h2 className='text-blue-400 text-justify text-2xl font-serif font-medium mt-6'>
            Unlock Hollywood<br/>Unlimited Movies and TV Shows at Your Fingertips!
            </h2>
          </div>
        </div>
    </main>
    <div className="h-2 w-full bg-[#232323]" aria-hidden='true' />
    <footer className="flex items-center justify-center text-center text-white bg-gray-950">
      <p>�� 2022 MrFlix. All rights reserved.</p>
    </footer>
    </>
  )
}

export default AuthScreen