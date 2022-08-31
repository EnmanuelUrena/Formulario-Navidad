# Formulario Navidad
## © 2021 DIECOM, Todos los derechos reservados

Este formulario esta hecho con las siguientes tecnologias:

- HTML5
- CSS
- Express(NodeJS)
- SQL Server

## Instalación

El formulario requiere [Node.js](https://nodejs.org/) v16+ para correr.

Instalar todas las dependencias e iniciar el servidor.

```sh
cd formulario-navidad
npm i
```

Despues configurar las variables de entorno en un archivo .env

```sh
PORT = {SERVER_PORT}
DB_USER = {SQLSERVER_DB_USER}
PASSWORD = {SQLSERVER_DB_PASSWORD}
SQL_SERVER = {SQL_SERVER}
SQL_DATABASE = {SQL_DATABASE}
```

En caso de no tener la base de datos creada, consulte el archivo "FormularioNavidadSQL.sql" para crear la base de datos.

Una vez esten listas la base de datos y las variables de entorno, ejecutamos el siguiento comando:

```sh
npm run start
```

Automaticamente correra el servidor en el puerto especificado en la variable de entorno y se encontrara listo el formulario para su uso.