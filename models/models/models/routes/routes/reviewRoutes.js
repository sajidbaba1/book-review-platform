const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// GET /reviews
router.get('/:bookId', async (req, res) => {
  const reviews = await Review.find({ bookId: req.params.bookId });
  res.json(reviews);
});

// POST /reviews
router.post('/', async (req, res) => {
  const newReview = new Review(req.body);
  await newReview.save();
  res.json(newReview);
});

module.exports = router;
