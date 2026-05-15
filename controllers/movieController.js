const axios = require("axios");

// searchMovies Handler/Controller Function
const searchMovies = async (req, res) => {
  const title = req.query.title;

  if (!title) {
    // if the title query param is missing
    return res.status(400).json({ error: "Title query parameter is required" });
  }

  try {
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        s: title,
        apikey: process.env.OMDB_API_KEY,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

// getMovieDetails Handler/Controller Function 
const getMovieDetails = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        i: id,
        apikey: process.env.OMDB_API_KEY,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

