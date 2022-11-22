const Decorator = function(name) {
    this.name = name;
    this.stock = [];
}

Decorator.prototype.calculateTotalLitres = function () {
    let totalLitres = 0
    for (const paintCan of this.stock) {
       totalLitres += paintCan.litres;
    }
    return totalLitres
}

module.exports = Decorator