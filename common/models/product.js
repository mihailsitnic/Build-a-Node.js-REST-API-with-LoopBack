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
    // Validate minnimal length of the name
    Product.validatesLengthOf('name', {
        min: 3,
        message: {
            min: 'Name should be least 3 characters',
        }
    });
};
