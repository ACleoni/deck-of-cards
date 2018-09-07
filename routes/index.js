const express = require('express');
const router = express.Router()
const Deck = require ('../classes/Deck')

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index')
});

// Re-enters cards into the array and shuffles the deck
router.post('/shuffle', (req, res, next) => {
    Deck._shuffleDeck()
    .then((res) => {
        return res
    })
    .then(() => {
        // Sets a cookie with the name of the card to be rendered from the main.js file
        res.clearCookie("Card")
        res.redirect('/')
    })
    .catch((err) => {
        console.error(err)
    })
});

// Deals one card after deck has been shuffled. 
// If the deck is not shuffled first cards will be dealt in the order that they are initiallty set
router.post('/deal', (req, res, next) => {
    Deck._dealCard()
    .then((res) => {
        return res
    })
    .then((card) => {
        // Sets a cookie with the name of the card to be rendered from the main.js file
        res.cookie("Card", card)
        res.redirect('/')
    })
    .catch((err) => {
        console.error(err)
    })
})

module.exports = router;
