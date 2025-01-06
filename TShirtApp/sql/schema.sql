CREATE TABLE IF NOT EXISTS product(
                                      id int primary key auto_increment,
                                      name varchar(50),
    price decimal,
    brand varchar(30),
    category varchar(30),
    colour varchar(30),
    description text,
    image varchar(256)
    );

CREATE TABLE IF NOT EXISTS post_delivery(
                                            id int primary key auto_increment,
                                            city varchar(50),
    post_office int
    );

CREATE TABLE IF NOT EXISTS courier_delivery(
                                               id int primary key auto_increment,
                                               city varchar(50),
    address varchar(50)
    );

CREATE TABLE IF NOT EXISTS purchase(
                                       id int primary key auto_increment,
                                       first_name varchar(50),
    last_name varchar(50),
    phone varchar(50),
    email varchar(50),
    post_delivery int references post_delivery(id),
    courier_delivery int references courier_delivery(id)
    );

CREATE TABLE IF NOT EXISTS cart_item (
                                         id int primary key auto_increment,
                                         product int references product(id),
    amount int,
    size varchar(30),
    purchase int references purchase(id)
    );

CREATE TABLE IF NOT EXISTS comment(
                                      id int primary key auto_increment,
                                      product int references product(id),
    text text
    );

CREATE TABLE IF NOT EXISTS mark(
                                   id int primary key auto_increment,
                                   product int references product(id),
    value decimal,
    amount int
    );

INSERT INTO product
(name, price, brand, category, colour, description, image)
VALUES
    ('T-Shirt', 19.99, 'Nike', 'Clothing', 'Black', 'Comfortable cotton T-shirt', 'https://duna.ua/image/cache/catalog/products/6012/6012-1-min-1000x1000.jpg'),
    ('Sneakers', 79.99, 'Adidas', 'Footwear', 'White', 'Running shoes with great support', 'https://images.shafastatic.net/1472522220'),
    ('Watch', 299.00, 'Casio', 'Accessories', 'Silver', 'Stylish metal watch', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS3iK3Fv8eTWuRnQz4G1CTWtnv4sdmVdCF8Q&s');


INSERT INTO post_delivery
(city, post_office)
VALUES
    ('Kyiv', 12),
    ('Lviv', 5),
    ('Odessa', 21);

INSERT INTO courier_delivery
(city, address)
VALUES
    ('Kyiv', 'Shevchenka 10'),
    ('Lviv', 'Halytska 3'),
    ('Odessa', 'Deribasivska 25');

INSERT INTO purchase
(first_name, last_name, phone, email, post_delivery, courier_delivery)
VALUES
    -- Покупка через почтовую доставку (post_delivery=1), без курьерской (NULL)
    ('Ivan', 'Petrov', '+3801234567', 'ivan@example.com', 1, NULL),

    -- Покупка через курьерскую доставку (courier_delivery=2), без почтовой (NULL)
    ('Olena', 'Savchenko', '+3809999999', 'olena@example.com', NULL, 2),

    -- Покупка через почтовую доставку (post_delivery=3), без курьерской (NULL)
    ('Andriy', 'Shevchenko', '+3807777777', 'andriy@example.com',3, NULL);

INSERT INTO cart_item
(product, amount, size, purchase)
VALUES
    (1, 2, 'M', 1),      -- Покупка 2 штук товара с id=1 (T-Shirt, размер M)
    (2, 1, 'XL', 2),     -- Покупка 1 штуки товара с id=2 (Sneakers, размер XL)
    (3, 1, 'One Size', 3); -- Покупка 1 штуки товара с id=3 (Watch, безразмерно)

INSERT INTO comment
(product, text)
VALUES
    (1, 'Great T-shirt, love it!'),
    (2, 'Sneakers are very comfortable.'),
    (3, 'The watch is stylish and fits well.');

INSERT INTO mark
(product, value, amount)
VALUES
    (1, 4.5, 10),
    (2, 4.8, 25),
    (3, 4.0, 8);