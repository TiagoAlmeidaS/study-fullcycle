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
var resultSelect
var select = connection.query(sqlGet, function (err, result, fields) {
    if (err) throw err;
    resultSelect = result.map((e) => e.name);
    console.log(result);
})
var values = select.values
connection.end()

app.get('/', (req, res) => {
    res.send(`<h1> Full Cycle Mudou</h1><br></br><h3>Nomes: ${resultSelect}</h3>`)
})
app.listen(port, () => {
    console.log('Rodando na porta' + port)
})