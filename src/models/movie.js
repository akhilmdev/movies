const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    maxlength: 100,
    required: true,
  },
  image_url: {
    type: String,
    maxlength: 100,
    required: true,
  },
  genre: {
    type: String,
    maxlength: 100,
    required: true,
  },
  language: {
    type: String,
    maxlength: 100,
    required: true,
  },
  director: {
      type: String,
      maxlength: 100,
      required: true,
  },
  producer: {
      type: String,
      maxlength: 100,
      required: true,
  },
  release: {
      type: Number,
      required: true,
  },
  avgRating: {
      type: Number,
      required: true,
  },
  review: [
    {
      rating: Number,
    },
    {
      review: String
    }
  ]
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
