const express = require('express');
//chamar model de clientes
const Cliente = require('../models/clientes');


const router = express.Router();

router.get('',function(req,res){
    res.send("API NODEJS COM MONGODB");
  
  });

  router.get('/clientes',function(req,res){
    res.send("trazendo clientes");
  
  });

  //salvando clientes
  router.post('/clientes', async (req,res) => {
    try{

      const clienteobj = await Cliente.create(req.body);
     
      return res.send({clienteobj});

    } catch(err){
     
      return res.status(400).send({error:'falha ao salvar dados'});

    }

  
  });

  //passando caminho para o app raiz /api e qd acessar /clientes e o metodo
  module.exports = app => app.use('/api', router);