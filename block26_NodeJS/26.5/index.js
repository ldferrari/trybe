// Atividade 3:
// Rotas: /posts/:id e /posts
// Objetivo: Deve receber uma requisição com o param id e verificar a existência do post com aquele id. Caso exista, retorne os dados daquele post. Caso não exista, 
// retorne um status de erro com a mensagem id not found.. A rota /posts deve trazer todos os posts cadastrados.

const express = require('express');
const post = require('./post');
const app = express();

app.get('/posts', function(req, res, next) {
  res.status(200).json(post);
  next();
});

app.get('/posts/:id', function(req,res, next) {
  let { id } = req.params;
  const contem = post.some(e => e.id === Number(id));
  if (contem) {
  const qualquer = post.find(e => e.id === Number(id));
  res.status(200).json(qualquer);
  } else {
  res.status(404).send(`id not found..`);
  }
});

app.listen(3000);
