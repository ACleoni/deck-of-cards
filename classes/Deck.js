class Deck
{
    async _shuffleDeck()
    {
        try
        {  
            // The initial deck
            const symbols = ["∆", "ß", "£", "§", "•", "$", "+", "ø"]

            const newDeck = await function shuffle(a) {
                for (let i = a.length - 1; i > 0; i--)
                {
                    const j = Math.floor(Math.random() * (i + 1));
                    [a[i], a[j]] = [a[j], a[i]];
                }
                return a
            }
            // Passes the new shuffled deck to the _dealCard() function which will return the zeroth symbol in the array
            return this._dealCard((newDeck(symbols)))
        }
        catch(err)
        {
            console.error(err)
        }
    }

    async _dealCard(a)
    {
        try
        {
            const dealtCard = await function deal(a) {
                // Returns the first card in the new array of symbols. Similar to the top card of a real deck.
                return a[0]
        }
            return dealtCard(a)
        }
        catch(err)
        {
            console.error(err)
        }

    }
}

module.exports = (new Deck())