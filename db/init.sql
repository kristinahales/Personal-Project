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
    quantity integer,
    primary key (user_id, inventory_id)
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
    quantity integer,
    primary key (inventory_id, project_id)
)



-- alter table project_inventory
-- drop constraint project_inventory_project_id_fkey;

-- ALTER TABLE project_inventory
-- ADD constraint project_inventory_project_id_fkey
-- FOREIGN KEY (project_id)
-- REFERENCES projects(id)
-- ON DELETE CASCADE;



