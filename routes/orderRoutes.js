const express = require('express');
const router = express.Router();

// ✅ Get All Orders
router.get('/', (req, res) => {
  res.json({ message: 'List of all orders' });
});

// ✅ Get Single Order by ID
router.get('/:id', (req, res) => {
  const orderId = req.params.id;
  res.json({ message: `Order with ID: ${orderId}` });
});

// ✅ Create a New Order
router.post('/', (req, res) => {
  const { product, quantity, total } = req.body;
  res.json({ message: 'Order created successfully', product, quantity, total });
});

// ✅ Update an Order
router.put('/:id', (req, res) => {
  const orderId = req.params.id;
  res.json({ message: `Order with ID: ${orderId} updated` });
});

// ✅ Delete an Order
router.delete('/:id', (req, res) => {
  const orderId = req.params.id;
  res.json({ message: `Order with ID: ${orderId} deleted` });
});

module.exports = router;
