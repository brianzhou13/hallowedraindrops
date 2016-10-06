  /*
   * overall: we'll be testing two versions, with
   * the first version being the snippetitted code made
   * by the user, and the second version being the
   * answer pulled from our answers db.
   * 
   * snippet: the input snippetitted by the testee
   * ans : the answer for that question
  */

  /* Start of the use for 'Should' */
  // snippet should deep equal ans
  // snippet is a type array

  
  /* need attention:
    -argumnets**
    -within (input needs to be an array(
    -isOwnProperty, ans will need to be a name
    -toHaveOwnPropertyDescriptor is not sure
  */
    
    

  
module.exports = {

  /*
   * overall: we'll be testing two versions, with
   * the first version being the snippetitted code made
   * by the user, and the second version being the
   * answer pulled from our answers db.
   * 
   * snippet: the input snippetitted by the testee
   * ans : the answer for that question
  */

  // snippet/ans should exist
  shouldExist : function (snippet, ans) {
    (snippet).should.exist(snippet);
  },

  // snippet/ans should not exist
  shouldNotExist : function (snippet, ans) {
    (snippet).should.not.exist(snippet);
  },

  // snippet/ans should Throw
  shouldThrowError : function (snippet) {
    (snippet).should.Throw(Error);
  },

  // snippet/ans should not throw
  shouldNotThrow : function (snippet, ans) {
    should.not.Throw(snippet);
  },

  // snippet should equal ans
  shouldEqual: function (snippet, ans) {
    (snippet).should.equal(ans);
  },

  // snippet should not equal ans
  shouldNotEqual: function (snippet, ans) {
    (snippet).should.not.equal(ans);
  },

  /* Start of the use for 'Should' */

  // snippet should deep equal ans
  deepEqual: function (snippet, ans) {
    expect(snippet).to.deep.equal(ans);
  },
    
  // snippet is a type string
  isAString: function(snippet, ans) {
    expect(snippet).to.be.a('string');
  },
  
  // snippet is a type array
  isAnArray: function(snippet) {
    expect(snippet).to.be.instanceof(Array);
  },
    
  // snippet is a type of object
  isAnObject: function(snippet) {
    expect(snippet).to.be.an('object');
  },
  
  // snippet is a null type
  isANull: function(snippet) {
    expect(snippet).to.be.a('null');
  },
    
  // snippet is an undefined type
  isAUndefined: function(snippet) {
    expect(snippet).to.be.an('undefined');
  },
    
  // snippet is an error type
  isAnError: function(snippet) {
    expect(snippet).to.be.an('error');
  },
    
  // snippet is a promise type
  isAPromise: function(snippet) {
    expect(snippet).to.be.a('promise');
  },

  // snippet is truthy
  isTruthy: function(snippet) {
    expect(snippet).to.be.ok;
  },
  
  // snippet is not truthy
  isNotTruthy: function(snippet) {
    expect(snippet).to.not.be.ok;
  },
  
  // snippet is of the boolean value true
  isTrue: function(snippet) {
    expect(snippet).to.be.true;
  },
    
  // snippet is not of the boolean value true
  isNotTrue: function(snippet) {
    expect(snippet).to.not.be.true;
  },
    
  // snippet is of the boolean value false
  isFalse: function(snippet) {
    expect(snippet).to.be.false;
  },
    
  // snippet is not of the boolean value false
  isNotFalse: function(snippet) {
    expect(snippet).to.not.be.false;
  },
  
  // snippet is of the value undefined
  isUndefined: function(snippet) {
    expect(snippet).to.be.undefined;
  },
  
  // snippet is not of the value undefined
  isNotUndefined: function(snippet) {
    expect(snippet).to.not.be.undefined;
  },
  
  // snippet is of the value null
  isNull: function(snippet) {
    expect(snippet).to.be.null;
  },
  
  // snippet is not of the value null
  isNotNull: function(snippet) {
    expect(snippet).to.not.be.null;
  },
  
  // snippet is NaN (not a number)
  isNaN: function(snippet) {
    expect(snippet).to.be.NaN;
  },
  
  // snippet is not NaN (not a number)
  isNotNaN: function(snippet) {
    expect(snippet).to.not.be.NaN;
  },
  
  // snippet exists
  isExist: function(snippet) {
    expect(snippet).to.exist;
  },
  
  // snippet has the length of 0
  isEmpty: function(snippet) {
    expect(snippet).to.be.empty;
  },
  
  // snippet softly equals ans
  isEql: function(snippet, ans) {
    expect(snippet).to.eql(ans);
  },
  
  // snippet does not softly equal ans
  isNotEql: function(snippet, ans) {
    expect(snippet).to.not.eql(ans);
  },
  
  // snippet is of type argument
  isArguments: function(snippet) {
    expect(snippet).to.be.arguments;
  },
  
  // snippet does deeply equal ans
  isEqual: function(snippet, ans) {
    expect(snippet).to.equal(ans);
  },
  
  // snippet does not deeply equal ans
  isNotEqual: function(snippet, ans) {
    expect(snippet).to.not.equal(ans);
  },
  
  // snippet is above ans
  isAbove: function(snippet, ans) {
    expect(snippet).to.be.above(ans);
  },
  
  // snippet is below ans
  isLeast: function(snippet, ans) {
    expect(snippet).to.be.at.least(10);
  },
  
  // snippet is less than or equal to ans
  isMost: function(snippet, ans) {
    expect(snippet).to.be.at.most(ans);
  },
  
  // snippet is within ans
  isWithin: function(snippet, ans) {
    var bottom = ans[0];
    var upper  = ans[1];
    expect(snippet).to.be.within(bottom, upper);
  },
  
  // snippet is instanceof
  isInstanceof: function(snippet, ans) {
    expect(snippet).to.be.an.instanceof(ans);
  },
  
  // snippet is property of
  isProperty: function(snippet, ans) {
    expect(snippet).to.have.property(ans);
  },
  
  isDeepProperty: function(snippet, ans) {
  expect(snippet).to.have.deep.property(ans);
  },
  
  // snippet has property of ans
  isOwnProperty: function(snippet, ans) {
    expect(snippet).to.have.ownProperty(ans);
  },
  
  // snippet has own property descriptor
  isOwnPropertyDescriptor: function(snippet, ans) {
    expect(snippet).to.have.ownPropertyDescriptor(ans);
    
    // i.e. ans could be:
    // 'length', { enumerable: false, configurable: false, writable: false, value: 4 }
  }

  ,
  isWithinLength: function(snippet, lower_bound, upper_bound){
    expect(snippet).to.have.length.within(lower_bound, upper_bound);
  },

  isBelowLength: function(snippet, ans){
    expect(snippet).to.have.length.below(ans);
  },

  isAboveLength: function(snippet, ans){
    expect(snippet).to.have.length.above(ans);
  },

  isNotLengthOf: function(snippet, ans){
    expect(snippet).to.not.have.lengthOf(ans);
  },

  isLengthOf: function(snippet, ans){
    expect(snippet).to.have.lengthOf(ans);
  },

  willNotMatchRegex: function(snippet, ans){
    expect(snippet).to.not.match(ans);
  },

  // asserts snippet matches regex in ans
  willMatchRegex: function(snippet, ans){
    expect(snippet).to.match(ans);
  },

  // asserts snippet does not contain string in ans
  doesNotHaveString: function(snippet, ans){
    expect(snippet).to.not.have.string(ans);
  },

  // asserts snippet does contain string in ans
  doesHaveString: function(snippet, ans){
    expect(snippet).to.have.string(ans);
  },

  // asserts that the target contains any keys
  doesNotContainAllKeys: function(snippet, ans){
    expect(snippet).to.not.have.all.keys(ans);
  },
  
  // asserts that the target contains any keys
  doesNotContainAnyKeys: function(snippet, ans){
    expect(snippet).to.not.have.any.keys(ans);
  },

  // asserts that the target contains all keys
  deosContainAllKeys: function(snippet, ans){
    expect(snippet).to.have.all.keys(ans);
  },

  // asserts that the target contains any keys
  doesContainAnyKeys: function(snippet, ans){
    expect(snippet).to.have.any.keys(ans);
  },

  // Asserts that the object or class target will respond to a method.
  isNotResponding: function(snippet, ans){
    expect(snippet).to.not.respondTo(ans);
  },

  // Asserts that the object or class target will respond to a method.
  isResponding: function(snippet, ans){
    expect(snippet).to.respondTo(ans);
  },

  // expects a specific instance of a method to not respond 
  isNotRespondingToItself: function(snippet, ans){
    expect(snippet).itself.to.not.respondTo(ans);
  },
  
  // expects a specific instance of a method to respond 
  isRespondingToItself: function(snippet, ans){
    expect(snippet).itself.to.respondTo(ans);
  },

  // Asserts that the target pass a given truth test
  isSatisfying: function(snippet, method){
    expect(snippet).to.satisfy(method);
  },

  // Asserts that the target does not pass a given truth test
  isNotSatisfying: function(snippet, method){
    expect(snippet).to.not.satisfy(method);
  },

  // Asserts that the target pass a given truth test
  isSatisfying: function(snippet, method){
    expect(snippet).to.satisfy(method);
  },

  // asserts that snippet does not fall within delta of expected
  isNotCloseTo: function(snippet, expected, delta){
    expect(snippet).to.not.be.closeTo(expected, delta);
  },

  // asserts that snippet falls within delta of expected
  isCloseTo: function(snippet, expected, delta){
    expect(snippet).to.be.closeTo(expected, delta);
  },

  // asserts that the target is not a superset of set, or that the target and set do not have the same 
  // strictly equal members
  isNotMembers: function(snippet, ans){
    expect(snippet).to.not.include.members(ans);
  },

  // asserts that the target is a superset of set, or that the target and set have the same strictly
  // equal members
  isMembers: function(snippet, ans){
    expect(snippet).to.include.members(ans);
  },

  // target cannot add new properties to it
  isNotExtensible: function(snippet){
    expect(snippet).to.be.extensible;
  },

  // target can add new properties to it
  isExtensible: function(snippet){
    expect(snippet).to.be.extensible;
  },

  // target cannot add new properties and existing cannot be removed.
  isSealed: function(snippet){
    expect(snippet).to.be.sealed;
  },

  // target cannot add new properties and existing cannot be modified
  isFrozen: function(snippet){
    expect(snippet).to.be.frozen;
  }

};
  
