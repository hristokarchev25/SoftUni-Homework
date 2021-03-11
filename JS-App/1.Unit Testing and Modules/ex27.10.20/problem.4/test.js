let { addFive, subtractTen, sum } = require('./mathEnforcer.js');
let { assert } = require('chai');
describe('MathEnforcer', () => {
    describe('addFive', () => {
        it('should return undefined with incorrect type', () => {
            assert.equal(undefined, addFive('ico'));
        })
        it('should return correct num', () => {
            assert.equal(10, addFive(5));
        })
    })
    describe('subtractTen', () => {
        it('should return undefined with incorrect type', () => {
            assert.equal(undefined, subtractTen('ico'));
        })
        it('should return correct value', () => {
            assert.equal(0, subtractTen(10));
        })
    })
    describe('sum', () => {
        it('should return undefined with incorrect first param', () => {
            assert.equal(undefined, sum('Ico', 6));
        })
        it('should return undefined with incorrect second param', () => {
            assert.equal(undefined, sum(5, 'Ico'));
        })
        it('should return correct sum', () => {
            assert.equal(8, sum(4, 4));
        })
    })
})