// server/routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// Create
router.post('/', async (req, res) => {
  const item = new Item(req.body);
  const saved = await item.save();
  res.json(saved);
});

// Read All
router.get('/', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// Update
router.put('/:id', async (req, res) => {
  const updated = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Delete
router.delete('/:id', async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

module.exports = router;
