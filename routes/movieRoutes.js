const express = require("express");
const router = express.Router();
const { searchMovies, getMovieDetails } = require("../controllers/movieController.js")    // imported the CF. Destructed for readability


router.get("/search", searchMovies);    // defined the search route, associated it with the relevant CF
router.get("/:id", getMovieDetails)        // will get a specific movie by its IMDB id, associated it with the relevant CF



module.exports = router;
