const express = require('express');
const contoller = require('./../controllers/userController');

const router = express.Router();

router.route('/').get(contoller.getAllUsers).post(contoller.createUser);

router
  .route('/:id')
  .get(contoller.getUser)
  .patch(contoller.updateUser)
  .delete(contoller.deleteUser);

module.exports = router;
