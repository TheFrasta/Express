const { request } = require('express');
const express = require('express');
const app = express();

//middlewares

app.use(express.json());

app.use(function(req,res,next){

console.log('request url:' + request.url)
next();
});

app.use((req,res, next)=>{

console.log('Aqui ha pasado por Esta funcion');
next();

})
//rutas
app.get('/', (req,res) =>{

res.send('<h1>Hola mundo<h2>');

});

app.get('/register', (req,res) => {

    res.send('Aqui te puedes registrar');
});

app.put('/login', (req,res) => {

    res.send('Aqui te puedes loguear');
});


app.delete('/about us', (req,res) => {

    res.send('Aqui tendras informacion sobre nosotros');
});

app.get('/user', (req,res) => {

res.json({

username: 'John',
lastname: 'Sanchez',

});


});

app.post('/user/:id', (req,res) => {

    console.log(req.body);
    console.log(req.params)
    res.send('EL POST HA SIDO SOLICITADO');
});

app.listen(3000, function() {

console.log('El servidor esta funcionando')

});

app.get('*', (res,req) => {

res.send('Archivo no encontrado')

});

// const x = function (param) {return param*param};
// console.log(x(2));