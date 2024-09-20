import { Link } from 'react-router-dom'
import { Authcontainer, } from "../store/AuthUser.js"
import { useState } from 'react';
import { Menu, Search } from 'lucide-react';
import { contentStore } from '../store/Content.js';

const Nav = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const { user, logout } = Authcontainer();

	const handleToggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const { setContent } = contentStore();
    
    
    return (
        <header className='max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20'>
            <div className='flex items-center gap-10 z-50'>
                <Link to={"/"}>
                    <h1 className='my-8 text-blue-400 text-4xl mx-2 font-serif'>
                        MrFlix
                    </h1>
                </Link>

                {/* desktop nav */}
                <div className="hidden sm:flex gap-7 justify-between items center my-8 mx-2 font-serif text-lg">
                    <Link to="/" className="hover:underline" onClick={() => setContent("movies")}>
                        movies
                    </Link>
                    <Link to="/" className="hover:underline" onClick={() => setContent("tv")}>
                        tv
                    </Link>
                    <Link to="/trending" className="hover:underline" onClick={() => setContent("trending")}>
                        Trending
                    </Link>
                </div>

            </div>
            <div className='hidden sm:flex gap-7 justify-between items center my-8 mx-2 font-serif text-lg z-50'>
                <Link to={"/search"}>
                    <Search className='size-6 cursor-pointer'/>
                </Link>
                <img src={user.image} alt='avatar' className='h-8 rounded-sm cursor-pointer'/>
                <button onClick={logout} className='px-4 py-2 text-sm font-semibold text-white bg-blue-400 rounded-md hover:bg-blue-500'>
                    Log Out
                </button>
            </div>

            <div className='sm:hidden z-50'>
                    <Menu className='size-8 cursor-pointer' onClick={handleToggleMenu}/>
            </div>
            {/* mobile nav */}
            {isMobileMenuOpen && (
				<div className='w-full sm:hidden z-50 rounded p-5 bg-black'>
                    <Link to={"/search"} className='w-full'>
                        <Search className='size-6 cursor-pointer mb-3 ml-2 items-end'/>
                    </Link>
					<Link to={"/"} className='block hover:underline p-2' onClick={handleToggleMenu}>
						Movies
					</Link>
					<Link to={"/"} className='block hover:underline p-2' onClick={handleToggleMenu}>
						Tv Shows
					</Link>
					<Link to={"/trending"} className='block hover:underline p-2' onClick={handleToggleMenu}>
						trending
					</Link>
                    <Link to={"/history"} className='block hover:underline p-2' onClick={handleToggleMenu}>
						Search History
					</Link>
                    <button onClick={logout} className='px-4 py-2 text-sm font-semibold text-white bg-blue-400 rounded-md hover:bg-blue-500 mt-8'>
                        Log Out
                    </button>
				    </div>
			)}
        </header>
  )
}

export default Nav