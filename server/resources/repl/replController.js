var request = require('request-promise');
// var Promise = require('bluebird');
var service = require('../../config/services.js');

module.exports = {
  sendCodeToService: (req, res) => {
    var options = {
      method: 'POST',
      uri: service.REPL,
      body: req.body,
      json: true
    };
    request(options)
      .then((ranCode) => {
        console.log('ran Code, ', ranCode);
        res.send(ranCode);
      })
      .catch((err) => {
        console.error('Error in POST request to REPL service: ', err);
        res.sendStatus(404, err);
      });
  },

};
