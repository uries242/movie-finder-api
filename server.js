require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const routes = require("./routes/movieRoutes.js");

app.get("/test", (req, res) => {
  res.send("Good Test!");
});

app.use("/api/movies", routes);




app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});
