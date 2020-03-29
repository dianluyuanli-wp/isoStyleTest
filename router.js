var express = require('express');
var router = express.Router();
const React = require('react');
const ReactSSR = require('react-dom/server');
const fs = require('fs');
const path = require('path');
const StyleContext = require('isomorphic-style-loader/StyleContext')

const template = fs.readFileSync(path.join(__dirname,'./view/server.html'),'utf8');
const ServerEntry = require('./dist/serverEntry.bundle.js');
// const css = new Set();
// const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))
/* GET home page. */
router.get('/', async function(req, res, next) {
  //前端渲染
  //入口文件位置 ./entry/index.js 
  //  res.render('index');

  //  后端渲染
  //  入口文件 ./entry/serverEntry.js
  // const child = React.createElement(ServerEntry.default);
  // const instance = React.createElement(StyleContext.Provider, { value: insertCss }, child);
  // const appString = ReactSSR.renderToString(instance);
  // res.send(template.replace('<app></app>',appString).replace('<style></style>', `<style>${[...css].join('')}</style>`));
  ServerEntry.default(res, template)

});

module.exports = router;

