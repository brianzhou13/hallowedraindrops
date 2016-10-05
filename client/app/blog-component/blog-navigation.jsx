import React from 'react';
import { render } from 'react-dom';

import Glyphicon from 'react-bootstrap/lib/Glyphicon.js';
import NavBar from 'react-bootstrap/lib/Navbar.js';
import Nav from 'react-bootstrap/lib/Nav.js';
import NavItem from 'react-bootstrap/lib/NavItem.js';


class BlogNavigation extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log('this.props', this.props);
	}

	render () { // we also need to build the nav bar on the right
		return (
		  <div> 
		  	<NavBar fixedTop fluid staticTop className="blog-nav">
		  		<Nav bsStyle="tabs">
		  			<NavItem pullLeft className="blog-nav-right">Back to Coding</NavItem>
					</Nav>
					<Nav bsStyle="tabs">
						<NavItem pullRight className="blog-nav-left">View my Profile</NavItem>
					</Nav>
				</NavBar>
		  </div>
		)
	}
}

export default BlogNavigation;
