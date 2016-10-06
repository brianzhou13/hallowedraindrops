// component for a user to select that he/she wants to solve a problem

import React from 'react';
import { render } from 'react-dom';

/* React-Bootstrap Components */

class MenuWrap extends React.Component { 
	//Sidebar will list questions

	constructor(props) {
    super(props);
    this.state = {
    	hidden: false,
    	questions: []
  	};
  }

	show() {
		this.setState({hidden: false});
	}

	/* @name: getChallengeQuestion
	 * @input: Click
	 * @output: Desired Question will populate in Editor in comments
	*/
	getChallengeQuestion() {
		// find the className of that particular question
		// when rendering, we need to attach a question with it. 

		// 1. getter to make a 'GET' request from db for questions
			// 3. we now have the responses, and we use map to display

		//SERVER-SIDE
			// 2. once we get the responses back, then we return only the top 10 back to client

	}

	render() {
		let style;

		if(this.state.hidden) {
			style = { display: 'none'};
		}

	//<div>
		//{this.state.questions.map((question) => return <div className="top-question" id={question}>{question}</div>)}
	//</div>

		return (

			<div>
				<div id="sidebar-wrapper">
					<ul className="sidebar-nav">
						<li className="sidebar-brand">
							<a href="#"></a>
						</li>
						<li className="sidebar-brand">
							<a href="#">asyncMap</a>
						</li>
						<li className="sidebar-brand">
							<a href="#">bubbleSort</a>
						</li>
						<li className="sidebar-brand">
							<a href="#">deepEquality</a>
						</li>
						<li className="sidebar-brand">
							<a href="#">powerSet</a>
						</li>
						<li className="sidebar-brand">
							<a href="#">queueStac</a>
						</li>
						<li className="sidebar-brand">
							<a href="#">rangeClass</a>
						</li>
						<li className="sidebar-brand">
							<a href="#">robotPaths</a>
						</li>
						<li className="sidebar-brand">
							<a href="#">treeBFSelect</a>
						</li>
						<li className="sidebar-brand">
							<a href="#">"shuffleDeck"</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}	
}

module.exports = MenuWrap;