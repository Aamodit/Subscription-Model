const express = require('express');
const router = express.Router();
const {
  createSubscription,
  getUserSubscription,
  updateSubscription,
  cancelSubscription
} = require('../controllers/subscriptionController');

router.post('/', createSubscription);
router.get('/:userId', getUserSubscription);
router.put('/:userId', updateSubscription);
router.delete('/:userId', cancelSubscription);

module.exports = router;
