import { useEffect, useState } from "react";
import { contentStore } from "../store/Content.js"
import axios from "axios";
import { Link } from "react-router-dom";
import { original_tmdb_base_url } from "../utilities/constant.js";

const MovieSlider = ({ category }) => {
  
  const { useContent } = contentStore();

  const [content, setContent] = useState([]);
    
  const formatedcategories =
    category.replaceAll("_", " ")[0].toUpperCase() + category.replaceAll("_", " ").slice(1);
    const formatedContent = useContent === "movies" ? "Movies" : "TV Shows";

  useEffect(() => {
        const getContent = async () => {
            const res = await axios.get(`/api/${useContent}/${category}`);
            console.log(res.data.content)
            setContent(res.data.content);
        };

        getContent();
    }, [useContent, category]);
  return (
    <div className="bg-zinc-950 text-white relative px-5 md:px-20">
        <h2>
            {formatedcategories} {formatedContent}
        </h2>
        <div className='flex space-x-4 overflow-x-scroll scrollbar-hide' >
                {content.length < 0 && content.map((item) => (
                    <Link to={`/watch/${item.id}`} className='min-w-[250px] relative group' key={item.id}>
                        <div className='rounded-lg overflow-hidden'>
                            <img
                                src={original_tmdb_base_url + item.backdrop_path}
                                alt='Movie image'
                                className='transition-transform duration-300 ease-in-out group-hover:scale-125'
                            />
                        </div>
                        <p className='mt-2 text-center'>{item.title || item.name}</p>
                    </Link>
                ))}
            </div>
    </div>
  )
}

export default MovieSlider;