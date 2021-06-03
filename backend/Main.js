const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql')
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const Router = require('./Router.js');

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());

//Database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'uniquiry'
});

db.connect(function(err) {
    if (err) {
        console.log('DB error');
        throw err;
        return false;
    }

});

const sessionStore = new MySQLStore( {
    expiration: (1825 * 86400 * 1000),
    endConnectionOnClose: false
}, db);

app.use(session({
    key: '8932jJRFHGKSJA235uyhj',
    secret: 'dklsahj24i3h5JKHALUIRTH',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: (1825 * 86400 * 1000),
        httpOnly: false
    }
}));

new Router(app, db);

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3000);