const express = require('express');
const contoller = require('./../controllers/tourController');

const router = express.Router();

// router.param('id', contoller.checkID);

router
  .route('/')
  .get(contoller.getAllTours)
  .post(contoller.createTour);

router
  .route('/:id')
  .get(contoller.getTour)
  .patch(contoller.updateTour)
  .delete(contoller.deleteTour);

module.exports = router;
