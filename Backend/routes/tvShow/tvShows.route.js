import express from "express";
import { similarTvs, trendingTvShows, TvCategory, TvDetails, TvepsDetails, TvseasonDetails, TvTrailers } from "../../controller/tvshow/Tvshows.controller.js";

const router = express.Router();

// trending tv shows
router.get('/trending', trendingTvShows);

// Tv trailer
router.get("/:id/trailers", TvTrailers);

// Tv details
router.get("/:id/details", TvDetails);

// Tv Seasons details
router.get("/:id/season/:season/details", TvseasonDetails);

// Tv Eps detailsdetails per eps
router.get("/:id/eps/:episode/season/:season/details", TvepsDetails);

// similar Tvs
router.get("/:id/similar", similarTvs);

// Categories
router.get("/by_category/:category", TvCategory);


export default router;