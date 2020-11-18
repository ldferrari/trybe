// Crie um endpoint que receba requisições do tipo POST no caminho /hello,
// contendo o JSON { "name": "<nome do usuário>" } e retorne um JSON
// { "message": "Hello, <nome do usuário>!" };

const express = require('express');
const app = express();

app.use(express.json()); // === parse

app.post('/hello', function(req, res) {
  console.log(req.body);
  res.status(200).json({message: `hello! ${req.body.name}`});
});

app.listen(3000, function() {
  console.log('Ouvindo porta 3000, ex02')
});
