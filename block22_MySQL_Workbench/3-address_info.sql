USE sakila;

CREATE VIEW address_info AS
SELECT A.address_id AS address_id, A.address AS address, A.district AS district, C.city_id AS city_id, C.city AS city
FROM sakila.address AS A, sakila.city AS C
WHERE A.city_id = C.city_id
ORDER BY C.city;

SELECT * FROM address_info;