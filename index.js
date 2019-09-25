const express = require("express");
const app = express();

app.use("/", function (req, res) {
    res.json({mensagem:"Hello world!"});
});
app.listen(8080);