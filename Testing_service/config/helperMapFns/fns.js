// assuming chai is already imported
// var expect = Chai.expect;

module.exports = {

/* RULES:
 * subm variable rubric:
 *	"fn" 		 -> a function 
 *	"subm"	 -> the subm value for the function (?)
 *	"ans" -> the ans value for the function (?)
 *	"args"	 -> the arguments object
 *	"num"		 -> a number we are testing against
 */

	// fn should exist
	fnExist : function(fn, ans) {
		should.exist(fn);
	},

	// fn should be a function
	fnIsAFunction : function(fn, ans) {
		fn.should.be.a.Function;
	},

	// fn should have X number of arguments
	fnNumArgs : function(fn, num) {
		fn.length.should.equal(num);
	},


}