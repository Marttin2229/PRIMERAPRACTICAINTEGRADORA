const express = require('express');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();

app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

mongoose.connect('mongodb://localhost:27017/chatApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.once('open', () => {
  console.log('Conexión establecida con MongoDB');
});

app.get('/', (req, res) => {
  res.render('home', { title: 'Página de Inicio' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'Acerca de' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
