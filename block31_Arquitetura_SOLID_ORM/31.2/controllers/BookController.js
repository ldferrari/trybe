const express = require('express');
const { Book } = require('../models');
const router = express.Router();

router.get('/', (_req, res) => {
  Book.findAll()
    .then((books) => {
      res.status(200).json(books);
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).json({ message: 'Erro'});
    });
});

router.get('/:id', (req, res) => {
  Book.findByPk(req.params.id)
    .then((books) => {
      if (books === null) {
        res.status(404).send({ message: 'Produto não encontrado' });
      }

      res.status(200).json(books);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    });
});

router.post('/', (req, res) => {
	const { title, author, pageQuantity } = req.body;

	Book.create({ title, author, pageQuantity })
		.then((newBooks) => {
			res.status(200).json(newBooks);
		})
		.catch((e) => {
			console.log(e.message);
			res.status(500).send({ message: 'Algo deu errado' });
		});
});

router.put('/:id', (req, res) => {
	const { author, pageQuantity } = req.body;

	Book.update(
		{ author, pageQuantity },
		{
			where: {
				id: req.params.id
			}
		}
	)
		.then((books) => {
			res.status(200).send({ message: 'Produto atualizado com sucesso.' });
		})
		.catch((e) => {
			console.log(e.message);
			res.status(500).send({ message: 'Algo deu errado' });
		});
});

router.delete('/:id', (req, res) => {
	Book.destroy({
		where: {
			id: req.params.id
		}
	})
		.then((books) => {
			res.status(200).send({ message: 'Produto excluído com sucesso.' });
		})
		.catch((e) => {
			console.log(e.message);
			res.status(500).send({ message: 'Algo deu errado' });
		});
});

module.exports = router;
