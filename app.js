import express from 'express'; //Importacion de express
import dotenv from 'dotenv'; //Importacion de dotenv
import { postForm, getRegistro, getMenores } from './formController.js'; //Importacion de la main function del controller post

const app = express(); //Inicializacion del componente express en app

app.use(express.static('public')); //Middleware de uso de estaticos en la carpeta public
app.use(express.json()); //Middleware para aceptar peticiones de objetos json en express
app.use(express.urlencoded({ extended: true })) //Middleware para aceptar reconocer string o arrays

dotenv.config(); //Lectura de las variables de entorno

const PORT = process.env.PORT || 3001 //Llamada del puerto de ejecucion del servidor

app.post('/', (req, res) => {
  postForm(req, res); //Funcion que se encarga del manejo del req y el res cuando se envia un post
  res.redirect('/');
})

app.get('/registros', (req, res) => {
  getRegistro(req, res); //Funcion que se encarga del manejo del req y el res cuando se envia un get
})

app.get('/menores', (req, res) => {
  getMenores(req, res); //Funcion que se encarga del manejo del req y el res cuando se envia un get
})


app.listen(PORT, () => {
  console.log( `Server listening on port ${PORT}`)
})