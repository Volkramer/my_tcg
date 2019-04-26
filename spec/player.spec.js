/* import Player from '../src/models/player';
import config from '../src/models/config';

let param = JSON.parse(config.player.param);
const player = new Player(param);

describe('Player', function () {
    describe('Shuffle', function () {
        it('Must return true', function () {
            let playerDeck = player.deck = ['test', 'test1', 'test2'];
            let cimetaryDeck = player.cemetary = ['test', 'test1', 'test2'];
            expect(player.shuffle(playerDeck)).toBe(true);
            expect(player.shuffle(cimetaryDeck)).toBe(true);
        });
    });
}); */