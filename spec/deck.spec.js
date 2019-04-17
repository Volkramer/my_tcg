import Deck from '../src/models/deck';
import Config from '../src/models/config';
import {
	isObject
} from 'util';

var param = JSON.parse(Config.deck.param);

describe('Deck', function () {
	describe('Shuffle', function () {
		it('Must return boolean', function () {
			const deck = new Deck(param);
			expect(typeof deck.shuffle()).toEqual('boolean');
		});
	});

	describe('Draw', function () {
		it('Must return an Object or False', function () {
			const deck = new Deck(param);
			var card = deck.draw();
			var cardObject = isObject(card);
			var cardBool = (card === false);
			expect(cardObject || cardBool).toBe(true);
		});
	});

	describe('GetCardsCount', function () {
		it('Must return an Int', function () {
			const deck = new Deck(param);
			expect(typeof deck.getCardsCount()).toEqual('number');
		});
	});

	describe('InsertAt', function () {
		it('Must return an Object', function () {
			const deck = new Deck(param);
			expect(typeof deck.insertAt('test', 0)).toEqual('object');
		})
	})
});