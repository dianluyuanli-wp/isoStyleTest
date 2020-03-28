const React = require('react');
const ReactSSR = require('react-dom/server');
// const fs = require('fs');
// const path = require('path');
import ServerEntry from './entry/component/index';
const StyleContext = require('isomorphic-style-loader/StyleContext')


function xxx(res, template) {
    const css = new Set(); // require('./dist/serverEntry.css'); // CSS for all rendered React components
const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))
    const appString = ReactSSR.renderToString(
        <StyleContext.Provider value={{ insertCss }}>
          <ServerEntry />
        </StyleContext.Provider>
      );
      //  const appString = ReactSSR.renderToString(instance);
    res.send(template.replace('<app></app>',appString).replace('<style></style>', `<style>${[...css].join('')}</style>`));
}

export default xxx;