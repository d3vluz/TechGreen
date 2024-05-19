const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//feito com base no 'UserModel.js por levi e natan

const productSchema = new mongoose.Schema({
      name: {
            type: String,
            required: true,
      },
      price: {
            type: Number,
            required: true,
      },
      description: {
            type: String,
            required: true,
      },
      createdAt: {
            type: Date,
            default: Date.now
      },
});

productSchema.statics.createProduct = async function (productData) {
      const {name, price, description} = productData;

      return this.create({
            name,
            price,
            description,
      });
};

productSchema.statics.showProducts = async function() {
      return this.find();
}

productSchema.methods.findProduct = async function(produtoId) {
      Produto.findById(produtoId);
  }

module.exports = mongoose.model('Product', productSchema);