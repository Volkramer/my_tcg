export default class Hand {
    constructor(config) {
        this.cards = config.cards;
        this.limit = config.limit;
    }

    addCard(card) {
        let oldSize = this.cards.length;
        if (oldSize === this.limit) {
            return false;
        }
        let newSize = this.cards.push(card);
        if (oldSize === (newSize - 1) && this.cards[(this.cards.length) - 1] === card) {
            return true;
        } else {
            return false;
        }
    }

    removeCard(pos) {
        let card = this.cards.splice(pos, 1);
        if (typeof card[0] === "string") {
            return card[0];
        } else {
            return false;
        }
    }

    getAllCards() {
        return this.cards;
    }

    getCardsCount() {
        return this.cards.length;
    }
}