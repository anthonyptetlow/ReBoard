var express = require('express'),
    router = express.Router(),
    http = require('http'),
    request = require('request');

var key = process.env.key,
    host = process.env.host;

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
        host: host,
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
});

router.get('/users', function (req, res) {

    var user = req.query.user,
        groupId = req.query.groupId,
        path = '/users.json?key=' + key + '&limit=100'

    if (groupId) {
        path += '&group_id=' + groupId;
    }
    if (user) {
        path += '&group_id=' + groupId;
    }

    http.get({
        host: host,
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

});

router.get('/user/:userId', function (req, res) {

    var userId = req.params.userId,
        path = '/users/'+ userId +'.json?key=' + key + '&limit=100'

    http.get({
        host: host,
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
});


router.post('/auth', function (req, res) {
    console.log(req.body);
    if (!req.body.basic) {
        res.status(500).json({error:'Please Provide the key', body: req.body});
    } else {

        // Set the headers
        var headers = {
            'WWW-Authenticate': 'Basic ' + req.body.basic
        }

        // Configure the request
        var options = {
            url: 'http://' + host + '/users.json',
            method: 'GET',
            headers: headers,
            qs: {
                // limit: '2'
                key: key
            }
        }

        request(options, function (error, response, body) {
            console.log(error);
            if (error) {
                res.status(500).json({error:'Unable to complete call to redmine', body: JSON.parse(body)});
            } else {
                console.log(response);
                res.json(body);
            }
        });

    }

    // var path = '/users.json?limit=10';
    
    // http.get({
    //     host: host,
    //     path: path,
    //     headers: {
    //                 'WWW-Authenticate': 'WWW-Authenticate: Basic ' + req.body.basic
    //             }
    // }, function(response) {
    //     // Continuously update stream with data
    //     var body = '';
    //     response.on('data', function(d) {
    //         body += d;
    //     });
    //     response.on('end', function() {
    //         var parsed = JSON.parse(body);
    //         res.json(parsed);
    //     });
    // });
        // res.json();
        // res.status(200).end();
});

module.exports = router;
