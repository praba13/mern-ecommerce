const express = require('express');
const router = express.Router();
const {
  getProducts,
  newProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

router.route('/products').get(getProducts);
router.route('/product/new').post(newProduct);
router
  .route('/product/:id')
  .get(getSingleProduct)
  .put(updateProduct)
  .delete(deleteProduct); //chain func

module.exports = router;
