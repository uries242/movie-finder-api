const axios = require("axios");			




const searchMovies = async (req, res) => {
    const title = req.query.title

    if (!title) {                                                                     // if the title query param is missing
        return res.status(400).json({ error: "Title query parameter is required"})
        
    }
}