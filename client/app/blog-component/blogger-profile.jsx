import React from 'react';
import ReactDOM from 'react-dom';

import Image from 'react-bootstrap/lib/Image.js';
import Jumbotron from 'react-bootstrap/lib/Jumbotron.js';


class BloggerProfile extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			user: '',
			github: [],
		}
	}

	componentDidMount () {
	}

	render () {
		return (
			<div>
				<Jumbotron>
					<div className="blogger-banner-img">
					</div>
					<div className="banner-text-blog">
						{this.props.blog.name}
					</div>
					<div>
						<strong>Github:</strong>   {this.props.profile.github_url}
						<br/>
						<strong>LinkedIn:</strong> {this.props.blog.linkedin} 
					</div>
				</Jumbotron>
			</div>
		)
	}
}

export default BloggerProfile;