const mysql = require('mysql');
require('dotenv').config();


const dbConnection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: '',
    database:'crud-operation'    
});

dbConnection.getConnection((err,connection)=> {
    if(err) throw err;
    console.log('Connected to DB');
})


module.exports = dbConnection ;


