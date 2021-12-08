const Joi = require('@hapi/joi');

const updateMovieSchema = Joi.object({
  title: Joi.string().max(100),
  image_url: Joi.string().max(100),
  genre: Joi.string().max(100),
  language: Joi.string().max(100),
  director: Joi.string().max(100),
  producer: Joi.string().max(100),
  release: Joi.number(),
  avgRating: Joi.number(),
  review: Joi.array().items(
    Joi.object({
      rating: Joi.number(),
      review: Joi.string().max(1000)
    })
  )
});

module.exports = updateMovieSchema;
