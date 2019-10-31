const Post = require('./../model/postModel');

exports.getAllPost = async (req, res) => {
  try {
    const posts = await Post.find();

    res.status(200).json({
      status: 'success',
      result: posts.length,
      data: {
        posts
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createPost = async (req, res) => {
  try {
    const newPost = await Post.create(req.body);

    res.status(200).json({
      status: 'success',
      data: {
        newPost
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};
