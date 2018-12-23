'use strict'
// Cargamos los modelos para usarlos posteriormente
var Usuarios = require('../models/Usuarios');

const mongoose = require('mongoose');

// Conseguir datos de un usuario
// function getUser(req, res){
//     var userId = req.params.id;
// //buscar un documento por un  id
//     Usuarios.findById(userId, (err, usuario) => {
//                 console.log(usuario);

// //         if(err)return res.status(500).send({message: 'Error en la petición'});
// // if(!user) return res.status(404).send({message: 'EL usuario no existe'});
// // followThisUser(req.user.sub, userId).then((value) => {
// //             user.password = undefined;
// //             return res.status(200).send({
// //                 user,
// //                 following: value.following,
// //                 followed: value.followed
// //             });
// //         });
        
//     });
// }


// function pruebas(req, res){
//     // var userId = req.params.id;
// //buscar un documento por un  id
//     // Usuarios.find(res, (err, usuario) => {
//     //             console.log(usuario);

        
//     // });

//     const test=Usuarios.findOne({ 'nombre': 'jonathan' });
//     // console.log("resultados"+test);
//     res.status(200).send({
//         menssage: 'respuesta' + test
//     });

// }

function pruebas(req, res){
    

    Usuarios.findOne({ 'nombre': 'jonathan' }, (err, usuario) => {
                // console.log(usuario);

//         if(err)return res.status(500).send({message: 'Error en la petición'});
// if(!usuario) return res.status(404).send({message: 'EL usuario no existe'});
// if(usuario) return res.status(200).send({message: 'EL usuario  existe'});
// followThisUser(req.user.sub, userId).then((value) => {
//             user.password = undefined;
//             return res.status(200).send({
//                 user,
//                 following: value.following,
//                 followed: value.followed
//             });
//         });

    res.json(usuario); 
        
    });

    
}






 
// Creamos un método en el controlador, en este caso una accion de pruebas
// function pruebas(req, res){
 
//     // Devolvemos una respuesta en JSON
//         res.status(200).send({
//             menssage: 'Esta ruta es de prueba en mi api restful con mongo y node'
//         });
//     }
     
   //Exportamos las funciones en un objeto json para poder usarlas en otros fuera de este fichero
//    exportarlo para poder usarlo en las rutas por ejemplo
    module.exports = {
        pruebas
    };
    