const express = require('express')
const file  = require("fs")
const path = require('path')
const app = express()
const port = 1808

const home = file.readFileSync("./index.html","utf-8")
//app.use(express.static(path.join(__dirname,'res')))


app.get('/', (req, res) => {
  res.send(home.toString())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
