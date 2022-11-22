const Room = function(name, area) {
    this.name = name;
    this.area = area;
    this.painted = false;
}

Room.prototype.roomArea = function () {
    return this.area 
};

Room.prototype.checkPainted = function () {
    return this.painted;
};

Room.prototype.paintRoom = function () {
    this.painted = true;
};

module.exports = Room;