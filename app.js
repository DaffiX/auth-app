const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs'); //not app.use
const mainAppRoutes = require('./routes/main');
app.use(bodyParser.urlencoded({extended: false}));

app.use(mainAppRoutes);

//sync the db (create tables if the dont exists)
sequelize.sync().then(() => {
	app.listen(PORT, () => {
	  console.log(`The app is listening on port ${PORT}!`);
	});
  }).catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
// app.listen(PORT, () => {
// 	console.log(`The app is listening on port ${PORT}!`);
// });
