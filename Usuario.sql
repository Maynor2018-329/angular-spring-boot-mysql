create database usuario;
use usuario;

create table usuario (
	id int not null primary key auto_increment,
    nombre varchar(50),
    cargo varchar(50)
);

insert into usuario(nombre,cargo) values ('Maynor','Programador');

select * from usuario;


create table factura(
	idFactura int not null primary key auto_increment,
    nombre  varchar(100),
    nit int,
    fecha varchar(50),
    idDetalle int,
    foreign key (idDetalle) references detalleFact(idDetalle)
);

create table detalleFact(	
	idDetalle int not null primary key auto_increment,
    cantidad int,
    descripcion varchar(100),	
    total int
);


insert into factura(nombre,nit,fecha) values('pedro gonzalez',3423158,'10/30/2019');

select * from factura, detalleFact where factura.idFactura=detalleFact.idDetalle;

insert into detalleFact(cantidad,descripcion, total) values(2,'panes',22);
insert into detalleFact(cantidad,descripcion, total) values(54,'salchichas',25);
select * from detalleFact;