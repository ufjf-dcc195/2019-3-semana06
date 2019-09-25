const express = require("express");

module.exports = function(){
    const app = express();
    require("../app/routes/home.js")(app);
    return app;
}