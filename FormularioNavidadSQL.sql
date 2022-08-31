CREATE DATABASE FormularioNavidad;

use FormularioNavidad;

CREATE TABLE [Registros] (
  [ID] int  IDENTITY(1,1) not null,
  [name] nvarchar(50) not null,
  [lastname] nvarchar(50) not null,
  [gender] char(1) not null,
  [date] date not null,
  [phone] Varchar(20) not null,
  [email] nvarchar(50),
  [idtype] varchar(10) not null,
  [idnumber] varchar(20) not null,
  [minor] Bit,
  PRIMARY KEY ([idnumber])
);

CREATE TABLE [Menores] (
  [ID] int IDENTITY(1,1) not null,
  [idnumber] varchar(20) not null,
  [name] nvarchar(50) not null,
  PRIMARY KEY ([ID]),
  CONSTRAINT [FK_Menores.idnumber]
    FOREIGN KEY ([idnumber])
      REFERENCES [Registros]([idnumber])
);