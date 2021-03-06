const express = require("express");
const router = express.Router();
const Movie = require('../models/Movie')

/* GET home page */
router.get("/", (req, res, next) => {
  console.log("called");
  res.json({ message: "index" });
});

/* GET movies array */
router.get("/movies", (req,res,next) => {
  console.log("called for data")
  Movie.find().then(movies => {
    res.json(movies)
  })
})

/* GET Single movie */
router.get("/movies/:id", (req,res,next) => {
  console.log("called for single data")
  Movie.findById(req.params.id).then(movie => {
    res.json(movie)
  })
})

/* POST New Movie */
router.post("/movies/new", (req,res,next) => {
  console.log("new movie call", req.body)
  Movie.create(req.body).then(movie => {
    console.log(movie)
    res.send("Succesfully added movie!")
  })
})

module.exports = router;