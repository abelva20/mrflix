
import { Link } from "react-router-dom"
import Nav from "../Component/Nav.jsx"
import { InfoIcon, PlayCircle } from "lucide-react"
import getTrending from "../hooks/trendingHook.jsx";
import { MovieCategories, original_tmdb_base_url, TvShowCategories } from "../utilities/constant.js";
import { Footer } from "../Component/foot.jsx";
import { contentStore } from "../store/Content.js";
import MovieSlider from "../Component/Slide";

const Home = () => {
  const{trendingContent} = getTrending();
  const { useContent } = contentStore();

  if(!trendingContent){
    return <div className="w-screen h-screen text-white relative">
      <Nav />
      <div className="flex justify-center items-center top-0 left-0 absolute w-full h-full bg-slate-700/80 -z-10 loading"/>
      </div>
  }


  return (
    <>
    <div className="relative h-screen text-white">
      <Nav />

      {/* Hero Section */}

      <img src={original_tmdb_base_url + trendingContent?.backdrop_path}
      alt="Hero Section" className="absolute top-0 left-0 w-full h-full object-cover -z-10"/>
      <div className="absolute top-0 left-0 w-full h-full bg-slate-900/70 -z-10" aria-hidden="true"/>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-32">
        <div 
        className="bg-gradient-to-b from-black/80 via-transparent to-transparent absolute w-full h-full top-0 left-0 -z-10"
        />
        <div className=" max-w-xl">
          <h1 className="mt-4 text-5xl font-bold text-balance">
            {trendingContent?.title || trendingContent?.name}
          </h1>
          <p className="mt-2 text-lg">
            {trendingContent?.release_date?.split("-")[0] || trendingContent?.first_air_date.split("-")[0]} | {" "}
            {trendingContent?.adult ? "18+" : "PG-13"}

          </p>
          <p className="mt-4 font-medium font-serif text-white/70 text-base">
            {trendingContent?.overview.length > 250 
            ? trendingContent?.overview.slice(0,250) + "..." : trendingContent?.overview}
          </p>
        </div>
        <div className="mt-10">
          <Link className="px-4 py-4 mx-2 bg-blue-400 text-white font-semibold rounded-tl-md hover:bg-transparent/20 text-center" to={`/watch/${trendingContent?.id}/${trendingContent?.title || trendingContent?.name}`}>
          <PlayCircle className="size-6 inline-block mr-4"/>
            Play
          </Link>
          <Link className="px-4 py-4 bg-blue-400 text-white font-semibold rounded-ee-md hover:bg-transparent/20 text-center" to={`/details/${trendingContent?.id}/${trendingContent?.title || trendingContent?.name}`}>
          <InfoIcon className="size-6 inline-block mr-4"/>
            More Info
          </Link>
        </div>
      </div>
    </div>

    {/* saparator */}

    <div className="h-2 w-full bg-[#232323]" aria-hidden='true' />

    {/* Main Section */}

    <main className='w-full bg-zinc-950'>
      <div className='flex flex-col gap-10 py-10 justify-center'>
        {useContent === "movies" ? (
          MovieCategories.map((category) => <MovieSlider key={category} category={category} />)
        ) : (
          TvShowCategories.map((category) => <MovieSlider key={category} category={category}/>)
        )}
      </div>
    </main>

    <Footer />
    </>
  )
}

export default Home