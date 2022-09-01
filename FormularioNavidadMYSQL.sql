CREATE DATABASE FormularioNavidad;

USE FormularioNavidad;

CREATE TABLE `Registros` (
  `name` nvarchar(50) NOT NULL,
  `lastname` nvarchar(50) NOT NULL,
  `gender` char(1) NOT NULL,
  `date` date NOT NULL,
  `phone` Varchar(20) NOT NULL,
  `email` nvarchar(50),
  `idtype` varchar(10) NOT NULL,
  `idnumber` varchar(20) NOT NULL,
  `minor` bool,
  PRIMARY KEY (`idnumber`)
);

CREATE TABLE `Menores` (
  `ID` int AUTO_INCREMENT,
  `idnumber` varchar(20) NOT NULL,
  `name` nvarchar(50) NOT NULL,
  PRIMARY KEY (`ID`),
  FOREIGN KEY (`idnumber`) REFERENCES `Registros`(`idnumber`)
);