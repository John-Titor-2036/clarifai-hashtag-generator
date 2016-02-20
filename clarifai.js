function getCredentials(cb) {
    var data = {
        'grant_type': 'client_credentials',
        'client_id': CLIENT_ID,
        'client_secret': CLIENT_SECRET
    };

    return $.ajax({
            'url': 'https://api.clarifai.com/v1/token',
            'data': data,
            'type': 'POST'
        })
        .then(function(r) {
            localStorage.setItem('accessToken', r.access_token);
            localStorage.setItem('tokenTimestamp', Math.floor(Date.now() / 1000));
            cb();
        });
}

function postImage(imgurl, callback) {
    if (imgurl.indexOf("http") >= 0 && imgurl.indexOf("http") <= 10) {
        var data = {
            'url': imgurl
        }
    } else {
        var data = {
            'encoded_data': imgurl
        };
    }
    var accessToken = localStorage.getItem('accessToken');

    return $.ajax({
        'url': 'https://api.clarifai.com/v1/tag',
        'headers': {
            'Authorization': 'Bearer ' + accessToken
        },
        'data': data,
        'type': 'POST'
    }).then(function(r) {
        parseResponse(r, callback);
    });
}

function parseResponse(resp, callback) {
    var tags;
    if (resp.status_code === 'OK') {
        var results = resp.results;
        var tags = results[0].result.tag.classes; 
		chrome.runtime.sendMessage(tags);
		callback(tags);		
    } else {
        console.log('Sorry, something is wrong.');
    }
}

function run(imgurl, callback) {
    if (localStorage.getItem('tokenTimeStamp') - Math.floor(Date.now() / 1000) > 86400 || localStorage.getItem('accessToken') === null) {
        getCredentials(function() {
            postImage(imgurl, callback);
        });
    } else {
        postImage(imgurl, callback);
    }
}