var db = require('./database/config.js');
var Test = require('./database/models/testing.js');

module.exports = {
  newTest: function (req, res) {
    var test = new Test(req.body);

    test.save((err, newTest) => {
      if (err) {
        res.status(500).json({ error: err });
      }
      console.log('New test added to db: ' , newTest);
      res.json(newTest);
    });
  },

  getTest: function(req, res) {
    Test.findOne({question_id: id}).exec((err, found) => {
      if (err) {
        res.status(500).json({ error: err });
      }
      if (found) {
        res.json(found);
      } else {
        res.send('Test does not exist!');
      }
    });
  },

  updateTest: function(req, res) {
    Test.findOne({question_id: id}).exec((err, found) => {
      if (err) {
        res.status(500).json({ error: err });
      }
      if (found) {
        found.fnInput = input;
        found.fnOutput = output;
        found.sourceCode = code;
        found.save((err, test) => {
          if (err) {
            res.status(500).json({ error: err });
          }
          console.log('Test has been updated ', test);
          res.json(test);
        });
      } else {
        res.send('Test does not exist!');
      }
    });
  }
};

