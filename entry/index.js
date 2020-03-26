import React from 'react';
import ReactDom from 'react-dom';
import Com from './component';

//  挂载组件
const mountNode = document.getElementById('main');

//  在html的节点上挂载组件
ReactDom.render((
    <Com />
),mountNode);