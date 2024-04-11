const express = require('express');
const mysql = require('mysql2');
const app = express();
const mysql_config = require('./mysql_config');

app.listen(3000, () => {

    console.log('Servidor no ar');
});

//const connection = mysql.createConnection(mysql_config);

app.get('/', (req, res) => {
    res.send('Oi')
});