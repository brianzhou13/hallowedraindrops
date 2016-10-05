import React from 'react';
import ReactDOM from 'react-dom';
import BlogNavigation from './blog.jsx';
import BloggerProfile from './bloggerprofile.jsx';
import BloggerQuestions from './blogger-questions.jsx';

// react-bootstrap elements
import Jumbotron from 'react-bootstrap/lib/Jumbotron.js';

class Blogger extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			// empty for now
			currentPage: 0, // the page in the array
			users: ['brianz', 'chris', 'thai'], // the users who have pages
		}
	}

	// a service that will make a call to the db for that blog profile
		// should be a sql db

	// will pull in data from the database for the user
		// the user that's being pulled will be from the url
			// 

	/* To-Dos:
		columns for this page
	*/

	render () {
		return (
			<div>
				<BlogNavigation></BlogNavigation>
				<Jumbotron className="banner">
					<BloggerProfile user={this.state.users[this.state.currentPage]}></BloggerProfile>
				</Jumbotron>
				<div>
					<BloggerQuestions></BloggerQuestions>
				</div>
			</div>
		)
	}

}

export default Blogger;

// we need 4 components
// photo
// questions
// page
// user info
// navbar
