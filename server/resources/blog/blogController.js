/*	name: sequelize.STRING,
	linkedin: sequelize.STRING,
	github_url: sequelize.STRING,
	bootcamp: sequelize.STRING,
	banner_img: sequelize.STRING,
	Q1: sequelize.TEXT,
	Q2: sequelize.TEXT,
	Q3: sequelize.TEXT,
	Q4: sequelize.TEXT,
	Q5: sequelize.TEXT,
	Q6: sequelize.TEXT,
	page_comments: sequelize.TEXT,
	views: sequelize.Number,*/

var BlogQuestion = require('../../database/models/BlogQuestions.js');
var User = require('../../database/models/Users.js');

module.exports = {

	
	getBlogUser: (req, res) => {
		var login = ' ' + req.url.slice(9, req.url.length);
		// we require a 'space' in the front for it to be recognized
		BlogQuestion.find({where: {github: login}}).then((data) => {
			if(data) {
				res.status(200).send(data);
			} else {
				res.status(404).send('error');
			}
		});
	},

	getGithubUser: (req, res) => {
		var login = req.url.slice(11, req.url.length);
		User.find({where: {login: login}}).then((data) => {
			if(data) {
				res.status(200).send(data);
			} else {
				res.status(404).send('error');
			}
		});
	},

	getAllGithub: (req, res) => {
		User.findAll({}).then((data) => {
			res.status(200).send(data);
		});
	},

	getContent: (req, res) => {
		var name = req._passport.instance._userProperty;
		// name is github name on the session
		BlogQuestion.sync().then(() => {
			BlogQuestion.find({where: {name: name}})
			.then((data) => {
				console.log('blog content was found, sending back data');
				res.status(200).send(data);
			});
		});
	},

	getAllContent: (req, res) => {
		BlogQuestion.findAll({}).then((data) => {
			res.status(200).send(data);
		});
	},

	addContent: (req, res) => {
		console.log('entered into addContent');
		var github = req.body.data.github; //github name
		var dataToBeAdded = req.body.data;

		BlogQuestion.sync().then(() => {
			BlogQuestion.find({where: {github: github}})
			.then((data) => {
				if(!data) {
					BlogQuestion.create(dataToBeAdded).then(() => {
						console.log('entry has been created');
					});
				} else {
					// update if not
					BlogQuestion.update(dataToBeAdded, {where: {github: github}}).then(() => {
						console.log('entry has been updated');
					});
				}
				res.status(202).send('addContent is complete')
			});
		});
	}
}