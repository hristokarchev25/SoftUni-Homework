let { assert } = require("chai");
let { lookupChar } = require('./lookupChar.js');

describe('charLookUp', () => {
    it('should return undefined with incorrect first param', () => {
        assert.equal(undefined, lookupChar(5, 0));
    })
    it(`should return undefined with incorrect second param`, () => {
        assert.equal(undefined, lookupChar('hristo', 'nikolai'));
    })
    it('should return Incorrect index with incorrect first param length', () => {
        assert.equal('Incorrect index', lookupChar('ico', 5));
    })
    it('should return Incorrect index with incorrect second param length', () => {
        assert.equal('Incorrect index', lookupChar('Mitko', -1));
    })
    it('should return correct char.', () => {
        assert.equal('i', lookupChar('Hristo', 2));
    })
})