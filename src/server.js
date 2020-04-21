const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const server = express();

// db
mongoose.connect('mongodb+srv://pptodes_db_admin_2020:Z5WVWFKLJ067Ze4q@pptodescluster-tz9os.mongodb.net/pptodes?retryWrites=true&w=majority', { 
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(console.log('Connected to MongoDB'));

const db = mongoose.connection;
  
db.on('connected', () => {
    console.log('Mongoose default connection is open');
});

db.on('error', err => {
    console.log(`Mongoose default connection has occured \n${err}`);
});

db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
});

// server
const port = 3333;
server.use(express.json());
server.use(routes);
server.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});