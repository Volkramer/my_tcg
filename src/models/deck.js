export default class Deck {
    constructor(config) {
        this.cards = config.cards;
    }

    shuffle() {
        let deck = this.cards;

        let shuffled = function () {
            var i = 0,
                j = 0,
                temp = null

            for (i = this.cards.length - 1; i > 0; i -= 1) {
                j = Math.floor(Math.random() * (i + 1));
                temp = this.cards[i];
                this.cards[i] = this.cards[j];
                this.cards[j] = temp;
            }
        }

        if (shuffled === deck) {
            this.cards = shuffled;
            return false;
        } else {
            this.cards = shuffled;
            return true;
        }
    }

    draw() {
        if (this.cards.length == 0) {
            return false;
        } else {
            let card = this.cards.shift();
            return card;
        }
    }

    getCardsCount() {
        return this.cards.length;
    }

    insertAt(card, pos) {
        let oldDeckSize = this.cards.length;
        this.cards.splice(pos, 0, card);
        if (oldDeckSize + 1 === this.cards.length) {
            return true;
        } else {
            return false;
        }
    }
}