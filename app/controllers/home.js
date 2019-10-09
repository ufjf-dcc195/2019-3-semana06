module.exports = {
    pedeNome,
    saudacao,
    hello,
    index
}

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

function index(req, res, next) {
    res.render("index", {
        titulo:"Bem vindo!"
    })
}