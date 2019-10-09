const express = require("express");
const morgan = require("morgan");
const compression = require("compression");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const ejs = require("ejs");

module.exports = function(){
    const app = express();
    if(process.env.NODE_ENV === "devel"){
        app.use(morgan('dev'));
    } else {
        app.use(compression());
    }
    app.use(bodyParser.urlencoded({"extended": true}));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.set("views", "./app/views");
    app.set("view engine", "ejs");

    require("../app/routes/home.js")(app);
    return app;
}