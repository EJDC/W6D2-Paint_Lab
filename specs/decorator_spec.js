const assert = require('assert');
const Decorator = require('../models/decorator');
const Paint = require('../models/paint');

describe('Decorator', function () {
    let decorator;

    beforeEach(function (){
        let paint1 = new Paint('Red', 5);
        let paint2 = new Paint('Mauve', 5);
        let paint3 = new Paint('Beige', 5);
        decorator = new Decorator('Gregg', [paint1, paint2, paint3]);
    })

    it('should calcualte total stock litres', function () {
        const actual = decorator.calculateTotalLitres();
        assert.strictEqual(actual, 15);
    })

})