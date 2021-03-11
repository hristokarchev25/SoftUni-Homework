const assert = require('chai').assert;
const calc = require('./index');

describe('Calc Sum', function () {
    it('Should return positive num when adding two pos nums', () => {
        //arrange
        let fnumber = 1;
        let secNum = 5;

        //act
        let result = calc.sum(fnumber, secNum);
        //assert
        assert.equal(result, 6);
    });
    it('Should return neg num when adding two neg nums ', () => {
        let result = calc.sum(-5, -10);
        assert.equal(result, -15);
    });
});