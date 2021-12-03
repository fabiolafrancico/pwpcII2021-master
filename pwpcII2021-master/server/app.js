/*var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express(); */

//Importar dependencias
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import winston from '@server/config/winston';

//Importando router principal
import router from '@server/routes/index';
//import usersRouter from '@s-routes/users';

//Importing configurations
import configTemplateEngine from '@s-config/template-engine';

//Webpack modules
import webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
//Importar configuración
import webpackConfig from '../webpack.dev.config';
import webpackDevConfig from '../webpack.dev.config';

//Consultar modo en que se está ejecutando la ap
const env = process.env.NODE_ENV || 'development';

//Se crea la aplicación express (servidor software)
var app = express();

//Verificando el modo de ejecución de la ap
if (env === 'development') {
  console.log('>Excecuting in Development Mode: Webpcak Hot Reloading');
  //1.- Agregando la ruta del HOT MODULE REPLACING
  //reload=true habilita la recarga del frontend o servicios estáticos cuando hay
  //cambios en el código fuente del frontend
  //timeout=1000 tiempo de espera entre recargs y recarga
  webpackConfig.entry = [
    'webpack-hot-middleware/client?reload=true&timeout=1000',
    webpackConfig.entry,
  ];
  //2.- Agregar el plugin
  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
  //3.- Crear compilador de webpack
  const compiler = webpack(webpackDevConfig);

  //4.- Agregar middleware a la cadena de middlewares de la apl
  app.use(
    WebpackDevMiddleware(compiler, {
      publicPath: webpackDevConfig.output.publicPath,
    }),
  );

  //5.- Agregar el webpack hot middleware
  app.use(WebpackHotMiddleware(compiler));
} else {
  console.log('>Excecuting in Production Mode...');
}

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'hbs');
configTemplateEngine(app);

app.use(morgan('dev', { stream: winston.stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));

//Instalando enrutador principal a la apl express
router.addRoutes(app);
//app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  //Log
  winston.error(
    `Code: 404, Message: Page Not Found, URL: ${req.originalUrl}, Method: ${req.method}`,
  );
  next(createError(404));
});

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  //Loggeando con Winston
  winston.error(
    `status: ${err.status || 500}, Message: ${err.message}, Method: ${
      req.method
    }, IP: ${req.ip}`,
  );

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
