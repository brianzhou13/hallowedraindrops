import React from 'react';
import ReactDOM from 'react-dom';

// Other Components
import BloggerQuestions from './blogger-questions.jsx';
import BlogNavigation from './blog-navigation.jsx';
import BloggerProfile from './blogger-profile.jsx';
import BloggerFooter from './blogger-footer.jsx';
import NonCodeNavigation from '../nonCodeNavigation.jsx'


// React Components
import Grid from 'react-bootstrap/lib/Grid.js';
import Row from 'react-bootstrap/lib/Row.js';
import Col from 'react-bootstrap/lib/Col.js';

// react-bootstrap elements
import Jumbotron from 'react-bootstrap/lib/Jumbotron.js';

var Promise = require('bluebird');

class Blogger extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			// empty for now
			currentPage: 0, // the page in the array
			currentUser: '',
			github: [],
			blog: [],
			user: '',
		}
	}

	componentDidMount() {
		this.getUrl = this.getUrl.bind(this);
		this.getGithub = this.getGithub.bind(this);
		this.getBlog = this.getBlog.bind(this);

		this.getUrl();
	}

	/* @name: getUrl
	 * @input: Window URL
	 * @output: Gets the github handle of the user from the URL
	 */ 

	getUrl() {
		var url = window.location.pathname.slice(6, window.location.pathname.length);
		this.setState({
			user: url
		});
		console.log('hello ', url);
		setTimeout(() => {
			this.getGithub();
			this.getBlog();
		}, 500);
	}

	/* @name: getGithub
	 * @input: Pings the Database to get the user's Github data
	 * @output: The user's Github Information
	 */ 

	getGithub() {
		if(this.state.user.length > 1) {
			$.ajax({
				method: 'GET',
				url: '/api/blog/getgithub/' + this.state.user,
				success: (data) => {
					console.log('value for data in github is: ', data);
					this.setState({
						github: data
					});
				},
				error: (jqXHR, textStatus, errorThrown) => {
					console.log(textStatus, errorThrown, jqXHR);
				}
			});
		}
	}

	/* @name: getBlog
	 * @input: n/a
	 * @output: A call to the DB to get Blog data per User
	 */ 

	getBlog() {
		/* a fetch to get all blogs from our DB */
		console.log('value fir user is: ', this.state.user);

		if(this.state.user.length >1) { 
			$.ajax({
				method: 'GET',
				url: '/api/blog/getblog/' + this.state.user,
				success: (data) => {
					console.log('value for data is: ', data);
					this.setState({
						blog: data
					});
				},
				error: (jqXHR, textStatus, errorThrown) => {
					console.log(textStatus, errorThrown, jqXHR);
				}
			});
		}
	}


	render () {
		return (
			<div className="blogger-font" id="blog-username">
				<NonCodeNavigation></NonCodeNavigation>
				<Grid>
					<Row>
						<Col>
							<BloggerProfile profile={this.state.github} blog={this.state.blog}></BloggerProfile>
							<BloggerQuestions blog={this.state.blog}></BloggerQuestions>
						</Col>
					</Row>
				</Grid>
				<BloggerFooter></BloggerFooter>
			</div>
		)
	}
}

export default Blogger;

