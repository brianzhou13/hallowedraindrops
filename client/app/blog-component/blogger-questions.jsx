import React from 'react';
import ReactDOM from 'react-dom';

// react-bootstrap elements
import Jumbotron from 'react-bootstrap/lib/Jumbotron.js';
import Media from 'react-bootstrap/lib/Media.js';


class BloggerQuestions extends React.Component {

	/* @input: Expecting from Props an array of questions
	 * 	       Expecting from Props an array of answers to those questions
	 *
	 * @output: A BloggerQuestions component that contains properly styled questions
	 */

	constructor(props) {
		super(props)
		// response is going to be an array of responses to that question
		// ques is going to be an array of questions
		var questions = [
										 "Describe your experience at HackReactor in one word.",
										 "Reflecting back, did HackReactor meet your expectations?",
										 "It is known that HackReactor's schedule is 6 days a week. How did you spend your day off?",
										 "What was your favorite project that you worked on? ",
										 "30 second shpeel on daily life at HackReactor.",
										 "Most memorable experience?",
										 "How do you feel about the technical skillset you've developed since studying at HackReactor?",
										 "Advice you'd give for future HackReactor applicants?",
										 ];
		var response = ["Humbling.",
										"HackReactor definitely did. I came in with the goal of learning Web Development, and HackReactor has done an amazing job teaching me the subject. Since starting, I've learned multiple web frameworks and have then applied them to build 3+ fullstack applications. I'd definitely sayH HackReactor was as hard as how the alumni I spoke to prior to signing up made HackReactor to be.",
										"For me, my Sundays would start around 7am, and I'd begin my day by picking up a cup of coffee and heading to a coffee shop to do some work. By noon-ish, I'd head back home and begin to attack the giant pile of dirty laundry in the corner of my room. While this is going on, I'd be meal-prepping for the next week. Around 8pm, I would either head back to a coffee shop or stay at home and continue reviewing the past week's material to prepare for school the next day.",
										"Favorite project... would be a recipe application me and three other of my cohort-mates built. We utilized multiple APIs to pull data to construct a very UI-friendly webapp that helped people identify what meals they could construct given whatever leftover ingredients they had within their fridge. Our app was fully implemented with authentication, persistent storage, documentation, deployment, the whole shebang.",
										"Wake up. Get on Bart. Get off Bart. Code. Get on Bart. Get off Bart. Sleep.",
										"Most memorable experience would have to be the late nights spent studying. There were times when me and a cohort-mate would be so tired on the BART ride back that we'd miss our transfer-point (BayFair to Fremont/South Hayward) and be stuck in West Dublin. Funny times.",
										"I feel good about what I've learned here. I was browsing AngelList/LinkedIn the other day, and I noticed that many of the technical qualifications required by the hiring companies were ones that I've already had experience on or mastered at HackReactor. To be honest, I'm actually very looking forward to the job hunt.",
										"Go for it. It's a daunting decision to make, especially if you still have a huge stack of student loans behind you from College, but you learn so much in this accelerated environment."
										];


		this.state = {
			questions: questions,
			response: response
		}

	}



	// need to change to this.props.questions after testing
	// don't think I need to list the question number provided
	// 	<span className="ques-num">Question {i}:</span>

	// Need a date item

	render () {
		var responses = this.state.response;
		return (
			<div>
				{this.state.questions.map(function(ques, i) {
					/*
					 * @input: "ques" - question that was asked
					 *         "i"    - index of the question that was asked
					 * @output: a div element wrapping each question
					 */
					
					return (
						// return styled element
						<Media.List>
							<Media.List>
								<Media.ListItem className="blog-selection">
									<Media.Body>
										<Media.Heading className="question-header">
												<span className="ques-word">{ques}</span>
										</Media.Heading>
												<span className="res">{responses[i]}</span>
									</Media.Body>
								</Media.ListItem>
							</Media.List>
						</Media.List>
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
