class Deck
{
    async _shuffleDeck()
    {
        try
        {  
            const symbols = ["∆", "ß", "£", "§", "•", "$", "+", "ø"]

            const newDeck = await function shuffle(a) {
                for (let i = a.length - 1; i > 0; i--)
                {
                    const j = Math.floor(Math.random() * (i + 1));
                    [a[i], a[j]] = [a[j], a[i]];
                }
                return a
            }
            return (newDeck(symbols))
        }
        catch(err)
        {
            console.error(err)
        }
    }
}

module.exports = (new Deck())