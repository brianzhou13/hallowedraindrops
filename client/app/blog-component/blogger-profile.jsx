import React from 'react';
import ReactDOM from 'react-dom';

import Image from 'react-bootstrap/lib/Image.js';


class BloggerProfile extends React.Component {
	constructor(props) {
		super(props)
		// this.state = {
		// 	//
		// }
	}

	// need to make a pull from github or something
	// all of these items should be within our props (?)
	// image comes in as avatar_url: https://avatars.githubusercontent.com/u/5092263?v=3
	// url: 

	render () {
		return (
			<div>
				<Image src="https://www.hackreactorconnect.com/assets/photos/1469481559380.jpg" circle responsive/>
				<div>
					Github:   www.github.com/brianzhou13
					<br/>
					LinkedIn: www.linkedin.com 
				</div>
			</div>
		)
	}
}

export default BloggerProfile;