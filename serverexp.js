const express = require('express');
const app = express();

//middlewares



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