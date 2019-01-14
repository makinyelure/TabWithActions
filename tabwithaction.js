var NodeMaker = require('./resources/nodemaker.js');

// an element node has value 1 according to https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType. Also helps also reduce dependency on 
// other library to get instance of the node object
const ELEMENT_NODE = 1; 
const CONTAINER_NODE = "TABCONTAINER";

function Tab(domContainer = "node") {
	if(!this.isDomNode(domContainer)) {
		throw new TypeError(`${typeof domContainer} is not a valid DOCUMENT_NODE`);
	}
	this._parentNode = domContainer;
	this._containerNode = NodeMaker().make({id: CONTAINER_NODE, classList: ["tab-container"]});
}

// creates the dom tree needed to perform the tab functions.
Tab.prototype.create = function(options = {}) {

}

//	Checks if a specific node is a valid dom element.  
Tab.prototype.isDomNode = function(node) {
	let isValid = false;
	if(node.nodeType) {
		isValid = (node.nodeType === ELEMENT_NODE);
	}
	return isValid;
}


Tab.prototype.getContainer = function() {
	return this._containerNode;
}

module.exports = Tab;

