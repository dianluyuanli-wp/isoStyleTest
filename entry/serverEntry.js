import React from 'react';
import ServerEntry from './component/index';
import ReactSSR from 'react-dom/server';
import StyleContext from 'isomorphic-style-loader/StyleContext';


function serverRender(res, template) {
  const css = new Set();
  const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))
  const appString = ReactSSR.renderToString(
      <StyleContext.Provider value={{ insertCss }}>
        <ServerEntry />
      </StyleContext.Provider>
    );
  res.send(template.replace('<app></app>',appString).replace('<style></style>', `<style>${[...css].join('')}</style>`));
}

export default serverRender;