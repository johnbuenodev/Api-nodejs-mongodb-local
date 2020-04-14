const mongoose = require('mongoose');
//realizando conexão com banco de dados
mongoose.connect('mongodb://localhost/nodejsbackend2', {useMongoClient: true});
//passando parametro useMongoClient true ativado
mongoose.Promise = global.Promise;
//importando para o resto da aplicação
module.exports = mongoose;