// Exercício 3: Remova a categoria "action" do filme Batman.
// Após a execução do método .find().pretty(), o resultado do filme Batman será parecido com o dessa imagem:

const db;

use movies;

db.movies.updateOne(
{"title": "Batman"},{ $pull: { "category": "action" }}
);

db.movies.find({"title": "Batman"},{}).pretty();
