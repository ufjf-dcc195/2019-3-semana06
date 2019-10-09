module.exports = function (app) { 
    const controllers = require("../controllers/home");    
    //app.use("/", controllers.pedeNome);
    //app.use("/", controllers.saudacao);
    app.use("/index.html", controllers.index);
}