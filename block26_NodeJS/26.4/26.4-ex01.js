// Crie uma aplicação express que receba uma requisição do tipo
// GET no caminho /ping e retorne o JSON { "message": "Pong!" }.

const express = require('express');
const app = express();

app.get('/ping', function(req, res) {
  res.status(200).json({'message': 'Pong!'});
});

app.listen(3000, function() {
  console.log('Ouvindo porta 3000')
});
