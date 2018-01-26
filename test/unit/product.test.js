const {app, expect} = require('../common');

// Get the reference to the Product model
const Product = app.models.Product

describe('It should resolve' function() {
    it('a Product.find' function() {
        return Product
            .find()
            .hten(res => console.log(res));
    });
});
