var Functionality = require('../../database/models/functionality.js');

module.exports = (data, username, question) => {
	Functionality.sync().then(() => {
		return Functionality.find({where:{U_ID: username, Q_ID: question}})
			.then((entry) => {
				console.log('entry value is: ', entry); // if no entry
				if(!entry) {
					// if it's not already created, create
					Functionality.create(data);
						// .then((q) => callback(q));
					// not sure about q
				} else {
					// update old entry to the newer one
					Functionality.update(data, {where: {U_ID: username, Q_ID: question}});
						// .then((q) => callback(q));
				}
			// callback(data);
		});
	});
}
