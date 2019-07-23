CREATE TABLE users(
    id serial primary key,
    username varchar(20),
    password varchar(255)
);

CREATE TABLE inventory (
    id serial primary key,
    name text,
    image text
);

CREATE TABLE user_inventory(
    user_id int references users(id),
    inventory_id int references inventory(id),
    quantity integer
);

CREATE TABLE projects (
    id serial primary key,
    name text,
    image text,
    instructions text, 
    is_public boolean,
    user_id int references users(id)
);

CREATE TABLE project_inventory( 
    inventory_id int references inventory(id),
    project_id int references projects(id),
    quantity text
)






