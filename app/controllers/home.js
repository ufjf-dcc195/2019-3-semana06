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
    req.session.i = req.session.i || 1;
    req.session.ultimaVisita = new Date();
    res.render("index", {
        titulo:"Bem vindo!",
        i: req.session.i++,
        acesso: req.session.ultimaVisita
        })
}