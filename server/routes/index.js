var express = require('express'),
    router = express.Router(),
    http = require('http');

var key = process.env.key;

router.get('/', function (req, res) {
    res.send('Welcome to the API');
});

router.get('/issues', function (req, res) {
	var user = req.query.user,
		path = '/issues.json?key=' + key + '&limit=100';
		console.log(path);
	if (user) {
		path += '&assigned_to_id=' + user;
	}
	http.get({
        host: 'redmine.carnyx.com',
        path: path
    }, function(response) {
        // Continuously update stream with data
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {
            var parsed = JSON.parse(body);
           	res.json(parsed);
        });
    });
})

router.get('/users', function (req, res) {

    var user = req.query.user,
        groupId = req.query.groupId,
        path = '/users.json?key=' + key + '&limit=100'

    if (groupId) {
        path += '&group_id=' + groupId;
    }

    http.get({
        host: 'redmine.carnyx.com',
        path: path
    }, function(response) {
        // Continuously update stream with data
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {
            var parsed = JSON.parse(body);
            res.json(parsed);
        });
    });

})


module.exports = router;
