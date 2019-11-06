CREATE TABLE product (
    product_id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(40) NOT NULL,
    price DECIMAL,
    image_url TEXT
);

INSERT INTO product (name, price, image_url)
VALUES ($1, $2, $3);

DELETE FROM product WHERE product_id = $1;


UPDATE product
SET name = ${name}, 
image_url = ${image_url},
price = ${price}
WHERE product_id = ${id};


  
SELECT * FROM product
WHERE product_id = $1;