const express = require('express');
const postController = require('./../controllers/postController');

const router = express.Router();

router
  .route('/')
  .get(postController.getAllPost)
  .post(postController.createPost);

//export router
module.exports = router;
