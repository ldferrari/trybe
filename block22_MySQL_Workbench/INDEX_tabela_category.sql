USE sakila;

SELECT * FROM sakila.category;
SHOW COLUMNS FROM sakila.category;

-- Criando um Index:
ALTER TABLE sakila.category 
ADD FULLTEXT INDEX name_index(name);

-- Após ter criado o índice, mensure o custo com a seguinte query:
SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');

-- Excluír o índice:
DROP INDEX name_index ON sakila.category;

-- Após ter excluído o índice, mensure o custo com a seguinte query:
SELECT *
FROM sakila.category
WHERE name LIKE '%action%';
