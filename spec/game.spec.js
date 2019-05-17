import Game from "../src/models/game";
import Config from "../src/models/config";
import Board from '../src/models/board';
import Deck from '../src/models/deck';
import Player from '../src/models/player';
import Hand from '../src/models/hand';
import Cemetary from '../src/models/cemetary';

var param = JSON.parse(Config.game.param);
const game = new Game(param);
const deck = new Deck(param);
const player = new Player(param);
const hand = new Hand(param);
const board = new Board(param);
const cemetary = new Cemetary(param);

const getAllMethods = (obj) => {
    let props = []

    do {
        const l = Object.getOwnPropertyNames(obj)
            .concat(Object.getOwnPropertySymbols(obj).map(s => s.toString()))
            .sort()
            .filter((p, i, arr) =>
                typeof obj[p] === 'function' && //only the methods
                p !== 'constructor' && //not the constructor
                (i == 0 || p !== arr[i - 1]) && //not overriding in this prototype
                props.indexOf(p) === -1 //not overridden in a child
            )
        props = props.concat(l)
    }
    while (
        (obj = Object.getPrototypeOf(obj)) && //walk-up the prototype chain
        Object.getPrototypeOf(obj) //not the the Object prototype methods (hasOwnProperty, etc...)
    )

    return props
}

console.log(getAllMethods(player));

describe('GAME', function () {
    describe('getTurn', function () {
        it('Must return a string', function () {
            expect(typeof game.getTurn()).toEqual('string');
        });
    });
    describe('changeTurn', function () {
        it('Must return a string', function () {
            expect(typeof game.changeTurn()).toEqual('string');
        })
    });
});