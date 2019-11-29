import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'lib-flexible'
import * as serviceWorker from './serviceWorker';
import './assets/css/reset.css'
import './assets/css/swiper.css'
import './assets/css/detail/movieDetail.css'
import { withRouter } from 'react-router-dom'

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
