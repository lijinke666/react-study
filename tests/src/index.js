//项目入口文件

import React from 'react';
import ReactDOM from 'react-dom';

import App from '../Carousel';
import 'normalize.css';
import './style.less';

const render = Component => {
  ReactDOM.render(<Component />, document.getElementById('root'));
};

render(App);
