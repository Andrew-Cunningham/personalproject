CREATE TABLE if not exists users(
    id Serial primary key,
    user_name varchar(180),
    email varchar(180),
    img text,
    auth_id text
)