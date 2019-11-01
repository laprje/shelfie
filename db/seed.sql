CREATE TABLE product (
    product_id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(40) NOT NULL,
    price DECIMAL,
    image_url TEXT
);

INSERT INTO product (name, price, image_url)
VALUES ($1, $2, $3);

DELETE FROM product WHERE product_id = $1;