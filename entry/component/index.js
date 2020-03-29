import React from 'react';
import s from './color.css';
import withStyles from 'isomorphic-style-loader/withStyles';
import useStyles from 'isomorphic-style-loader/useStyles';

//  react hooks 写法
// const ShowComponent = () => {
//     useStyles(s);
//     return <div className={s.color}>英雄的中国人民万岁万岁！</div>
// }
// export default ShowComponent;


//  传统写法
function ShowComponent(props, context) {
    return <div className={s.color}>英雄的中国人民万岁！</div>
}

export default withStyles(s)(ShowComponent);