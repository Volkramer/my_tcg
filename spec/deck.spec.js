import Deck from '../src/models/deck';
import Config from '../src/models/config';

var param = JSON.parse(Config.deck.param);
const deck = new Deck(param);

describe('DECK', function () {
	describe('Shuffle', function () {
		it('Without card in deck, must return false', function () {
			deck.cards = [];
			expect(deck.shuffle()).toEqual(false);
		});
		it('If deck is a falsy array, must return false', function () {
			deck.cards = 3;
			expect(deck.shuffle()).toEqual(false);
			deck.cards = 'test';
			expect(deck.shuffle()).toEqual(false);
			deck.cards = true;
			expect(deck.shuffle()).toEqual(false);
			deck.cards = null;
			expect(deck.shuffle()).toEqual(false);
		});
		it('if deck is shuffled, must return true', function () {
			deck.cards = ['test', 'test2', 'test3'];
			expect(deck.shuffle()).toEqual(true);
		})
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
		it('If deck is a falsy array, must return false', function () {
			deck.cards = 3;
			expect(deck.shuffle()).toEqual(false);
			deck.cards = 'test';
			expect(deck.shuffle()).toEqual(false);
			deck.cards = true;
			expect(deck.shuffle()).toEqual(false);
			deck.cards = null;
			expect(deck.shuffle()).toEqual(false);
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
		it('If deck is a falsy array, must return false', function () {
			deck.cards = 3;
			expect(deck.shuffle()).toEqual(false);
			deck.cards = 'test';
			expect(deck.shuffle()).toEqual(false);
			deck.cards = true;
			expect(deck.shuffle()).toEqual(false);
			deck.cards = null;
			expect(deck.shuffle()).toEqual(false);
		});
	});

	describe('InsertAt', function () {
		it('Must return true if function working', function () {
			deck.cards = ['test'];
			expect(deck.insertAt('test1', 0)).toBe(true);
		});
	});
});