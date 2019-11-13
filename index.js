const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let arreglodxc = {
 arr:''
};
let respuesta = {
 error: false,
 codigo: 200,
 mensaje: ''
};


app.route('/capturaArr')
 
 .post(function (req, res) {  
var array=new Array(req.body.arr);
if(Array.isArray(array)){
   
    usuario = {
     nombre: req.body.arr
    };

    respuesta = {
     error: false,
     codigo: 200,
     mensaje: 'Arreglo permitido',
     respuesta: req.body.arr
    };
   
  }
else {
respuesta = {
     error: false,
     codigo: 422,
     mensaje: 'invalid_data_format',
     respuesta: req.body.arr
    };

}
  res.send(respuesta);}
 )
 

app.use(function(req, res, next) {
 respuesta = {
  error: true, 
  codigo: 404, 
  mensaje: 'URL no encontrada'
 };
 res.status(404).send(respuesta);
});

app.listen(3000, () => {
 console.log("iniciando en puerto 3000");
});