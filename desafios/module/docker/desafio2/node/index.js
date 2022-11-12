const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = "INSERT INTO people(name) values('Kleber')"
connection.query(sql)

const sqlGet = "SELECT * FROM people"
var select = connection.query(sqlGet)
connection.end()

function addNewPerson() {
    const connection = mysql.createConnection(config)
    const sql = "INSERT INTO people(name) values('Kleber')"
    connection.query(sql)
    select = connection.query(sqlGet)
    connection.end()
}

app.get('/', (req, res) => {
    res.send('<h1> Full Cycleeee Mudou</h1>')
    res.send('<button> adiciona aqui </button>')
    res.send(select)
})


app.listen(port, () => {
    console.log('Rodando na porta' + port)
})