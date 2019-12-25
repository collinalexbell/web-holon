const fs = require('fs');
const util = require('util');
const express = require('express')
const mustacheExpress = require('mustache-express')
const goodToGreat = require('./goodToGreat')

const readFile = util.promisify(fs.readFile);

const app = express()
const port = 3000

app.get('/', (req, res) => res.render('home'))
app.get('/routine/*/*', function (req, res) {
  fs.readFile("/home/kuberlog/docs/routines/daily/0-morning", function(err, data){
    if(err) {
        res.send("routine doesn't exist")
    } else {
      res.set('Content-Type', 'text/richtext')
      res.send(data)
    }
  });
});

app.get(['/good-to-great', '/good-to-great/:stage'], function (req, res) {
  console.log("req recieved")
  goodToGreat(req, res);
})

app.engine('mst', mustacheExpress("views"))
app.set('view engine', 'mst')
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
