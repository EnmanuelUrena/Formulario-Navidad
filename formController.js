import {pool} from './connection.js'; //Importamos la pool

//Funcion que ejecuta la query para insertar en la tabla Registros
async function InsertIntoRegistro (data) {
  await pool.query('INSERT INTO Registros set ?', [data])
}

//Funcion que ejecuta la query para insertar en la tabla Menores
async function InsertIntoMenores(minor) {
  await pool.query('INSERT INTO Menores set ?', [minor])
}

//Funcion que maneja el request para enviar una respuesta con la tabla Registro
export const getRegistro = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM Registros')
    res.json(result)
  } catch (error) {
    console.error(error)
  }
}

//Funcion que maneja el request para enviar una respuesta con la tabla Menores
export const getMenores = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM Menores')
    res.json(result)
  } catch (error) {
    console.error(error)
  }
  
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
    idnumber: req.body.id,
    minor: req.body.minor ? true : false,
  }
  let minors = [
    {
      'idnumber': req.body.id,
      'name': req.body.mname1
    },
    {
      'idnumber': req.body.id,
      'name': req.body.mname2
    },
    {
      'idnumber': req.body.id,
      'name': req.body.mname3
    }
    ]
  try {
    //En caso de contener menores de edad, se realiza el agregar los menores a la tabla correspondiente
    if (data.minor) {
      await InsertIntoRegistro(data); //Insertamos la data en la tabla Registro
      minors.forEach(async minor => {
        if (minor.name != '') {
          await InsertIntoMenores(minor) //Insertamos la data en la tabla Menores
        }
      });
    }
    //De lo contrario se agrega unicamento el registro
    else{
      await InsertIntoRegistro(data); //Insertamos la data en la tabla Registro
    }
    console.log('Form submitted')
  } catch (error) {
    console.error(error)
  }
  
}