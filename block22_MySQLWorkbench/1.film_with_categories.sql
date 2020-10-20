USE sakila

CREATE VIEW film_with_categories AS
SELECT F.title AS título, C.category_id AS id_da_categoria, C.name AS nome_da_categoria
FROM sakila.film AS F	
JOIN sakila.category AS C
ORDER BY F.title;

SELECT * FROM film_with_categories;
