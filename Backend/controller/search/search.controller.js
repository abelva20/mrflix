import { fetcing } from "../../services/tmdb.services.js";

export async function searchPerson(req, res) {
    const { name } = req.params;
    
    try {
        const person = await fetcing(`https://api.themoviedb.org/3/search/person?query=${name}&include_adult=false&language=en-US&page=1`);

        if(person.results.length === 0) {
            return res.status(404).send(null)
        }
        res.status(200).json({
            success: true,
            content: person.results
        })
    } catch (error) {
        console.log("error search person in controller", error.message);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
        
    }
}
export async function searchMovie(req, res){
    const { query } = req.params;
    try {
        const data = await fetcing(`https://api.themoviedb.org/3/search/movie?query=${ query }&include_adult=false&language=en-US&page=1`);
        if(data.results.length === 0){
            return res.status(404).send(null)
        }
        res.status(200).json({
            success: true,
            content: data.results
        })

    } catch (error) {
        console.log("error search movie", error.message);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

export async function searchTV(req, res){
    const { show } = req.param;
    try {
        const tvShow = await fetcing(`https://api.themoviedb.org/3/search/tv?query=${ show }&include_adult=false&language=en-US&page=1`);
        if(tvShow.results.length === 0){
            return res.status(404).send(null)
        }
        res.status(200).json({
            success: true,
            content: tvShow.results
        })


    } catch (error) {
        console.log("error search Tv show", error.message);
        res.status(500).json({
            success: false,
            message: "Interal server error"
        })
    }
}