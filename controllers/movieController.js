const axios = require("axios");

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

const getMovieDetails = async (req, res) => {
  const title = req.query.params;

};


