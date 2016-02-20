// Twitter
// Jerry Zhou and Samarth Madduru
var site = document.location.host;

function photoIncluded() {
    var addedPhotos = document.getElementsByTagName("img");
    for (var i = 0; i < addedPhotos.length; i++) {
        var addedPhoto = addedPhotos[i];
        if (site === "twitter.com") {
            if (addedPhoto.parentElement.parentElement.parentElement.parentElement.className === "thumbnail-container") {
                var img = new Image();
                img.src = addedPhoto.getAttribute("src");
                var imgHeight = img.height;
                var imgWidth = img.width;
				
                var canvas = document.createElement("canvas")
                canvas.width = imgHeight;
                canvas.height = imgWidth;
                var context = canvas.getContext("2d")
                context.drawImage(img, 0, 0)

                var filesOnPage = document.getElementsByTagName("span");
                for (var i = 0; i < filesOnPage.length; i++) {
                    var file = filesOnPage[i];
					var extension = file.innerHTML;
                    extension = extension.substring(extension.lastIndexOf('.'));
                    // Only process image files.
                    if(extension === ".jpg" && file.className === "filename"){
						var data = canvas.toDataURL("images/jpeg");
						data = data.substring(data.indexOf(",")+1);
						return data;
					}else if(extension === ".png" && file.className === "filename"){
						var data = canvas.toDataURL("images/png");
						data = data.substring(data.indexOf(",")+1);
						return data;
					}
                }

            }
        } else 
			
		if (site === "facebook.com") {
            if (addedPhoto.alt === FBPhrase) {
                return addedPhoto.getAttribute("src");
            }
        }
    }
    return null;
}

function fillTextBox(tags) {
    var hashTags = tags;

    for (var i = 0; i < hashTags.length; i++) {
        tag = hashTags[i];
        if (tag.indexOf(" ") >= 0) {
            hashTags.splice(i, 1);
        }
    }

    if (hashTags.length > 7) {
        if (site === "facebook.com") {
            for (var i = 0; i < 7; i++) {
                var tag = tags[i];
                $("textarea").sendkeys("#" + tag + " ");
            }
        } else if (site === "twitter.com") {
            for (var i = 0; i < 7; i++) {
                var tag = hashTags[i];
                console.log(tag);
                $("#tweet-box-home-timeline").sendkeys("#" + tag + " ");
            }
        }
    } else {
        if (site === "facebook.com") {
            for (var i = 0; i < hashTags.length; i++) {
                var tag = tags[i];
                $("textarea").sendkeys("#" + tag + " ");
            }
        } else if (site === "twitter.com") {
            for (var i = 0; i < hashTags.length; i++) {
                var tag = hashTags[i];
                console.log(tag);
                $("#tweet-box-home-timeline").sendkeys("#" + tag + " ");
            }
        }
    }

}

$("#tweet-box-home-timeline").on('click', function() {

    // Validate current website
    if (document.location.host == "twitter.com") {
        var result = photoIncluded();
        if (result != null)
            run(result, fillTextBox);
    }

});

$("textarea").on('click', function() {
	
	// Validate current website
    if (site = "facebook.com") {
        var result = photoIncluded();
        if (result != null)
            run(result, fillTextBox);
    }
});