import React from 'react';
import ReactDOM from 'react-dom';
// other pages such as home-page
// other pages such as signup-page
// other pages such as interviewer page
// other pages such as profile page
import Index from './app/index.jsx';
import Editor from './app/editor.jsx';
import Home from './app/home.jsx';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

// bootstrap: https://medium.com/@victorleungtw/how-to-use-webpack-with-react-and-bootstrap-b94d33765970#.yd8htlxw0

//*********** We need an App.jsx

import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';

// Changes in Routes.js include removing the '/' component to be 'App' to be 'Home'

console.log('entered into the react-router');

// for browserHistory, use: 	<Router history={browserHistory}>
// used to use hashHistory: <Router history={hashHistory}>
// don't use this route<Route path ="editor/:editorId" component={Editor} />

// need a blog path

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={Index}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path ="/editor/:editorid" component={Editor} />
			<Route path ="home" component={Home}/>
		</Route>
	</Router>
	, document.getElementById('app'));
