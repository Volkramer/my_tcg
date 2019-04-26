import Pawn from '../src/models/pawn';

const pawn1 = new Pawn(10, 5, 2);
const pawn2 = new Pawn(10, 5, 2);

describe('pawn', function () {
    describe('getLife', function () {
        it("Must return 10", function () {
            expect(pawn1.getLife()).toBe(10);
        });
    });
    describe('getStrength', function () {
        it("Must return 5", function () {
            expect(pawn1.getStrength()).toBe(5);
        });
    });
    describe('getDef', function () {
        it("Must return 2", function () {
            expect(pawn1.getDef()).toBe(2);
        });
    });
    describe('recieveAttack', function () {
        it("must return true", function () {
            expect(pawn1.recieveAttack(pawn2)).toBe(true);
        });
    });
});