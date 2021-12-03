//var express = require('express');
//import { Router } from 'express';
//Importar el router de Home
import homeRouter from './home';
//Importando router de users
import userRouter from './users';
//const router = new Router();
//Importando router de projects
import projectRouter from './project';

/* GET home page. */

//router.use('/', homeRouter);
//router.use('/user', userRouter);

/*Agregar nueva ruta */
//router.get('/Hola', function (req, res) {
//res.status(200).json({ message: '¡Soy Lissete!' });
//});
//router.get('/hola',)

//Agregando las rutas a la apl
const addRoutes = (app) => {
  //Home routes
  app.use('/', homeRouter);
  //Project Routes
  app.use('/projects', projectRouter);

  app.use('/user', userRouter);

  return app;
};

export default {
  addRoutes,
};

//module.exports = router;
