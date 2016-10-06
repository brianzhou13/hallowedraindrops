// Routes for the editor
var replRouter = require('express').Router();
var replController = require('./replController.js');



replRouter.route('/runcode')
  .post((req, res, next) => {
    replController.sendCodeToService(req,res);
  });


module.exports = replRouter;
