
// This class defines the deck and handles the shuffling of the array of cards
// Also handles the dealing of a single card to the user

class Deck
{
    constructor()
    {
        // The initial deck
        // Inlcudes 13 "card names"
        this.symbols = [
            "Alpha", 
            "Beta", 
            "Charlie", 
            "Delta", 
            "Echo", 
            "Foxtrot", 
            "Golf", 
            "Hotel", 
            "India", 
            "Juliett", 
            "Kilo", 
            "Lima",
            "Mike"
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