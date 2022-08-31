import {getConnection, sql} from './connection.js';

export const postForm = async (req, res) => {
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
    minors: req.body.minors
  }

  try {
    const pool = await getConnection();

    await pool.request()
    .input('name', sql.NVarChar, data.name)
    .input('lastname', sql.NVarChar, data.lastname)
    .input('gender', sql.Char, data.gender)
    .input('date', sql.Date, data.date)
    .input('phone', sql.VarChar, data.phone)
    .input('email', sql.VarChar, data.email)
    .input('idtype', sql.VarChar, data.idtype)
    .input('idnumber', sql.VarChar, data.id)
    .input('minor', sql.Bit, data.minor)
    .query('INSERT INTO formulario (name, lastname, gender, date, phone, email, idtype, idnumber, minor) VALUES (@name, @lastname, @gender, @date, @phone, @email, @idtype, @idnumber, @minor)')

    console.log('Form submitted')

    res.redirect('/')
  } catch (error) {
    console.error(error)
  }
  
}