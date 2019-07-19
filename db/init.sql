CREATE TABLE users (
    id serial primary key,
    username text unique,
    password text
);