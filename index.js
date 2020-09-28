require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const connectMongo = require("connect-mongo");
const expressSession = require("express-session");
const cors = require('cors')

const fetchTasks = require('./controllers/fetchTasks')
const performActions = require('./controllers/performActions')

const app = new express();

//mongoose.connect('mongodb://localhost/testdb', { useNewUrlParser: true });
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true }, function(error){
    if(error) console.log(error);
      console.log("connection successful");
});


const mongoStore = connectMongo(expressSession);


app.use(
  expressSession({
    secret: process.env.EXPRESS_SESSION_KEY,
    store: new mongoStore({
      mongooseConnection: mongoose.connection
    })
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.get('/fetchTasks', fetchTasks)
app.post('/performActions', performActions)

app.listen(process.env.PORT || 3001, () => {
    console.log(`App listening on port ${process.env.PORT}`);
});