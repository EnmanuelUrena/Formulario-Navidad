import dotenv from 'dotenv'; //Importacion de dotenv
import sql from 'mssql'; //Importacion de la libreria de sql

dotenv.config(); //Lectura de las variables de entorno

const {DB_USER, PASSWORD, SQL_SERVER, SQL_DATABASE} = process.env; // Guardamos las variables de entorno

//Configuracion de la conexion a base de datos
const dbSettings = {
  user: DB_USER,
  password: PASSWORD,
  server: SQL_SERVER,
  database: SQL_DATABASE,
  options:{
    encrypt: true,
    trustServerCertificate: true,
  }
}

export async function getConnection() {
  try {
    const pool = await sql.connect(dbSettings); //Conexion con la base de datos que devuelve un pool
    console.log('DB Connected')
    return pool;
  }catch (error) {
    console.error(error)
  }
}

export { sql };