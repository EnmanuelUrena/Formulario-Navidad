import dotenv from 'dotenv'; //Importacion de dotenv
import mysql from 'mysql'; //Importacion de la libreria de mysql
import util from 'util' //Importamos libreria de utilidades de node


dotenv.config(); //Lectura de las variables de entorno

const {DB_USER, PASSWORD, MYSQL_HOST, MYSQL_DATABASE} = process.env; // Guardamos las variables de entorno

//Configuracion de la conexion a base de datos
const dbSettings = {
  host: MYSQL_HOST,
  user: DB_USER,
  password: PASSWORD,
  database: MYSQL_DATABASE
}

//Creamos una pool con los settings de la base de datos
const pool = mysql.createPool(dbSettings);

//Conectamos a la base de datos con la pool
pool.getConnection((err, connection) => {
  if(err){
    if(err.code === 'PROTOCOL_CONNECTION_LOST'){
      console.error('DATABASE CONNECTION WAS CLOSED')
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('DATABASE HAS TO MANY CONNECTIONS')
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('DATABASE CONNECTION WAS REFUSED')
    }
  }
  if(connection) connection.release();
  console.log('DB Connected')
})

//usamos una utilidad de node para convertir en promesas las querys de las pool
pool.query = util.promisify(pool.query)

//exportamos la pool
export { pool };