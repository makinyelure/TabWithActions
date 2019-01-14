var NodeMaker = require("../resources/nodemaker");
var chai = require('chai')
var assert = chai.assert;

describe("Testing nodemaker instances. Test covers creating instances and instantiating with object",function() {
	it("should return an instance of Nodemaker when you do not create the object with a new operator",() => {
		var withInstance = NodeMaker();
		assert.instanceOf(withInstance,NodeMaker,"Not the same instance");
	});

	it("the make method should return the same value whether its a new instance or a derived instance", function() {
		let buildWithNoNew = NodeMaker().make({text:"test"});
		let buildWithNew = new NodeMaker().make({text: "test"});

		let valueWithNoNew = buildWithNoNew.innerHTML;
		let valueWithNew = buildWithNew.innerHTML;

		assert.equal(valueWithNew,valueWithNoNew,"Is not the same");
	});
});

