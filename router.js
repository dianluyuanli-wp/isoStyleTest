var express = require('express');
var router = express.Router();
const React = require('react');
const ReactSSR = require('react-dom/server');
const fs = require('fs');
const path = require('path');

const template = fs.readFileSync(path.join(__dirname,'./view/server.html'),'utf8');
const ServerEntry = require('./dist/serverEntry.bundle.js');
/* GET home page. */
router.get('/', async function(req, res, next) {
  if (req._parsedOriginalUrl.query === 'useServer=1') {
    //  后端渲染
    const instance = React.createElement(ServerEntry.default);
    const appString = ReactSSR.renderToString(instance);
    res.send(template.replace('<app></app>',appString));
  }

  //前端渲染
  //  入口文件位置 ./entry/index.js 
  //  html文件 ./view/index.html
   res.render('index');
});

module.exports = router;

