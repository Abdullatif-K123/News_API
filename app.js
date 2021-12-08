require('dotenv').config()
const express = require('express');
const app = express(); 
const bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({extended: true}));

//static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/js', express.static(__dirname + 'public/js'));

//Templating engine
app.set('views', './src/views');
app.set("view engine", "ejs");

//Routes
const newsRouter = require('./src/routes/news');
app.use('/',newsRouter);

//Server port 
const port = 3000 ||  process.env.port; 

app.listen(port, () => console.log(`Port listining in port ${port}`));