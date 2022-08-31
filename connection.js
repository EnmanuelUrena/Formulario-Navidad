import dotenv from 'dotenv';
import sql from 'mssql';

dotenv.config();

const {DB_USER, PASSWORD, SQL_SERVER, SQL_DATABASE} = process.env;

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
    const pool = await sql.connect(dbSettings);
    console.log('DB Connected')
    return pool;
  }catch (error) {
    console.error(error)
  }
}

export { sql };