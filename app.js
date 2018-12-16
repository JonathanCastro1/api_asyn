// const express = require('express');
// const app = express();
// const path = require('path');
// // const exphbs = require('express-handlebars');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const methodOverride = require('method-override');
// const upload = require('express-fileupload');
// const session = require('express-session');
// const flash = require('connect-flash');
// const {mongoDbUrl} = require('./config/database');
// const passport = require('passport');


// mongoose.Promise = global.Promise;


// mongoose.connect(mongoDbUrl).then(db =>{

//     console.log('MONGO connected');

// }).catch(error=> console.log(error));



// // Using Static

// app.use(express.static(path.join(__dirname, 'public')));

// // Set View Engine


// const {select, generateDate, paginate} = require('./helpers/handlebars-helpers');
// app.engine('handlebars', exphbs({defaultLayout: 'home', helpers: {select: select, generateDate: generateDate, paginate: paginate}}));
// app.set('view engine', 'handlebars');

// // Upload Middleware


// app.use(upload());

// // Body Parser

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

// // Method Override

// app.use(methodOverride('_method'));

// app.use(session({

//     secret: 'edwindiaz123ilovecoding',
//     resave: true,
//     saveUninitialized: true

// }));
// app.use(flash());

// // PASSPORT

// app.use(passport.initialize());
// app.use(passport.session());




// // Local Variables using Middleware


// app.use((req, res, next)=>{

//     res.locals.user = req.user || null;

//     res.locals.success_message = req.flash('success_message');

//     res.locals.error_message = req.flash('error_message');

//     res.locals.form_errors = req.flash('form_errors');

//     res.locals.error = req.flash('error');

//     next();


// });



// // Load Routes

// const home = require('./routes/home/index');
// const admin = require('./routes/admin/index');
// const posts = require('./routes/admin/posts');
// const categories = require('./routes/admin/categories');
// const comments = require('./routes/admin/comments');

// // Use Routes

// app.use('/', home);
// app.use('/admin', admin);
// app.use('/admin/posts', posts);
// app.use('/admin/categories', categories);
// app.use('/admin/comments', comments);


// const port = process.env.PORT || 4500;

// app.listen(port, ()=>{

// console.log(`listening on port 4500`);

// });

//Utilizar funcionalidades del Ecmascript 6
'use strict'
// Cargamos los módulos de express y body-parser
var express = require('express');
var bodyParser = require('body-parser');
// Llamamos a express para poder crear el servidor
var app = express();
// Importamos las rutas
var rutas = require('./routes/usuarios'); 
//cargar middlewares
//un metodo que se ejecuta antes que llegue a un controlador
//Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON
// Configurar CORS
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// Cargamos las rutas
//http://localhost:3000/api/pruebas
// donde rutas es lo que sigue
app.use('/api', rutas);



var mongoose = require('mongoose');

// Creamos la variable PORT para indicar el puerto en el que va a funcionar el servidor
var port = 3000;
// Le indicamos a Mongoose que haremos la conexión con Promesas
mongoose.Promise = global.Promise;
// Usamos el método connect para conectarnos a nuestra base de datos
mongoose.connect('mongodb://localhost/desarrollo')
    .then(() => {
        // Cuando se realiza la conexión, lanzamos este mensaje por consola
        console.log("La conexión a la base de datos  se ha realizado correctamente")
    
        // CREAR EL SERVIDOR WEB CON NODEJS
        app.listen(port, () => {
            console.log("servidor corriendo en http://localhost:3000");
        });
    })
    // Si no se conecta correctamente escupimos el error
    .catch(err => console.log(err));





// exportamos este módulo para poder usar la variable app fuera de este archivo
module.exports = app;




//una forma
// Cargar modulos y crear nueva aplicacion
// var express = require("express"); 
// var app = express();
// var bodyParser = require('body-parser');
// app.use(bodyParser.json()); // soporte para bodies codificados en jsonsupport
// app.use(bodyParser.urlencoded({ extended: true })); // soporte para bodies codificados



// var user_routes = require('./routes/usuarios');

// app.use('/api', user_routes);
 
//Ejemplo: GET http://localhost:8080/items
// app.get('/items', function(req, res, next) {
//   if(req.query.filter) {
//    next();
//    return;
//   }
//   res.send('Get all');
// });
 
//Ejemplo: GET http://localhost:8080/items?filter=ABC
// app.get('/items', function(req, res) {
//   var filter = req.query.filter;
//   res.send('Get filter ' + filter);
// });
 
//Ejemplo: GET http://localhost:8080/items/10
// app.get('/items/:id', function(req, res, next) {
//   var itemId = req.params.id;
//   res.send('Get ' + req.params.id);
// });
 
//Ejemplo: POST http://localhost:8080/items
// app.post('/items', function(req, res) {
//    var data = req.body.data;
//    res.send('Add ' + data);
// });
 
//Ejemplo: PUT http://localhost:8080/items
// app.put('/items', function(req, res) {
//    var itemId = req.body.id;
//    var data = req.body.data;
//    res.send('Update ' + itemId + ' with ' + data);
// });
 
//Ejemplo: DELETE http://localhost:8080/items
// app.delete('/items/:id', function(req, res) {
//    var itemId = req.params.id;
//    res.send('Delete ' + itemId);
// });
  
// var server = app.listen(8080, function () {
//     console.log('Server is running..'); 
// });

// module.exports = app;
