let { assert } = require('chai');
const { describe } = require('mocha');
let StringBuilder = require('./string-builder');

describe('StringBuilder', () => {
    let sb;
    beforeEach(() => {
        sb = new StringBuilder();
    })
    describe('verifyParams', () => {
        it('should throw exception when param is not a string', () => {
            assert.throw(() => {
                new StringBuilder({});
            }, 'Argument must be string');
        })
    })
    describe('constructor', () => {
        it('should work properly without arg', () => {
            assert.equal('', sb.toString());
        })
        it('should work properly with arg', () => {
            sb = new StringBuilder('hristo');
            assert.equal('hristo', sb.toString());
        })

    })
    describe('append', () => {
        it('should append string after the text', () => {
            sb.append('hristo');
            assert.equal('hristo', sb.toString());
        })
    })
    describe('prepend', () => {
        it('should append text at the start', () => {
            sb.prepend('hristo');
            assert.equal('hristo', sb.toString());
        })
    })
    describe('insertAt', () => {
        it('should insert text at index', () => {
            sb.append('histo');
            sb.insertAt('r', 1);
            assert.equal('hristo', sb.toString());
        })
    })
    describe('remove', () => {
        it('should remove text form one index to second index', () => {
            sb.append('hristo');
            sb.remove(0, 2);
            assert.equal('isto', sb.toString());
        })
    })
    describe('toString', () => {
        it('should return joined string', () => {
            sb.append('hristo');
            assert.equal('hristo', sb.toString());
        })
    })
})