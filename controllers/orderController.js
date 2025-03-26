const Order = require('../models/Order');

// Create new order
const addOrderItems = async (req, res) => {
  const { orderItems, totalPrice } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400).json({ message: 'No order items' });
    return;
  } else {
    const order = new Order({
      orderItems,
      totalPrice,
      user: req.user.id,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
};

module.exports = { addOrderItems };
