const config = require("./config");
const mongoose = require("mongoose");
module.exports = function () {
    mongoose.connect(config.db,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
    );
    mongoose.Promise = global.Promise;
    require("../app/models/user");
    return mongoose;
}