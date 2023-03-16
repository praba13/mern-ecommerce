const express = require('express');
const router = express.Router();
const {
  getProducts,
  newProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  createReview,
  getReviews,
  deleteReview
} = require('../controllers/productController');

const {
  isAuthenticatedUser,
  authorizeRoles
} = require('../middlewares/authenticate');

router.route('/products').get(isAuthenticatedUser, getProducts);

router
  .route('/product/:id')
  .get(getSingleProduct)
  .put(updateProduct)
  .delete(deleteProduct); //chain func

router
  .route('/review')
  .put(isAuthenticatedUser, createReview)
  .delete(deleteReview);
router.route('/reviews').get(getReviews);

//Admin routes
router
  .route('/admin/product/new')
  .post(isAuthenticatedUser, authorizeRoles('admin'), newProduct);

module.exports = router;
