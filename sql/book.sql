create table book(
 bid int primary key auto_increment,
 bName varchar(50),
 create_time datetime
);
insert into book values (null,'HTML',now());