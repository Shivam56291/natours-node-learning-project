const express = require('express');
const viewController = require('../controllers/viewsController');
const authController = require('../controllers/authController');
const bookingController = require('../controllers/bookingController');

const router = express.Router();

router.use(viewController.alerts);

router.get(
  '/',
  // bookingController.createBookingCheckout,
  authController.isLoggedIn,
  viewController.getOverview
);

router.get('/tour/:slug', authController.isLoggedIn, viewController.getTour);
router.get('/login', authController.isLoggedIn, viewController.getLoginForm);
router.get('/signup', authController.isLoggedIn, viewController.getSignupForm);
router.get('/me', authController.protect, viewController.getAccount);
router.get('/my-tours', authController.protect, viewController.getMyTours);
router.get('/my-reviews', authController.protect, viewController.getMyReviews);
router.get('/billing', authController.protect, viewController.getMyBilling);

router.get(
  '/manage-tours',
  authController.protect,
  authController.restrictTo('admin'),
  viewController.getManageTours
);
router.get(
  '/manage-users',
  authController.protect,
  authController.restrictTo('admin'),
  viewController.getManageUsers
);
router.get(
  '/manage-reviews',
  authController.protect,
  authController.restrictTo('admin'),
  viewController.getManageReviews
);
router.get(
  '/manage-bookings',
  authController.protect,
  authController.restrictTo('admin'),
  viewController.getManageBookings
);

router.post(
  '/submit-user-data',
  authController.protect,
  viewController.updateUserData
);

module.exports = router;
