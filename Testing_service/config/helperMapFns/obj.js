// assuming chai is already imported
// var expect = Chai.expect;

module.exports = {

/* RULES:
 * subm variable rubric:
 *	"fn" 		 -> a function  (N/A FOR THESE TESTS)
 *	"subm"	 -> the subm value for the function (?)
 *	"ans" 	 -> the ans value for the function (?)
 *	"args"	 -> the arguments object [obj-specific]
 *	"num"		 -> a number we are testing against
 * 	"prop"	 -> a property on the obj (obj-specific)
 */


  // checks to see if ans is of array type
	isArr: function(subm, ans) {
		expect(subm).to.be.an(Array);
		expect(ans).to.be.an(Array);
	},

	// checks to see if ans is of object type and not an array
	isObj: function(subm, ans) {

		// checks that ans is an Object
		expect(subm).to.be.an(Object);
		expect(ans).to.be.an(Object);

		// checks that object isn't an Array
		expect(subm).to.not.be.an(Array);
		expect(ans).to.not.be.an(Array);
	},

	// checks to see if the ans array length is equal to expected
	arrLenEqualStrict: function(subm, ans) {

		// strict equality
		expect(subm.length).to.equal(ans.length);
	},

	// checks to see if the ans array is not empty
	arrNotEmpty: function (ans) {
		expect(ans).to.not.be.empty();
	},

	// checks to see if the object is not empty
	objNotEmpty: function (subm, ans) {
		expect(subm).to.not.be.empty();
	}

	// checks if object has a set of keys 
	objKeysEqual: function (subm, ans) {

		var isObj = false;
		if(Array.isArray(subm) === false && Array.isArray(ans) === false
			&& typeof subm === "object" && typeof ans === "object") {
			isObj = true;
		}

		// if isObj is truthy
		for(var keysubm in subm) {
			expect(ans[keysubm]).to.be.ok();
		}
	},

	// check index of an item



// length
// typeof
// fns
	// primitive datatypes (str, bool)
		// if floating-point numbers
	// subm itself is no arguments
// 

// length
// typeof
// function should exist





}