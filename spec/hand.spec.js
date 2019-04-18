import config from '../src/models/config';
import Hand from '../src/models/hand';

let param = JSON.parse(config.hand.param);
const hand = new Hand(param);

describe('Hand', function () {

    describe('addCard', function () {
        it('Must return true if everything is fine', function () {
            expect(hand.addCard('test')).toBe(true);
        });
    });

    describe('removeCard', function () {
        it('Must return false if no card in deck', function () {
            hand.cards = [];
            expect(hand.removeCard(0)).toBe(false);
        });
        it('Must return test1 if card number to be removed is 1', function () {
            hand.cards = ['test', 'test1', 'test2'];
            expect(hand.removeCard(1)).toBe('test1');
        });
        it('Must return false if card number to be removed is greater than the number of card in deck', function () {
            hand.cards = ['test', 'test1', 'test2'];
            expect(hand.removeCard(4)).toBe(false);
        });
    });

    describe('getAllCards', function () {
        it('Must return an array with 1 card test', function () {
            hand.cards = ['test'];
            expect(hand.getAllCards()).toEqual(['test']);
        });
    });
});