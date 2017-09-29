insert into chores
(name, progress, userId)
values
($1, '0', $2)
returning *;