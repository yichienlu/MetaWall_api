var express = require('express');
var router = express.Router();

const headers = require('../headers.js');
const handleSuccess = require('../handleSuccess.js');
const handleError = require('../handleError.js');

const Post = require('../models/posts')


/* GET posts listing. */
router.get('/', async function(req, res, next) {
  const posts = await Post.find()
  handleSuccess(res, "文章獲取成功", posts)
});

/* POST new post. */
router.post('/', async function(req, res, next) {
  try{
    const data = req.body
    if(data.content) {
      const newPost = await Post.create(req.body)
      handleSuccess(res, "文章發布成功", newPost)
    } else {
      handleError(res)
    }
  }
  catch(error){
    handleError(res,error.message)
  }
});

/* DELETE one post. */
router.delete('/:id', async function(req, res, next) {
  const id = req.url.split('/')[1];
  try{
    await Post.findByIdAndDelete(id);
    handleSuccess(res, "文章刪除成功", null)
  }
  catch(error){
    handleError(res, "文章刪除失敗", null)
  }

});



module.exports = router;
