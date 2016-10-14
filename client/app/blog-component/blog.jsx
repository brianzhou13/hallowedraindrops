import React from 'react';
import ReactDOM from 'react-dom';
import NonCodeNavigation from '../nonCodeNavigation.jsx';

// react-router elements
import { Link } from 'react-router';

// react-bootstrap elements
import Jumbotron from 'react-bootstrap/lib/Jumbotron.js';
import Image from 'react-bootstrap/lib/Image.js';
import Grid from 'react-bootstrap/lib/Grid.js';
import Row from 'react-bootstrap/lib/Row.js';
import Col from 'react-bootstrap/lib/Col.js';
import Media from 'react-bootstrap/lib/Media.js';

class Blog extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			users: ['brianz', 'chris', 'thai'], // the users who have pages
			allBlogs: [], 
			allGithub: [],
		}
	}

	componentDidMount () {
		this.getAllBlogs(); 
		this.getAllGithub();
	}

	/* @name: getAllGithub
	 * @input: n/a
	 * @output: A call to the DB to get all github data and set into allGithub
	 */ 

	getAllGithub() {
		$.ajax({
			method: 'GET',
			url: '/api/blog/getallgithub/',
			success: (data) => {
				console.log('data value is: ', data);
				this.setState({
					allGithub: data
				});
			},
			error: (jqXHR, textStatus, errorThrown) => {
				console.log(textStatus, errorThrown, jqXHR);
			}
		});
	}

	/* @name: getAllBlogs
	 * @input: n/a
	 * @output: A call to the DB to get all Blog data and set into allBlogs
	 */ 

	getAllBlogs() {
		$.ajax({
			method: 'GET',
			url: '/api/blog/getall/',
			success: (data) => {
				
				this.setState({
					allBlogs: data
				});
			},
			error: (jqXHR, textStatus, errorThrown) => {
				console.log(textStatus, errorThrown, jqXHR);
			}
		});
	}

	/*
	   ** in the future, we can have a filter section
	*/

	/* Styles 
		.blog-selection-header     : Title of their post
		.blog-selection-name       : Extra fun snippet
		.blog-selection-bootcamp   : "Name"@"Bootcamp"
		.blog-selection-link       : Used to allow element to be clickable, but no style changes
	*/

	render () {
		return (
			<div className="blog-page">
				<NonCodeNavigation></NonCodeNavigation>
					<Jumbotron className="banner-blog"></Jumbotron>
					<h1 className="banner-text-blog">BootCamp Reviews</h1>
						<Grid>
							{this.state.allBlogs.map((user, i) => 
								<Row>
									<Col>
										<Media.List>
											<a className="blog-selection-link" href={"/blog/" + this.state.allGithub[i]['login']}><Media.ListItem className="blog-selection blog-outline">
												<Media.Body>
													<Media.Heading className="blog-selection-header">{user.Q1}</Media.Heading>
														<span className="blog-selection-bootcamp">{user.name} @ {user.bootcamp}</span>
														<br/>
														<br/>
														<span className="blog-selection-name">{user.self_blurb}</span>
												</Media.Body>
												<Media.Right>
													<Image src={this.state.allGithub[i]['avatar_url']} width={64} height={64} circle/>
												</Media.Right>
											</Media.ListItem></a>
										</Media.List>
									</Col>
								</Row>
							)}
						</Grid>
			</div>
		)
	}

}

export default Blog;

