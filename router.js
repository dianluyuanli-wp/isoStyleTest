var express = require('express');
var router = express.Router();
const React = require('react');
const ReactSSR = require('react-dom/server');
const fs = require('fs');
const path = require('path');
const StyleContext = require('isomorphic-style-loader/StyleContext')

const template = fs.readFileSync(path.join(__dirname,'./view/server.html'),'utf8');
const ServerEntry = require('./dist/serverEntry.bundle');
const css = require('./dist/serverEntry.css'); // CSS for all rendered React components
const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))
/* GET home page. */
router.get('/', async function(req, res, next) {
  //前端渲染
  //入口文件位置 ./entry/index.js 
  //  res.render('index');

  //  后端渲染
  //  入口文件 ./entry/index.js
  const instance = React.createElement(StyleContext.Provider, { value: insertCss }, ServerEntry.default);
  // const appString = ReactSSR.renderToString(
  //   <StyleContext.Provider value={{ insertCss }}>
  //     <ServerEntry />
  //   </StyleContext.Provider>
  // );
  const appString = ReactSSR.renderToString(instance);
  res.send(template.replace('<app></app>',appString));
});

module.exports = router;

