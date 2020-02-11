const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();

const port = 3005; // because I'm bad like that..

let db = require('./config/db');


app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(bodyParser.json());

MongoClient.connect(db.url, { useNewUrlParser: true }, (err, database) => {
	if (err) return console.log(err);

	db = database.db("unilag-chg-alumni");
	require('./app/routes')(app, db);
	app.listen(port, () => console.log('Hello there'));
});