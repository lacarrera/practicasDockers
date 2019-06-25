const express = require('express')
const bodyParser = require('body-parser')
const cors = require ('cors')
var friends = require('./data.json')


const config = {
    name: "Dockers",
    port: 3000,
    host:'0.0.0.0'
}


const app = express ()


app.use (bodyParser.json())
app.use (cors())

app.get('/', (req, res) =>{
    res.status(200).send('hola mundo amigos!')

})

app.get('/friends', (req, res) =>{
    res.status(200).send(friends)

})

app.post('/friends', (req, res) =>{
  let new_friend = {
      name: req.body.name,
      school: req.body.school
  }
  friends.push(new_friend);
  res.send(200).send({
      message: "Registro con éxito",
      item:new_friend
  })

})

app.listen(config.port, config.host, () =>{
    console.log(`Running on http://${config.host}:${config.port}`)
})