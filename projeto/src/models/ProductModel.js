const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
      name: {
            type: String,
            required: true,
      },
      image: {
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
      rating: {
            type: Number,
            min: 0,
            max: 5,
            required: true
      },
      isBestSeller: {
            type: Boolean,
            default: false
      },
      createdAt: {
            type: Date,
            default: Date.now
      },
});

productSchema.statics.createProduct = async function (productData) {
      const {name, image, price, description, rating, isBestSeller} = productData;
      return this.create({
            name,
            image,
            price,
            description,
            rating,
            isBestSeller
      });
};

productSchema.statics.getBestSellers = async function() {
      return this.find({ isBestSeller: true });
};

productSchema.statics.getTopRatedProducts = async function() {
      return this.find({ rating: { $gte: 4 } });
};

productSchema.statics.getProductsOfDB = async function() {
      return this.find().cursor();
      
}

// productSchema.methods.findProduct = async function(produtoId) {
//       Produto.findById(produtoId);
//   }

module.exports = mongoose.model('Product', productSchema);