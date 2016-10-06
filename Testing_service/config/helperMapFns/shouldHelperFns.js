var chai = require('chai');
var should = chai.should();
var expect = chai.expect();

/* this file will replace older previous files:
 * fn.js , general.js , int.js , obj.js, string.js
 */
module.exports = {

	console.log('entered');
	/*
	 * overall: we'll be testing two versions, with
	 * the first version being the submitted code made
	 * by the user, and the second version being the
	 * answer pulled from our answers db.
	 * 
	 * subm: the input submitted by the testee
	 * ans : the answer for that question
	*/

	// subm/ans should exist
	shouldExist : function (subm, ans) {
		(subm).should.exist(subm);
	},

	// subm/ans should not exist
	shouldNotExist : function (subm, ans) {
		(subm).should.not.exist(subm);
	},

	// subm/ans should Throw
	shouldThrowError : function (subm) {
		(subm).should.Throw(Error);
	}

	// subm/ans should not throw
	shouldNotThrow : function (subm, ans) {
		should.not.Throw(subm);
	},

	// subm should equal ans
	shouldEqual: function (subm, ans) {
		(subm).should.equal(ans);
	},

	// subm should not equal ans
	shouldNotEqual: function (subm, ans) {
		(subm).should.not.equal(ans);
	}



}