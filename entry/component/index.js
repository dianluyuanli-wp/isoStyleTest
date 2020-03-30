import React from 'react';
import s from './color.css';

//  传统写法
function ShowComponent(props, context) {
    return <div className={s.color}>英雄的中国人民万岁！</div>
}

export default ShowComponent;