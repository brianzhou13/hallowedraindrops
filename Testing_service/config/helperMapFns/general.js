// assuming chai is already imported
// var expect = Chai.expect;


module.exports = {

	/* RULES:
	 * subm variable rubric:
	 *	"fn" 		 -> a function  (N/A FOR THESE TESTS)
	 *	"subm"	 -> the subm value for the function (?)
	 *	"ans" -> the ans value for the function (?)
	 *	"args"	 -> the arguments object
	 *	"num"		 -> a number we are testing against
	 *  "specificClass"  -> a class type
	 */

  // if ans deeply equals subm
	equal : function(subm, ans) {
    expect(subm).to.equal(ans); // strict equality
  },

  // if ans does not deeply equal ans
  notEqual : function(subm, ans) {
    expect(subm).to.not.equal(ans);
	},

	// if ans is not NaN
	notNan : function(subm, ans) {
		expect(subm).to.not.equal(NaN);
		expect(ans).to.not.equal(NaN);
	},

	// if ans is truthy
	isTruthy : function(subm, ans) {
		expect(subm).to.be.ok();
		expect(ans).to.be.ok();
	},

	// if ans is falsey
	isFalsey : function(subm, ans) {
		expect(subm).to.not.be.ok();
		expect(ans).to.not.be.ok();
	},

	// if ans is of a Specific Class
	isClassy : function(subm, ans, specificClass) {
		expect(subm).to.be.a(specificClass);
		expect(ans).to.be.a(specificClass);
	}

	// if ans is not of a Specific Class
	isNotClassy: function(subm, ans, specificClass) {
		expect(subm).to.not.be.a(specificClass);
		expect(ans).to.not.be.a(specificClass);
	}
}