const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// GET /books
router.get('/', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// GET /books/:id
router.get('/:id', async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.json(book);
});

// POST /books (Admin only)
router.post('/', async (req, res) => {
  const newBook = new Book(req.body);
  await newBook.save();
  res.json(newBook);
});

module.exports = router;
