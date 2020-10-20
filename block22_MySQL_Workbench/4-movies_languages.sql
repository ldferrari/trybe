USE sakila;

CREATE VIEW movies_languages AS
SELECT F.title AS título_do_filme, L.language_id AS id_do_idioma, L.name AS idioma_do_filme
FROM sakila.film AS F, sakila.language AS L
WHERE F.language_id = L.language_id;

SELECT * FROM movies_languages;