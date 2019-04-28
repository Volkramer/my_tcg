import EventManager from "../eventManager";

export default class Game extends EventManager {
    constructor(config) {
        super();
        this.up = config.up;
        this.down = config.down;
        this.turn = '';
    }

    randTurn() {
        let rand = Math.random();
        if (rand === 0) {
            return "down";
        } else {
            return "up";
        }
    }

    getTurn() {
        if (this.turn === "up" || this.turn === "down") {
            return this.turn;
        } else {
            return this.turn = this.randTurn();
        }
    }

    changeTurn() {
        if (this.getTurn() === "up") {
            return this.turn = "down";
        } else {
            return this.turn = "up";
        }
    }

    proxy(side, action, payload) {

    }
}