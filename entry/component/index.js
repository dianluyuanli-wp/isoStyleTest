import React from 'react';
import s from './color.css';
import withStyles from 'isomorphic-style-loader/withStyles';
//  import useStyles from 'isomorphic-style-loader/useStyles'

// // class ContextProvider extends React.Component {
// //     // static childContextTypes = {
// //     //   insertCss: PropTypes.func,
// //     // }
    
// //     getChildContext() {
// //       return { ...this.props.context }
// //     }
    
// //     render () {
// //       return <App { ...this.props } />
// //     }
// // }

// const ShowComponent = () => {
//     useStyles(s);
//     return <div className={s.color}>英雄的中国人民万岁！</div>
// }
function ShowComponent(props, context) {
    return <div className={s.color}>英雄的中国人民万岁！</div>
}

export default withStyles(s)(ShowComponent);

// import React from 'react'
// import useStyles from 'isomorphic-style-loader/useStyles'
// import s from './color.scss'
 
// const App = (props) => {
//   useStyles(s);
//   return (
//     <div className={s.root}>
//       <h1 className={s.title}>Hello, world!</h1>
//     </div>
//   )
// };

// export default App;