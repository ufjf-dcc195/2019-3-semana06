const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nome: String,
    sobrenome: String,
    username: String,
    email: String,
    password: String,
    telefone: String
});
mongoose.model('User', UserSchema);