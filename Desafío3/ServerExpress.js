const Contenedor = require("./Contenedor");
const express = require('express');
const app = express();

const PORT = 8080;
const contenedor = new Contenedor("productos.json");

app.get('/', (req, res) => {
    res.send('Hi Express Server!')
});

app.get('/productos', (req, res) => {
    
});

app.get('/productoRandom', (req, res) => {
   
})

app.get('/albums', (req, res) => {
    res.send('Hi, you are at Albums')
});

app.get('/object', (req, res) => {
    res.json({title: 'Are you experienced?', artist: 'The Jimi Hendrix Experience'})
});

const server = app.listen(PORT, () => {
    console.log(`>>>> Server started at http://localhost::${PORT}`)
})

server.on('error', (error) => console.log(error));