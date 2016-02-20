// Stored tags are located here
var background = chrome.extension.getBackgroundPage();
window.onload = function(){
    var node = document.getElementById("customTags");
    var textInNode = document.createTextNode(background.getRecentTags());
    node.appendChild(textInNode);
}



