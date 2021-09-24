const express = require("express");
const setParser = require("./utils");
const routes = require("./routes/routes.js");
const app = express();

setParser(app);
routes(app);

const server = app.listen(3000, function () {
    console.log("app running on port.", server.address().port);
});