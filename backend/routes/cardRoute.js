const express = require('express');
const router = express.Router();
const { postCard, getAllCards, getCard } = require('../controllers/cardController')

router.get('/', getAllCards);  // get all cards
router.get('/:title', getCard);    // get a specific card
router.post('/', postCard);     // post a card

module.exports = router;