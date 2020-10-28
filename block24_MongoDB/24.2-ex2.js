// Utilizando o modificador $each, adicione as categorias "villain" e "comic-based" ao filme Batman.
// Após a execução do método .find().pretty(), o resultado do filme Batman será parecido com o dessa imagem:

const db;

use movies;

db.movies.updateOne(
{"title": "Batman"},{ $push: {"category": { $each: [ "villain", "comic-based"]}}}
);

db.movies.find({"title": "Batman"},{}).pretty();
