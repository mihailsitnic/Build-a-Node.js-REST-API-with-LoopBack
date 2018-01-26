'use strict';

module.exports = function(Product) {
    const validQuantity = quantity => Boolean(quantity > 0);
    Product.prototype.buy = function(quantity, callback) {
        if (!validQuantity(quantity)) {
            return callback(`Invalid quantity ${quantity}`);
        }
        var result = {quantity};
        // TODO
        callback(null, result);
    };
};
