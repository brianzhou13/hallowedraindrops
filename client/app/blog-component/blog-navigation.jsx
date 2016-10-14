import React from 'react';
import { render } from 'react-dom';

// boot
import Glyphicon from 'react-bootstrap/lib/Glyphicon.js';
import NavBar from 'react-bootstrap/lib/Navbar.js';
import Nav from 'react-bootstrap/lib/Nav.js';
import NavItem from 'react-bootstrap/lib/NavItem.js';


class BlogNavigation extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	render () {
		return (
		  <div> 
		  	<NavBar fixedTop fluid staticTop className="blog-nav">
		  		<Nav bsStyle="tabs" pullLeft>
		  			<NavItem className="blog-nav-right">Back to Coding</NavItem>
					</Nav>
					<Nav bsStyle="tabs" pullRight>
						<NavItem className="blog-nav-left">Profile</NavItem>
					</Nav>
				</NavBar>
		  </div>
		)
	}
}

export default BlogNavigation;
