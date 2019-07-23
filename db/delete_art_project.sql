delete from projects
where id = $1;

select * from projects 
where user_id = $2;