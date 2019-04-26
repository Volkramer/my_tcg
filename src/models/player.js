/* import ModelFactory from './factory';
import Pawn from './pawn';
import Board from './board';
import Cemetary from './board';

export default class Player extends Pawn {

    constructor(config) {
        super();
        this.type = config.type;

        this.deck = ModelFactory.get('deck');
        this.hand = ModelFactory.get('hand');
        this.board = new Board();
        this.cemetary = new Cemetary();
    }

    shuffle(deck) {
        return deck.shuffle();
    }

    draw() {
        return this.deck.draw();
    }

    playCard(pos) {
        return board.addCard(hand.removeCard(pos));
    }

    discard(pos) {
        return cemetary.addCard(hand.removeCard(pos));
    }

    attack(pos, target) {
        return board.removeCard(pos).attack(target);
    }



} */