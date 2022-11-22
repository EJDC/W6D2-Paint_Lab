const assert = require('assert');
const Room = require('../models/room');

describe('Room', function () {
    let room;

    beforeEach(function () {
        room = new Room('Bedroom', 25); //Arrange
    });

    it('should calculate square area', function () {
        const actual = room.roomArea();
        assert.strictEqual(actual, 25);
    }); 

    it('is not painted', function () {
        const actual = room.checkPainted();
        assert.strictEqual(actual, false);
    }); 

    it('can be painted', function () {
        room.paintRoom();
        const actual = room.checkPainted()
        assert.strictEqual(actual, true);
    }); 

});


