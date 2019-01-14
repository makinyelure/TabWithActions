

var chai = require('chai')
var assert = chai.assert;

const TabWithAction = require('../tabwithaction');
const domino = require("domino");
const Element = domino.impl.Element;

// Tab must be instantiated with a dom object
describe("Object instantiated with active element",()=> {
	it("should throw an exception if Tab is instantiated without no Element",() => {
		assert.throws(function() {
		let str = "";
		new TabWithAction(str)
		},TypeError,"string is not a valid DOCUMENT_NODE");
	});

	it("should not throw an exception if Tab is instantiated with an element",() => {
		assert.doesNotThrow(function() {
			let dom = domino.createDocument(`<div id="container"></div>`,true); 
			let element = dom.getElementById("container");
			new TabWithAction(element);
		},TypeError)
	});
});




//
//let element = dom.getElementById("container");
//console.log(element instanceof Element);






