USE sakila;

SELECT * FROM sakila.address;
SHOW COLUMNS FROM sakila.address;

-- Criando um Index:
ALTER TABLE sakila.address
ADD FULLTEXT INDEX postal_code_index(postal_code);

-- Após ter criado o índice, mensure o custo com a seguinte query:
SELECT *
FROM sakila.address
WHERE MATCH(postal_code) AGAINST('36693');

-- Excluír o índice:
DROP INDEX postal_code_index ON sakila.address;

-- Após ter excluído o índice, mensure o custo com a seguinte query:
SELECT *
FROM sakila.address
WHERE postal_code = '36693';
