const { request } = require('express');
const express = require('express');
const app = express();

//middlewares

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

res.send('Hola mundo');

});

app.get('/register', (req,res) => {

    res.send('Aqui te puedes registrar');
});

app.listen(3000, function() {

console.log('El servidor esta funcionando')

});

app.get('*', (res,req) => {

res.send('Archivo no encontrado')

});

// const x = function (param) {return param*param};
// console.log(x(2));