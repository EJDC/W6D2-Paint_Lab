const Paint = function(name, litres) {
    this.name = name;
    this.litres = litres;
    this.can_full = true;
}

Paint.prototype.checkLitres = function () {
    return this.litres
};

Paint.prototype.checkPaint = function () {
    return this.can_full
};

Paint.prototype.emptyCan = function () {
    this.can_full = false
}

module.exports = Paint
