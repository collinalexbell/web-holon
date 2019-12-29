const fs = require('fs');
const util = require('util');
const express = require('express')
const mustacheExpress = require('mustache-express')
const goodToGreat = require('./goodToGreat')
const taskTree = require('./task-tree')
const routine = require('./routine')

const readFile = util.promisify(fs.readFile);

const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => res.render('home'))


app.get(['/good-to-great', '/good-to-great/:stage'], function (req, res) {
  console.log("req recieved")
  goodToGreat(req, res);
})

app.get('/task-tree', taskTree)
app.get(['/routines', '/routine/*'], routine)

app.engine('mst', mustacheExpress("views"))
app.set('view engine', 'mst')
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
