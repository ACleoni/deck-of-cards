
// This class defines the deck and handles the shuffling of the array of cards
// Also handles the dealing of a single card to the user

class Deck
{
    constructor()
    {
        // The initial deck
        // 54 card count
        this.symbols = [
            // The Spades
            "Ace \u2660", 
            "2 \u2660", 
            "3 \u2660", 
            "4 \u2660", 
            "5 \u2660", 
            "6 \u2660", 
            "7 \u2660", 
            "8 \u2660", 
            "9 \u2660", 
            "10 \u2660", 
            "Jack \u2660", 
            "Queen \u2660",
            "King \u2660",
            // The Hearts
            "Ace \u2665", 
            "2 \u2665", 
            "3 \u2665", 
            "4 \u2665", 
            "5 \u2665", 
            "6 \u2665", 
            "7 \u2665", 
            "8 \u2665", 
            "9 \u2665", 
            "10 \u2665", 
            "Jack \u2665", 
            "Queen \u2665",
            "King \u2665",
            // The Clubs
            "Ace \u2663", 
            "2 \u2663", 
            "3 \u2663", 
            "4 \u2663", 
            "5 \u2663", 
            "6 \u2663", 
            "7 \u2663", 
            "8 \u2663", 
            "9 \u2663", 
            "10 \u2663", 
            "Jack \u2663", 
            "Queen \u2663",
            "King \u2663",
            // The Diamonds
            "Ace \u2666", 
            "2 \u2666", 
            "3 \u2666", 
            "4 \u2666", 
            "5 \u2666", 
            "6 \u2666", 
            "7 \u2666", 
            "8 \u2666", 
            "9 \u2666", 
            "10 \u2666", 
            "Jack \u2666", 
            "Queen \u2666",
            "King \u2666",
            // The Jokers
            "Joker (Guarantee)",
            "Joker"
        ]
    }
    async _shuffleDeck()
    {
        try
        {  
            

            const newDeck = await function shuffle(a) {
                for (let i = a.length - 1; i > 0; i--)
                {
                    const j = Math.floor(Math.random() * (i + 1));
                    [a[i], a[j]] = [a[j], a[i]];
                }
                return a
            }
            // Passes the new shuffled deck to the _dealCard() function which will return the zeroth symbol in the array
            return newDeck(this.symbols)
        }
        catch(err)
        {
            console.error(err)
        }
    }

    async _dealCard()
    {
        try
        {
            const dealtCard = await function deal(a) {
                // Returns the first card in the new array of symbols. Similar to the top card of a real deck. 
                // Can continue to draw cards until deck reaches 0, otherwise deck must be reshuffled
                if (a.length > 0) 
                {
                    return a.shift()
                }
                else
                {
                    throw "Deck is empty! Please reshuffle"
                }
        }
            return dealtCard(this.symbols)
        }
        catch(err)
        {    
            console.error(err)
        }

    }
}

module.exports = (new Deck())