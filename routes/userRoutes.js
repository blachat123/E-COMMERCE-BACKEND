const express = require('express');
const { authUser, registerUser, getUsers } = require('../controllers/userController'); // Check this path
const router = express.Router();

// ✅ Login Route
router.post('/login', authUser);

// ✅ Register Route
router.post('/', registerUser);

// Get all users
router.get('/', getUsers);
  

module.exports = router;
