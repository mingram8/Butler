var http = require('http'),
    https = require('https'),
     cmd = require('child_process'),
    express = require('./config/express'),
    fs = require('fs'),
    sslkey = fs.readFileSync('sslcerts/key.pem'),
    sslcert = fs.readFileSync('sslcerts/cert.pem'),
    credentials = {key: sslkey, cert: sslcert}

process.listening = false;
var app = express();
var httpServers = https.createServer(credentials,app);
httpServers.listen(2001);
//cmd.exec(' espeak -ven+m3 -k5 "I am here, Master"')


