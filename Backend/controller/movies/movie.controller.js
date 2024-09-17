import { fetcing } from "../../services/tmdb.services.js";


// trending movie
export async function trendingMovie(req, res) {
    try {
        const data = await fetcing("https://api.themoviedb.org/3/trending/movie/day?language=en-US")
        const randomMovie = data.results[Math.floor(Math.random() * data.results?.length)]

        res.status(200).json({
            success: true,
            content: randomMovie
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch trending movie"
        });
    }
};


// movie trailer
export async function MovieTrailers(req, res) {
    const { id } = req.params;
    try {
        const data = await fetcing(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`)   
        res.status(200).json({
            success: true,
            trailers: data.results
        });
    } catch (error) {
        if(error.message.includes("404")){
            return res.status(404).send(null);
        }
        res.status(500).json({
            success: false,
            message: "Failed to fetch movie trailers"
        });
        
    }
};

// movie detaitls
export async function MovieDetails(req, res) {
    const { id } = req.params;
    try {
        const data = await fetcing(`https://api.themoviedb.org/3/movie/${id}?language=en-US`)   
        res.status(200).json({
            success: true,
            movieDetails: data
        });
    } catch (error) {
        if(error.message.includes("404")){
            return res.status(404).send(null);
        }
        res.status(500).json({
            success: false,
            message: "Failed to fetch movie details"
        });
        
    }
};

// similar Movies
export async function similarMovies(req, res) {
    const { id } = req.params;
    try {
        const data = await fetcing(`https://api.themoviedb.org/3/movie/${ id }/similar?language=en-US&page=1`)
        res.status(200).json({
            success: true,
            similarMovies: data.results
        });
    } catch (error) {
        if(error.message.includes("404")){
            return res.status(404).send(null);
        }
        res.status(500).json({
            success: false,
            message: "Failed to fetch similar movies"
        });
        
    }
};

// category

export async function movieCategory(req, res) {
    const { category } = req.params;
    try {
        const data = await fetcing(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`);
        res.status(200).json({
            success: true,
            movies: data.results
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch movies by category"
        })
        
    }
}