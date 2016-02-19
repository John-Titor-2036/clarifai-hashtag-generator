// FACEBOOK
// Jerry Zhou
function photoIncluded(){
	var addedPhotos = document.getElementsByTagName("img");
	for(var i = 0; i < addedPhotos.length; i++){
		var addedPhoto = addedPhotos[i];
		if(addedPhoto.alt === FBPhrase){
			return addedPhoto.getAttribute("src");
		}
	}
	return null;
}

$("textarea").on('click', function(){
	var result = photoIncluded();
	if(result != null)
		run(result, fillTextBox);
});

function fillTextBox(){
	
	for(var i = 0; i < tags.length; i++){
		tag = tags[i];
		if(tag.indexOf(" ") >= 0){
			array.splice(i, 1);
		}
	}
	
	if(tags.length > 7){
		for(var i = 0; i < 7; i++){
			var tag = tags[i];
			$("textarea").sendkeys("#" + tag + " ");
		}
	}else{
		for(var i = 0; i < tags.length; i++){
			var tag = tags[i];
			$("textarea").sendkeys("#" + tag + " ");
		}
	}
	
}
console.log("Hooo");