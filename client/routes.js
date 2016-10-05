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
import Blog from './app/blog-component/blog.jsx';
import Blogger from './app/blog-component/blogger.jsx';

// bootstrap: https://medium.com/@victorleungtw/how-to-use-webpack-with-react-and-bootstrap-b94d33765970#.yd8htlxw0

//*********** We need an App.jsx

import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';

console.log('entered into the react-router');

// need a correct way to route to blog

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={Index}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path ="/editor/:editorid" component={Editor} />
			<Route path ="home" component={Home}/>
			<Route path ="blog" component={Blog}/>
			<Route path ="/blog/:bloggername" component={Blogger}/>
		</Route>
	</Router>
	, document.getElementById('app'));
