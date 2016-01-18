var http = require('http'),
    https = require('https'),
    cmd = require('child_process'),
    express = require('./config/express'),
    fs = require('fs'),
    sslkey = fs.readFileSync('sslcerts/key.pem'),
    sslcert = fs.readFileSync('sslcerts/cert.pem'),
    credentials = {key: sslkey, cert: sslcert},
    io = require('socket.io');
var index = require('./src/node/controllers/index.controller.js');

process.listening = false;
var app = express();
var httpServers = https.createServer(credentials, app);
var ios = io.listen(httpServers);
httpServers.listen(2001);

ios.sockets.on('connection', function (socket) {
    console.log('Client connected.');

    socket.on('updateMessage', function (data) {
        var req = {}
        req.params = {}
        req.params.speech = data;
        index.speech(req, {
            send: function () {
            }
        })
        ios.sockets.emit ('messageSuccess', data);

    });
    // Disconnect listener
    socket.on('disconnect', function () {
        console.log('Client disconnected.');
    });
});
cmd.exec(' espeak -ven+m3 -k5 "I am here, Master"')


