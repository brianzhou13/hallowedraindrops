import React from 'react';
import ReactDOM from 'react-dom';
import BlogNavigation from './blog-navigation.jsx';

// react-router elements
import { Link } from 'react-router';

// react-bootstrap elements
import Jumbotron from 'react-bootstrap/lib/Jumbotron.js';
import Image from 'react-bootstrap/lib/Image.js';

class Blog extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			users: ['brianz', 'chris', 'thai'], // the users who have pages
		}
	}

	componentDidMount () {
		console.log('entered into the blog page');
	}

	// this will purely hold all of the links to the blogger pages

	render () {
		return (
			<div>
				<BlogNavigation></BlogNavigation>
					<Jumbotron>
						<div>
							<Link to="/blog/brian">to brian</Link>
						</div>
					</Jumbotron>
				{ 
					// a map function that loops and prints each blog 
				}
			</div>
		)
	}

}

export default Blog;

// we need 4 components
// photo
// questions
// page
// user info
// navbar
