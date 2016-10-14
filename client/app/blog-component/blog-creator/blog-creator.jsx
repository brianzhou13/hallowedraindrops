// blog-creator will be used to create new blog-pages and add entries into blog
// THIS CAN BE AN ADMIN-ONLY PAGE SO UI ISN'T IMPORTANT

import React from 'react';
import ReactDOM from 'react-dom';

import FormControl from 'react-bootstrap/lib/FormControl.js';
import FormGroup from 'react-bootstrap/lib/FormGroup.js';
import ControlLabel from 'react-bootstrap/lib/ControlLabel.js';

import { Link } from 'react-router';

class BlogCreator extends React.Component {
	constructor(props) {
		super(props)
		this.state = {

			// questions relating to HackReactor Experience that will be displayed on-page
			questions: [
			 "Describe your experience at HackReactor in one word. (going to be title of your blog article)",
			 "Reflecting back, did HackReactor meet your expectations?",
			 "30 second shpeel on daily life at HackReactor.",
			 "Most memorable experience?",
			 "How do you feel about the technical skillset you've developed since studying at HackReactor?",
			 "Advice you'd give for future HackReactor applicants?",
			],

			// questions' keys relating to HackReactor Experience that will be stored into the DB
			questions_classes: [
				"Q1",
				"Q2",
				"Q3",
				"Q4",
				"Q5",
				"Q6"
			],

			// questions that are related to the User's profile
			questions_profile: [
				"What is your Name",
				"What is your Github", // adding in this to for-sure check that they entered their github handle
				"What is your linkedin?",
				"What were you doing prior to joining with HackReactor?",
				"How would you describe yourself in less than 140 characters",
				" *optional link to a banner image you want us to feature with your profile? (nyan cat, a nature photo, etc)",
			],

			// example text underneath each question
			profile_example: [
				"James Bond",
				"astonmartin_destroyer123",
				"https://www.linkedin.com/in/jamesbonddc",
				"I was saving the world",
				"Ex-British Secret Sevice turned Software Engineer",
				"https://images.alphacoders.com/305/30521.jpg",
			],

			// keys for the User's profile in the DB
			profile_classes: [
				"name",
				"github",
				"linkedin",
				"past",
				"self_blurb",
				"banner_img",
			],
			
			completed_user_content: {},
			empty_obj: {}
		}
	}

	componentDidMount() {
		console.log('the blog-creator component mounted');
		this.addContent(); // have the on-click setup
	}

	/* 
	 * @name: submitToDB
	 * @input: Grabs the input from DOM and sends it into our Blog Database
	 * @output: Data is added into our Database
	 */ 

	submitToDB() {
		$.ajax({
			method: 'POST',
			url: 'http://localhost:8080/api/blog/post/',
			data: { data: this.state.completed_user_content },
			success: (data) => {
				// data should be success
			},
			error: (jqXHR, textStatus, errorThrown) => {
				console.log(textStatus, errorThrown, jqXHR);
			}
		});
	}

	/* 
	 * @name: addContent
	 * @input: Finds all elements of interest on the DOM
	 * @output: the completed_user_content state is changed
	 */ 	

	addContent () {
		console.log('clicked');

		var returnObj = this.state.empty_obj;
    // questions_classes
    for(var i = 0; i < this.state.questions_classes.length; i++) {
    	var idOfInterest = this.state.questions_classes[i];
    	returnObj[idOfInterest] = $('#' + idOfInterest).find('.form-control').val();
    }

    for(var j = 0; j < this.state.profile_classes.length; j++) {
    	var idOfInterest = this.state.profile_classes[j];
    	returnObj[idOfInterest] = $('#' + idOfInterest ).find('.form-control').val();
    }

    this.setState({
    	completed_user_content: returnObj
    });
    this.submitToDB();
	}

	render() {
		return (
			<div>
				<span className="blog-selection-bootcamp-header">Double Check that the links you provide are correct!</span>
				<br/>
				<br/>
				<div className="blog-profile-questions">
					<h1> Information About You. </h1>
					<div>
						{this.state.questions_profile.map((item, i) => {
							return (
								<div>
									<span className="blog-selection-experience">Question {i + 1} : {item}</span>
									<p className="blog-profile-example">Example: {this.state.profile_example[i]}</p>
									<div>
										<form id={this.state.profile_classes[i]}>
											<textarea className="form-control profile blog-selection-bootcamp" rows="2"> </textarea>
										</form>
									</div>
								</div>
								)
							})
						}
					</div>
				</div>

				<div className="blog-bootcamp-questions">
					<h1> Experience at HackReactor. </h1>

					{this.state.questions.map((item, i) => { 
						return (
							<div>
								<span className="blog-selection-experience">Question {i + 1}: {item}</span>
								<form id={this.state.questions_classes[i]}>
									<textarea className="form-control exp blog-selection-bootcamp"> </textarea>
								</form>
							</div>
						)
					})
					}
				</div>
				<div className="blogger-footer" onClick={this.addContent.bind(this)}>I'm Ready to Submit!</div>
			</div>
		)
	}
}

export default BlogCreator;