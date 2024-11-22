const express = require('express');
const router = express.Router();
const User = require('../models/User');

// GET /users/:id
router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

// PUT /users/:id
router.put('/:id', async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedUser);
});

module.exports = router;
