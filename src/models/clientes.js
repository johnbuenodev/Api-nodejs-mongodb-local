//const mongoose = require('mongoose');
//importando do database
const mongoose = require('../database');


const ClienteSchema = new mongoose.Schema({
   //adicionar os atributos e seus tipos
   nome:{
     type: String,
     required: true, 
     lowercase: true,
   },
   telefone:{
     type: String,
     required: true,
   },
   email:{
     type: String,
     required: true,
     lowercase: true,
   },
   cidade:{
     type: String,
     required: true,
     lowercase: true,
   },
   password:{
     type: String,
     required: true,
     //select: false,
   },
   createdAt:{
     type:Date,
     default: Date.now(),
   },
});

const Cliente = mongoose.model('Cliente', ClienteSchema);

module.exports = Cliente;