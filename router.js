var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  //前端渲染
  //入口文件位置 ./static/ComRender.js 

  res.render('index');
});

module.exports = router;

