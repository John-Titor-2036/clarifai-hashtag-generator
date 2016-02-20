//background.js

var recentTags = [];

function getRecentTags(){
	return recentTags[0];
}
function setRecentTags(input){
	//Removes tags with spaces
	for (var i = 0; i < input.length; i++) {
        tag = input[i];
        if (tag.indexOf(" ") >= 0) {
            input.splice(i, 1);
        }
    }
	recentTags.push([input[0], input[1], input[2]]);	
}

chrome.runtime.onMessage.addListener(
  function(request, sender) {
    setRecentTags(request);
  });