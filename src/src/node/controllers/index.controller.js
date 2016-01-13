var cmd = require('child_process'),
    http = require('http'),
    request = require('request'),
    google = require('google'),
    YQL = require('yql');
var min = 0;
var max = 5;
fs = require('fs')

var nextCounter = 0;

var newTimer =0;
function compareString( s1, s2, splitChar ){
    if ( typeof splitChar == "undefined" ){
        splitChar = " ";
    }
    var string1 = new Array();
    var string2 = new Array();

    string1 = s1.split( splitChar );
    string2 = s2.split( splitChar );
    var diff = new Array();

    if(s1.length>s2.length){
        var long = string1;
    }
    else {
        var long = string2;
    }
    for(x=0;x<long.length;x++){
        if(string1[x]!=string2[x]){
            diff.push(string2[x]);
        }
    }

    return diff;
}

function actualDifference(string, string2) {
    var string3 =''
    if (string)
    string3= string.split(string2)
    console.log("STRING: s"+string3)

    return string3[1]
}
var oldData = ''
fs.watch(process.cwd()+'/words.log', function (event, filename) {
    console.log('event is: ' + event);
    var timer = new Date().getTime();
        fs.readFile(process.cwd() + '/words.log', 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            var datas = actualDifference(data, oldData)
            var req = {}
            req.body = {}
            req.body.speech = datas;
            oldData = data;
            exports.speech(req, {send:function(){}})

        });
});

function httpCommand(command, type, formData) {
    if (type === 'get') {
        var req = http.get(command, function (r) {
            r.on('data', function () { /* do nothing */
            });
        });
        req.on('error', function (err) {
            console.log('ERROR: ' + err)
        });
        req.end();
    }
    else if (type === 'post') {
        request.post(command, {form: formData}, function (error, response, body) {
            if (!error && response.statusCode == 200) {
            }
        })
    }
}
function getJsonValue(json, string) {
    var vals = string.split(".");
    for (var i = 0; i < vals.length; i++) {
        json = json[vals[i]];
    }
    return json;
}
function checkCatchPhrase(speech) {
    console.log(speech)
    var phrases = require('../../../config/phrases');

    for (var i = 0; i < phrases.length; i++) {
        if (speech.indexOf(phrases[i].toLowerCase().replace(/\s+/g, '')) !== -1) {
            return true;
        }
    }
    return false;
}
function getTeam(teams, speech) {
    for (var i = 0; i < teams.length; i++) {
        for (var x = 0; x < speech.length; x++) {
            if (speech[x] == teams[i])
                return teams[i];
        }
    }
}
function wait() {
    setTimeout(function () {
    }, 500);
}
function checkSpeech(speech, commands) {
    var actions = []
    var command;
    var flag = false;
    for (var x = 0; x < commands.length; x++) {
        for (var i = 0; i < speech.length; i++) {
            for (var z = 0; z < commands[x].speech.length; z++) {
                if (speech[i].toLowerCase().replace(/\s+/g, '').indexOf(commands[x].speech[z].toLowerCase().replace(/\s+/g, '')) !== -1) {
                    process.listening = false;
                    command = commands[x]
                    actions = actions.concat(commands[x].action)
                    flag = true;
                }
            }
        }
    }
    if (flag ==true) {
        console.log(command)
        command.action = actions;
        return {command: command, commands: commands, bool: true};

    }
    else {
        return {command: command, commands: commands, bool: false};

    }
}
exports.render = function (req, res) {
    res.render('index', {
        title: 'Tony'
    });
}

exports.speech = function (req, res) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

    console.log(req.body.speech)
    var speech = req.body.speech.toLowerCase().replace(/\s+/g, '');
    require.cache[process.cwd() + "/config/commands.js"] = undefined;
    require.cache[process.cwd() + "/config/responses.js"] = undefined;
    var commands = require('../../../config/commands'),
        responses = require('../../../config/responses');
    speech = req.body.speech.split(" and ");

    if (checkCatchPhrase(speech[0].toLowerCase().replace(/\s+/g, '')) === true && process.listening == false) {
        console.log('zing')
        process.listening = true;
        if (process.timeout != undefined) {
            clearTimeout(process.timeout);
        }
        try {
            res.send(true)
        }

    catch(e){}
        cmd.exec(' espeak -ven+m3 -k5 "Yes Master"')

    }

     else if (process.listening === true) {
        var flag = false

        var check = checkSpeech(speech, commands)
        if (check.bool == true) {
            var timeout = 100;
            flag = true;

            if (check.command.type == "http") {
                process.command = check.command;
                process.index = 0;
                console.log(check.command.action)


                for (var x = 0; x < check.command.action.length; x++) {
                    console.log(check.command.action)
                    var timeout = timeout + 400;
                    process.x = x;
                    if (check.command.requestType == "get") {
                        if (check.command.extra != undefined) {
                            httpCommand(check.command.action[x] + speech, 'get');
                        }
                        else {
                            setTimeout(function () {
                                httpCommand(process.command.action[process.index], 'get')
                                process.index++;

                            }, timeout);
                        }
                    }
                    else if (check.command.requestType == "post") {
                        if (check.command.extra != undefined) {
                            httpCommand(process.command.action[process.index], 'post', {data: speech})
                        }
                        else {
                            setTimeout(function () {
                                httpCommand(process.command.action[process.index], 'post', process.command.body[process.index])
                                process.index++;

                            }, timeout);
                        }
                    }
                }
try {
    res.send(true)
}        catch(e){}
                process.listening = false;

                cmd.exec(' espeak -ven+m3 -k5 "' + responses[Math.floor(Math.random() * (max - min + 1)) + min] + ' "');

                return false;
            }
            else if (check.command.type === "yql") {

                try {
                    var query = new YQL(check.command.action[0]);
                    query.exec(function (err, data) {
                        try {
                            var condition = data;
                            var values = [];
                            var string = '';
                            for (var x = 0; x < check.command.values.length; x++) {
                                values.push(getJsonValue(condition, check.command.values[x]));
                            }
                            if (check.command.response.length > values.length) {
                                for (var x = 0; x < check.command.response.length; x++) {
                                    if (values[x] != undefined) {
                                        string += check.command.response[x] + values[x]
                                        console.log(string)

                                    }
                                    else {
                                        string += check.command.response[x]
                                    }
                                }
                            }
                            else {
                                for (var x = 0; x < values.length; x++) {
                                    if (check.command.response[x] != undefined) {
                                        string += check.command.response[x] + values[x]
                                        console.log(string)

                                    }
                                    else {
                                        string += values[x]
                                    }
                                }
                            }
                            console.log(string)

                            cmd.exec(' espeak -ven+m3 -g 5 -k5 -m "' + string + '"')
                            try {
                                res.send(true)
                            }
                            catch (e) {
                            }

                        }
                        catch (e) {
                        }
                    });

                }
                catch (e) {
                }
                return false;

            }
            else if (check.command.type === "football") {
                process.speech = req.body.speech.split(" ");

                process.speech = getTeam(check.command.teams, req.body.speech.split(" "))
                var chunkss = []
                var req = http.get("http://www.foxsports.com/foxbox/NFL/API/League/Schedule?season=2015&seasonType=1&week=17&vt=20160104000000&t=20160104223430", function (r) {
                    r.on('data', function (chunks) { /* do nothing */
                        chunkss += chunks;
                    });
                    r.on('end', function (err) {
                            var json = JSON.parse(chunkss.toString())
                            chunkss = json
                            for (var p in json) {
                                console.log(process.speech)

                                if (json[p]['Links']['preview'] != null) {
                                    if (json[p]['Links']['preview'].indexOf(process.speech.toLowerCase()) !== -1) {
                                        console.log(json[p].HomeTeamId + " : " + json[p].AwayTeamId)

                                        cmd.exec(' espeak -ven+m3 -k5 "the ' + process.speech + " score was " + json[p].HomeScore + "to " + json[p].AwayScore + '"');
                                        try {
                                            res.send(true)
                                        }
                                        catch (e) {
                                        }

                                    }

                                }
                                else if (json[p]['Links']['recap'] != null) {
                                    if (json[p]['Links']['recap'].indexOf(process.speech.toLowerCase()) !== -1) {
                                        cmd.exec(' espeak -ven+m3 -k5 "the' + process.speech + " score was " + json[p].HomeScore + "to " + json[p].AwayScore + '"');
                                        try {
                                            res.send(true)
                                        }
                                        catch (e) {
                                        }
                                    }
                                }

                            }

                        }
                    );
                });
                req.on('error', function (err) {
                    console.log('ERROR: ' + err)
                });
                req.end();
                process.listening = false;

                return false;

            }

        }
        if (flag === false) {
            process.timeout = setTimeout(function () {
                process.listening = false;
            }, 30000);
            try {
                res.send('nothing')
            }catch(e){}

            return false;

        }
    }
    else {
        try {
            res.send('nothing')
        }
        catch(e){}

    }

}