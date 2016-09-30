import React from 'react';
import ReactDOM from 'react-dom';
// other pages such as home-page
// other pages such as login-page
// other pages such as signup-page
// other pages such as interviewer page
// other pages such as profile page
import Index from './app/index.jsx';
import Editor from './app/editor.jsx';

import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={home}></IndexRoute>
			<Route path='editor' component={Editor} />
		</Route>
	</Router>,
		document.getElementById('app')
);