let assert = require('chai').assert;
let { isOddOrEven } = require('./isOddOrEven.js')
describe('isOddOrEven', () => {
    it('should return undefined with param different form string', () => {
        assert.equal(undefined, isOddOrEven(5));
    })
    it('should return undefined with param different form string.vol2', () => {
        assert.equal(undefined, isOddOrEven({}));
    })
    it('should return even', () => {
        assert.equal('even', isOddOrEven('word'));
    })
    it('should return odd', () => {
        assert.equal('odd', isOddOrEven('words'));
    })
})