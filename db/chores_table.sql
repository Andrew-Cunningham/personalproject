CREATE TABLE if not exists chores(
    id Serial primary key,
    name varchar(255),
    progress integer,
    userId integer,
    FOREIGN KEY (userId) references users(id)
)