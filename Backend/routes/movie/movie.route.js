import express from "express";
import { trendingMovie, MovieTrailers, MovieDetails, similarMovies, movieCategory,  } from '../../controller/movies/movie.controller.js'

const router = express.Router();

// trending movies
router.get('/trending', trendingMovie);

// movies trailer
router.get("/:id/trailers", MovieTrailers);

// movie details
router.get("/:id/details", MovieDetails);

// similar movies
router.get("/:id/similar", similarMovies);

// Categories
router.get("/:category", movieCategory);
export default router;