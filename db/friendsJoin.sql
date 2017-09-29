create table friends(
userId integer not null,
friendId integer not null,
foreign key (userId) references users(id),
foreign key (friendId) references users(id)
);