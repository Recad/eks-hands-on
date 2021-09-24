const bodyParser = require("body-parser");

const setParser = function (app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
}

module.exports = setParser;