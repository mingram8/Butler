var index = require('../controllers/index.controller.js');

module.exports = function(app) {
    app.get('/', index.render);
    app.route('/sendSpeech').post(index.speech)

}