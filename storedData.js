// Stored tags are located here

window.onload = function(){
    var node = document.getElementById("customTags");
    var textInNode = document.createTextNode(getRecentTags());
    node.appendChild(textInNode);
}

var recentTags = [];
function getRecentTags(){
	return recentTags[0];
}
function setRecentTags(input){
	recentTags.push([input[0], input[1], input[2]]);	
}

