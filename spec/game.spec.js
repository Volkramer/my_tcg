import Game from "../src/models/game";
import Config from "../src/models/config";

var param = JSON.parse(Config.game.param);
const game = new Game(param)

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