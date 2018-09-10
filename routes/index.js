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
        console.log(card)
        if (card)
        {
            res.render('index', {card: card})
        } 
        else 
        {
            res.render('index', {card: 'Deck is empty! Please reshuffle.'})
        }
    })
    .catch((err) => {
        console.error(err)
    })
})

module.exports = router;
