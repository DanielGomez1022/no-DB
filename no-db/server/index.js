const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const bc = require('./videogames_component')
 
app.use(bodyParser.json())
// app.use(express.static(__dirname + "/../build")) 

app.get('/api/video_games', bc.read)
app.post('/api/video_games', bc.create)
app.put('/api/video_games/:id', bc.update)
app.delete('/api/video_games/:id', bc.delete)



const PORT = 3001
app.listen(PORT, ()=>console.log(`Server is listening on port ${PORT}`))
