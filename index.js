const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({"message": "app."});
});

require('./app/navigate.js')(app);

app.listen(5000, () => {
    console.log("listening on  5000");
});
const dbConfig = require('./app/db.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("connected ");    
}).catch(err => {
    console.log('', err);
    process.exit();
});