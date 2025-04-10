DROP DATABASE IF EXISTS crud;
CREATE DATABASE crud;
USE crud;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  sobrenome VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL,
  genero VARCHAR(100) NOT NULL,
  anoNascimento INT DEFAULT NULL,
  cpf VARCHAR(11) DEFAULT NULL,
  PRIMARY KEY (id)
);
INSERT INTO users (id, nome, sobrenome, email, genero, anoNascimento, cpf) VALUES
(1,'Vitor','Peixoto','daniela76@rocha.br','Pangender',2017,'93271068496'),
(2,'Pedro Henrique','Castro','brenda81@pinto.br','helicoptero',1925,'93784205674'),
(3,'Diego','Nunes','pmelo@campos.net','seila',1985,'93861470250'),
(4,'Pedro Miguel','Silva','jesusgabrielly@yahoo.com.br','Gender assustado',1971,'18564927020'),
(5,'Juliana','Nogueira','nathanda-mata@hotmail.com','Male to female',1981,'20438517997'),
(6,'Davi Lucca','Viana','eloah33@ig.com.br','Intersex',1994,'96438201570'),
(7,'Carolina','Melo','arthurfogaca@das.com','Genderfluid',1984,'56071982359'),
(8,'Benjamin','Costa','novaesdiego@correia.com','Agender',1956,'90315874279'),
(9,'Maria Fernanda','Aragão','ferreiradaniel@hotmail.com','Agender',2016,'14539068270'),
(10,'Mariana','Novaes','theo79@da.com','Genderqueer',1999,'25407316862'),
(500,'Caio','Peixoto','dudavalentim@terra.com','Cisgender',1945,'27134650984');
