const express = require("express");
const app = express();

app.use("/", pedeNome);
app.use("/", saudacao);

app.listen(8080);

function pedeNome(req, res, next) {
    if(req.query.nome){
        next();
    }else{
        res.send("Qual seu nome?");
    }
}

function saudacao(req, res) {
    res.send(`Olá ${req.query.nome}!`);
}
function hello(req, res) {
    res.send({mensagem:"Hello world!"});
}