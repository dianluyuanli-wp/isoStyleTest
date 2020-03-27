import React from 'react';
import s from './color.css';
import withStyles from 'isomorphic-style-loader/withStyles'

const ShowComponent = () => {
    return <div className={s.color}>英雄的中国人民万岁！</div>
}

export default withStyles(s)(ShowComponent);