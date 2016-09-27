var should = require('chai').should();
var expect = require('chai').expect;
// var app = require('../server/server.js');
var request = require('request');

describe('Server Side Specifications', function() {
  describe('Web Server', function() {
    it('should respond to POST request for /api/replservice/runcode with a 200 status code', function(done) {
      var requestParams = {
        method: 'POST',
        uri: 'http://127.0.0.1:8080/api/replservice/runcode',
        json: {
          code: "console.log('hello world!')"
        }
      };
      request(requestParams, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should respond with hello world ran through REPL', function(done) {
      var requestParams = {
        method: 'POST',
        uri: 'http://127.0.0.1:8080/api/replservice/runcode',
        json: {
          code: "console.log('hello world!')"
        }
      };
      request(requestParams, function(error, response, body) {
        var output = body;
        expect(body).to.equal('> hello world!\nundefined\n> ');
        expect(body).to.be.an('string');
        done();
      });
    });

    it('Should 404 when asked for a nonexistent endpoint', function(done) {
      request('http://127.0.0.1:8080/pizza', function(error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('REPL Service', function() {
    it('should respond to GET request for /api/repl with a 200 status code', function(done) {
      request('http://127.0.0.1:3000/api/repl', function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
   it('should respond to POST request for /api/repl with a 200 status code', function(done) {
     var requestParams = {
       method: 'POST',
       uri: 'http://127.0.0.1:3000/api/repl',
       json: {
         code: "console.log('hello world!')"
       }
     };
     request(requestParams, function(error, response, body) {
       expect(response.statusCode).to.equal(200);
       done();
     });
   });

   it('should respond with hello world ran through REPL', function(done) {
     var requestParams = {
       method: 'POST',
       uri: 'http://127.0.0.1:3000/api/repl',
       json: {
         code: "console.log('hello world!')"
       }
     };
     request(requestParams, function(error, response, body) {
       var output = body;
       expect(body).to.equal('> hello world!\nundefined\n> ');
       expect(body).to.be.an('string');
       done();
     });
   });

   it('Should 404 when asked for a nonexistent endpoint', function(done) {
     request('http://127.0.0.1:3000/pizza', function(error, response, body) {
       expect(response.statusCode).to.equal(404);
       done();
     });
   });
  });
});
