const Deck = require('../classes/Deck');

test('Shuffles the deck', () => {
    Deck._shuffleDeck()
    .then(res => {
        return res
    })
    .then(deck => {
        expect(deck).toBeDefined();
        console.log(deck)
    })
});

test('Deals a card', () => {
    Deck._dealCard()
    .then(res => {
        return res
    })
    .then(card => {
        expect(card).toBeDefined()
        console.log(card)
    })
})