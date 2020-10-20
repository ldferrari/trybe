USE sakila;

CREATE VIEW film_info AS
SELECT A.actor_id AS actor_id, CONCAT(A.first_name,' ',A.last_name) AS actor, F.title AS título_do_filme
FROM sakila.actor AS A, sakila.film_actor AS FA, sakila.film AS F 
WHERE FA.film_id = F.film_id AND A.actor_id = FA.actor_id;

SELECT * FROM film_info;