const Joi = require('@hapi/joi');

const createMovieSchema = Joi.object({
  title: Joi.string().max(100).required(),
  image_url: Joi.string().max(100).required(),
  genre: Joi.string().max(100).required(),
  language: Joi.string().max(100).required(),
  director: Joi.string().max(100).required(),
  producer: Joi.string().max(100).required(),
  release: Joi.number().required(),
  avgRating: Joi.number().required(),
  review: Joi.array().items(
    Joi.object({
      rating: Joi.number().required(),
      review: Joi.string().max(1000).required()
    })
  )
});

module.exports = createMovieSchema;
