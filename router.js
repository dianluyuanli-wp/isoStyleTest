var express = require('express');
var router = express.Router();
const React = require('react');
const ReactSSR = require('react-dom');
const fs = require('fs');
const path = require('path');
const StyleContext = require('isomorphic-style-loader/StyleContext')

const template = fs.readFileSync(path.join(__dirname,'./view/server.html'),'utf8');
const ServerEntry = require('./dist/entry.bundle.js');
//import ServerEntry from './entry/component/index';
const css = new Set(); // require('./dist/serverEntry.css'); // CSS for all rendered React components
const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))
/* GET home page. */
router.get('/', async function(req, res, next) {
  //前端渲染
  //入口文件位置 ./entry/index.js 
  //  res.render('index');

  //  后端渲染
  //  入口文件 ./entry/index.js
  // console.log(ServerEntry.default, 22);
  // const child = React.createElement(ServerEntry.default);
  // console.log(child, 1);
  // const instance = React.createElement(StyleContext.Provider, { value: insertCss }, child);
  // const appString = ReactSSR.renderToString(
  //   <StyleContext.Provider value={{ insertCss }}>
  //     <ServerEntry />
  //   </StyleContext.Provider>
  // );
  // //  const appString = ReactSSR.renderToString(instance);
  // res.send(template.replace('<app></app>',appString).replace('<style></style>', `<style>${[...css].join('')}</style>`));
  ServerEntry.default(res, template)

});

module.exports = router;

