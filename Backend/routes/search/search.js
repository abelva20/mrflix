import express from "express";
import { searchMovie, searchPerson, searchTV } from "../../controller/search/search.controller.js";

const router = express.Router();

router.get("/person/:name", searchPerson);
router.get("/movie/:query", searchMovie);
router.get("/tv/:show", searchTV);
export default router;