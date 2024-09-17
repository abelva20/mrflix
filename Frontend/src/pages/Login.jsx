import { useState } from "react";
import { Link } from "react-router-dom"


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(username, password)
  }
  return (
    <>
    <div className="w-full h-screen signup-bg md:h-full xl:h-screen ">
      <header className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to={"/"}>
        <h1 className='my-8 text-blue-400 text-4xl mx-2 font-serif'>
          MrFlix
        </h1>
        </Link>
      </header>
      <div className='flex justify-center items-center mt-6 mx-2'>
        <div className='max-w-md w-full bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
          <h1 className='text-center font-medium text-2xl my-4'>
            Log in
          </h1>
          <form className='space-y-1 mx-4' onSubmit={handleLogin}>
            <div>
              <label htmlFor='username' className='text-xl font-semibold block'>
                Username
                <input
                  type='text'
                  className='w-full px-3 py-2 mt-1 mb-2 bg-white/50 rounded-md focus:outline-none focus:ring-blue-600'
                  placeholder='Enter your Username'
                  id='username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
            </div>

            <div>
              <label htmlFor='password' className='text-xl font-semibold block'>
                Password
                <input
                  type='password'
                  className='w-full px-3 py-2 mt-1 mb-2 bg-white/50 rounded-md focus:outline-none focus:ring-blue-600'
                  placeholder='Enter your Password'
                  id='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
            <button className='w-full bg-blue-400 text-white/80 font-semibold font-sans rounded-md py-2'>
              Sign In
            </button>
          </form>
          <div className='text-center text-gray-800 mt-5'>
            not have an account? {" "}
            <Link to={'/Signup'} className = 'hover:underline hover:text-blue-800'>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/* trendnig Movies and Tv Show */}
    
    <main className='flex justify-center items-center'>
        <div className='w-full flex justify-center items-center mt-32 flex-wrap mx-10'>
          <div className='w-1/2 px-10'>
            <h1 className='text-4xl font-bold text-center'>
              Anime
            </h1>
            <p className='text-gray-700 text-center text-2xl font-serif font-medium'>
              Watch Anime movies and Anime Series for free
            </p>
            <h2 className='text-gray-700 text-center text-2xl font-serif font-medium mt-6'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus maxime quidem aspernatur, vero exercitationem ad vitae voluptates nisi aut accusantium?
            </h2>
          </div>
          <div className='w-1/2'>
          <img src='404BG.jpg' alt='hero' className='object-cover' />
          </div>
        </div>

    </main>

    <main className='flex justify-center items-center mb-10'>
        <div className='w-full flex justify-center items-center mt-32 flex-wrap mx-10'>
          <div className='w-1/2'>
          <img src='Hollywood.jpg' alt='hero' className='object-cover' />
          </div>
          <div className='w-1/2 px-10'>
            <h1 className='text-4xl font-bold text-center'>
              Hollywood
            </h1>
            <p className='text-gray-700 text-center text-2xl font-serif font-medium'>
              Watch Hollywood movies and Tv Shows
            </p>
            <h2 className='text-gray-700 text-center text-2xl font-serif font-medium mt-6'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus maxime quidem aspernatur, vero exercitationem ad vitae voluptates nisi aut accusantium?
            </h2>
          </div>
        </div>
    </main>
    </>
  )
}

export default Login