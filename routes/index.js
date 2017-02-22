module.exports = function(app, db) {

var site_url = "https://ib-shortener-url.herokuapp.com/";
var urls = db.collection('urls');

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/:url', function(req, res) {
    var url = site_url + req.params.url;
    if (url != site_url + 'favicon.ico') {
    urls.findOne({
        "short_url": url
    }, function(err, result) {
        if (err) throw err;
        if (result) {
            console.log('Redirecting to: ' + result.original_url);
            res.redirect(result.original_url);
        } else {
            res.send({"error": "This url is not on the database."});
        }
    });
    }
})

app.get('/new/:url*', function(req, res) {
    var url = req.url.slice(5);
    var result = {}
    
    if(validateURL(url)){
        result = {original_url: url, short_url: site_url + linkGen()}
	    res.send(result);

        urls.save(result, function(err, res) {
            if (err) throw err;
            console.log('Saved ' + result);
        });
        
    } else {
        result = {"error": "Wrong url format"};
        res.send(result);
    }
});

function linkGen() {
    var num = Math.floor(100000 + Math.random() * 900000);
    return num.toString().substring(0, 4);
}


function validateURL(url) {
    // Regex from https://gist.github.com/dperini/729294
    var regex = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
    return regex.test(url);
}

}