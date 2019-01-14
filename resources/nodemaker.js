const jsDom = require("jsdom");
const { JSDOM } = jsDom;

const DEFAULT_MAKERS = {
	id : "",
	classList : [],
	text : ""
}



function NodeMaker() {
	if(!(this instanceof NodeMaker)){
		return new NodeMaker();
	}
}

// creates a structural node, assigns the neccessary attributes and returns a complete node once it is done
NodeMaker.prototype.make = function(options = {}) {
	// map option properties so that we don't have to care if a property exist or not
	(() => {
		Object.keys(DEFAULT_MAKERS).forEach(key => {
			if(!options[key]) {
				options[key] = DEFAULT_MAKERS[key];
			}
		});
	})();

	const DOM = new JSDOM(`...`,{pretendToBeVisual: true}).window.document;
	let classes = "";

	options.classList.forEach(c => {
		classes += `${c} `;
	});
	let newNode = DOM.createElement("div");
	newNode.setAttribute("id",options.id);
	newNode.setAttribute("class",classes);
	newNode.innerHTML = options.text;

	return newNode;
}



module.exports = NodeMaker;