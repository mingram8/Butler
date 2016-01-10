var express = require('express'),
    bodyParser = require('body-parser'),
    flash    = require('connect-flash');
module.exports = function() {
    var app = express();
    app.use(bodyParser.urlencoded({
        extended:true
    }));

    app.use(bodyParser.json({limit: '5mb'}));

    app.use(flash());
    app.use(express.static('./src/webapp'));

    app.set('views', './src/webapp/views');
    app.set('view engine', 'ejs');

    require('../src/node/routes/index.routes.js')(app);


    return app;
};