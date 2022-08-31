import {getConnection, sql} from './connection.js'; //Importamos la conexion y la libreria de base de datos

async function InsertIntoRegistro (pool, data) {
  await pool.request() //Hacemos un pool request con los inputs y el query
      .input('name', sql.NVarChar, data.name)
      .input('lastname', sql.NVarChar, data.lastname)
      .input('gender', sql.Char, data.gender)
      .input('date', sql.Date, data.date)
      .input('phone', sql.VarChar, data.phone)
      .input('email', sql.VarChar, data.email)
      .input('idtype', sql.VarChar, data.idtype)
      .input('idnumber', sql.VarChar, data.id)
      .input('minor', sql.Bit, data.minor)
      .query('INSERT INTO Registros (name, lastname, gender, date, phone, email, idtype, idnumber, minor) VALUES (@name, @lastname, @gender, @date, @phone, @email, @idtype, @idnumber, @minor)')
}

async function InsertIntoMenores(pool, minor) {
  await pool.request() //Hacemos un pool request con los inputs y el query
  .input('idnumber', sql.VarChar, minor.id)
  .input('name', sql.NVarChar, minor.name)
  .query('INSERT INTO Menores (idnumber, name) VALUES (@idnumber, @name)')
}

export const getRegistro = async (req, res) => {
  const pool = await getConnection(); //Llamamos la conexion a base de datos
  const result = await pool.request().query('SELECT * FROM Registros')
  res.json(result.recordset)
}

export const getMenores = async (req, res) => {
  const pool = await getConnection(); //Llamamos la conexion a base de datos
  const result = await pool.request().query('SELECT * FROM Menores') //Hacemos un pool request con el query
  res.json(result.recordset)
}

export const postForm = async (req, res) => {
  //Extraemos la data del req.body
  let data = {
    name: req.body.name,
    lastname: req.body.lastname,
    gender: req.body.gender,
    date: req.body.date,
    phone: req.body.phone,
    email: req.body.email,
    idtype: req.body.idtype,
    id: req.body.id,
    minor: req.body.minor,
    minors: [
      {
        'id': req.body.id,
        'name': req.body.mname1
      },
      {
        'id': req.body.id,
        'name': req.body.mname2
      },
      {
        'id': req.body.id,
        'name': req.body.mname3
      }
    ]
  }

  try {
    const pool = await getConnection(); //Llamamos la conexion a base de datos

    //En caso de contener menores de edad, se realiza el agregar los menores a la tabla correspondiente
    if (data.minors) {
      await InsertIntoRegistro(pool, data); //Insertamos la data en la tabla Registro
      data.minors.forEach(async minor => {
        if (minor.name != '') {
          await InsertIntoMenores(pool, minor) //Insertamos la data en la tabla Menores
        }
      });
    }
    //De lo contrario se agrega unicamento el registro
    else{
      await InsertIntoRegistro(pool, data); //Insertamos la data en la tabla Registro
    }
    console.log('Form submitted')
  } catch (error) {
    console.error(error)
  }
  
}