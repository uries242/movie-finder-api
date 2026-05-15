const express = require("express");
const router = express.Router();
const { searchMovies, getMovieById } = require("../controllers/movieController.js")    // imported the CF. Destructed for readability

router.get("/search", searchMovies);    // defined the search route, associated it with the relevant CF
router.get("/:id", getMovieDetails)        // defined the search by id route, associated it with the relevant CF



module.exports = router;
