var chai = require("chai");
var _ = require("underscore");
_.mixin(require('../src/underscore.prefilter'));

describe("underscore.prefilter", function() {
  beforeEach(function() {
    this.print = _.prefilter(function(value, newValue) {
      return value;
    }, function(value) {
      return value == "foo";
    });
  });

  it("should allow method", function() {
    chai.expect(this.print("foo")).to.equal("foo");
  });

  it("should prevent method", function() {
    chai.expect(this.print("bar")).to.equal(false);
  });
});