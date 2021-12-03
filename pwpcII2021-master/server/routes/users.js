//var express = require('express');
//var router = express.Router();
//Importando router
import { Router } from 'express';
//Importando controlador
import userController from '@server/controllers/userController';

//Instancia del router
const router = new Router();

/* GET users listing. */
//router.get('/', function (req, res) {
//res.send('respond with a resource');
//});
router.get('/', userController.index);

export default router;
//module.exports = router;
