// FACEBOOK
// Jerry Zhou
function photoIncluded(){
	var addedPhotos = document.getElementsByTagName("img");
	for(var i = 0; i < addedPhotos.length; i++){
		var addedPhoto = addedPhotos[i];
		if(addedPhoto.alt == "Jerry Zhou's photo.")
			return true;
	}
	return false;
}

$("textarea").on('click', function(){	
	if(photoIncluded()){
		run("http://static01.nyt.com/images/2013/03/03/magazine/03wmt1/03wmt1-articleLarge-v2.jpg", fillTextBox);
	}
});

function fillTextBox(){
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