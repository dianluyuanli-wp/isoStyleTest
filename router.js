var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

//  后端渲染html模板
const template = fs.readFileSync(path.join(__dirname,'./view/server.html'),'utf8');
//  后端渲染入口打包文件
const ServerEntry = require('./dist/serverEntry.bundle.js');
/* GET home page. */
router.get('/', async function(req, res, next) {
  if (req._parsedOriginalUrl.query === 'useServer=1') {
    //  后端渲染
    //  入口文件 ./entry/serverEntry.js
    ServerEntry.default(res, template)
  } else {
    //前端渲染
    //  入口文件位置 ./entry/index.js 
    //  html文件 ./view/index.html
    res.render('index');
  }
});

module.exports = router;

