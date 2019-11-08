UPDATE product
SET name = ${name},
price = ${price},
image_url = ${image_url}
WHERE product_id = ${product_id};