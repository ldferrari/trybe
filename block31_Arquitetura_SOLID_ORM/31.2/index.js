const express = require('express');
const bodyParser = require('body-parser');

const bookController = require('./controllers/BookController');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/books/', bookController);

app.listen(3000, () => {
	console.log('App ouvindo a porta 3000!');
});
