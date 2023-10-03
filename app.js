const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const sequelize = require('./config/database');
const path = require('path');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = 3002;

app.set('view engine', 'ejs'); //not app.use
const mainAppRoutes = require('./routes/main');
app.use(bodyParser.urlencoded({extended: false}));
app.use('/static', express.static(path.join(__dirname, 'public')));



const sessionStore = new SequelizeStore({
  db: sequelize,
});

app.use(session({
  secret: 'Africa Leadership Group',
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
})
);

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
