const assert = require('assert');
const Paint = require('../models/paint');

describe('Paint', function () {
    let paint;

    beforeEach(function () {
        paint = new Paint('Red', 25); //Arrange
    });

    it('should check paint level', function () {
        const actual = paint.checkLitres();
        assert.strictEqual(actual, 25);
    }); 

    it('should check if can empty', function () {
        const actual = paint.checkPaint();
        assert.strictEqual(actual, true);
    }); 

    it('can be emptied', function () {
        paint.emptyCan();
        const actual = paint.checkPaint()
        assert.strictEqual(actual, false);
    }); 

});

