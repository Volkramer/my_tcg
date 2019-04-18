import Deck from '../src/models/deck';
import Config from '../src/models/config';

var param = JSON.parse(Config.deck.param);
const deck = new Deck(param);

describe('Deck', function () {
	describe('Shuffle', function () {
		it('Must return boolean', function () {
			expect(typeof deck.shuffle()).toEqual('boolean');
		});
	});

	describe('Draw', function () {
		it('Must return the first card test in the deck', function () {
			deck.cards = ['test', 'test2', 'test3'];
			expect(deck.draw()).toBe('test');
		});
		it('Must return false if deck is empty', function () {
			deck.cards = [];
			expect(deck.draw()).toBe(false);
		});
	});

	describe('GetCardsCount', function () {
		it('Must return 0 if deck is empty', function () {
			deck.cards = [];
			expect(deck.getCardsCount()).toBe(0);
		});
		it('Must return 3 if deck has 3 cards', function () {
			deck.cards = ['test', 'test1', 'test2'];
			expect(deck.getCardsCount()).toBe(3);
		});
	});

	describe('InsertAt', function () {
		it('Must return true if function working', function () {
			deck.cards = ['test'];
			expect(deck.insertAt('test1', 0)).toBe(true);
		});
	});
});