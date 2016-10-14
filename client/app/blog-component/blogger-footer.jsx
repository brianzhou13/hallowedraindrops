// the footer for each blogger-profile

import React from 'react';
import ReactDOM from 'react-dom';

class BloggerFooter extends React.Component {
	constructor(props) {
		super(props)
		
	}

	/*
	 * future iterations
	 - have it as a formal footer, but for now, just have it blue and redirect back to blog
	*/
	componentDidMount() {
		this.transitionToBlog = this.transitionToBlog.bind(this);
	}

	transitionToBlog () {
		window.location = '/blog'
	}

	render() {
		return (
			<div className="blogger-footer" onClick={this.transitionToBlog}>
				<span className="footer-read-more">Read More HackReactor Entries</span>
			</div>
		)
	}

}

export default BloggerFooter;