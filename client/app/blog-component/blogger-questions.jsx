import React from 'react';
import ReactDOM from 'react-dom';

// react-bootstrap elements
import Jumbotron from 'react-bootstrap/lib/Jumbotron.js';

class BloggerQuestions extends React.Component {

	/* @input: Expecting from Props an array of questions
	 * 	       Expecting from Props an array of answers to those questions
	 *
	 * @output: A BloggerQuestions component that contains properly styled questions
	 */

	constructor(props) {
		super(props)
	}

	render () {
		return (
			<div>
				{this.props.questions.map(function(ques, i) {
					/*
					 * @input: "ques" - question that was asked
					 *         "i"    - index of the question that was asked
					 * @output: a div element wrapping each question
					 */
					
					return (
						// return styled element
						<div>
							<h3 className="ques">Question {i}:{ques}</h3>
							<h5 className="res">{this.props.response[i]}</h5>
						</div>
						)	
					})
				// end of inner return
				} 
			</div>
		)
	}
}

export default BloggerQuestions;

// we need 4 components
// photo
// questions
// page
// user info
// navbar
