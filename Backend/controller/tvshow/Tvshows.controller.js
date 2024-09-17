import { fetcing } from "../../services/tmdb.services.js";

export async function trendingTvShows(req, res) {
    try {
        const data = await fetcing('https://api.themoviedb.org/3/trending/tv/day?language=en-US')
        const randomTvShow = data.results[Math.floor(Math.random() * data.results?.length)]
        res.json({
            success: true,
            content: randomTvShow
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch trending TV shows"
        });
        
    }
};

// tv shows trailer
export async function TvTrailers(req, res) {
    const { id } = req.params;
    try {
        const data = await fetcing(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`)   
        res.json({
            success: true,
            trailers: data.results
        });
    } catch (error) {
        if(error.message.includes("404")){
            return res.status(404).send(null);
        }
        res.status(500).json({
            success: false,
            message: "Failed to fetch TV show trailers"
        });
        
    }
};

// tv shows Details
export async function TvDetails(req, res){
    const {id} = req.params;
    try {
        const data = await fetcing(`https://api.themoviedb.org/3/tv/${ id }?language=en-US`);
        res.json({
            success: true,
            tvDetails: data
        });
    } catch (error) {
        if(error.message.includes("404")){
            return res.status(404).send(null);
        }
        res.status(500).json({
            success: false,
            message: "Failed to fetch TV show details"
        });
    }
};

// Tv Shows Seasons details
export async function TvseasonDetails(req, res){
    const { id } = req.params;
    const { season } = req.params;
    try {
        const data = await fetcing(`https://api.themoviedb.org/3/tv/${ id }/season/${ season }?language=en-US`);
        res.json({
            success: true,
            tvDetails: data
        });
    } catch (error) {
        if(error.message.includes("404")){
            return res.status(404).send(null);
        }
        res.status(500).json({
            success: false,
            message: "Failed to fetch TV show details"
        });
    }
};

// Tv Shows Eps details
export async function TvepsDetails(req, res){
    const {id} = req.params;
    const { season } = req.params;
    const { episode } = req.params;
    try {
        const data = await fetcing(`https://api.themoviedb.org/3/tv/${ id }/season/${ season }/episode/${ episode }?language=en-US`);
        res.json({
            success: true,
            tvDetails: data
        });
    } catch (error) {
        if(error.message.includes("404")){
            return res.status(404).send(null);
        }
        res.status(500).json({
            success: false,
            message: "Failed to fetch TV show details"
        });
    }
};


// similar Tv Shows
export async function similarTvs(req, res) {
    const {id} = req.params;
    try {
        const data = await fetcing(`https://api.themoviedb.org/3/tv/${ id }/similar?language=en-US&page=1`);
        res.json({
            success: true,
            similarTvs: data.results
        });
    } catch (error) {
        if(error.message.includes("404")){
            return res.status(404).send(null);
        }
        res.status(500).json({
            success: false,
            message: "Failed to fetch similar TV shows"
        });      
    }
    
};

// category
export async function TvCategory(req, res) {
    const { category } = req.params;
    try {
        const data = await fetcing(`https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`);
        res.json({
            success: true,
            categoryTvs: data.results
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message: "Failed to fetch TV shows by category"
        });
        
    }
};