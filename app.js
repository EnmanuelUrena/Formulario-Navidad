import express from 'express';
import dotenv from 'dotenv';
import { postForm } from './formController.js';

const app = express();

app.use(express.static('public'));
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 3001

app.post('/', (req, res) => {
  postForm(req, res);
})

app.listen(PORT, () => {
  console.log( `Server listening on port ${PORT}`)
})