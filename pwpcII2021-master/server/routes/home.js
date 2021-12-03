//Importando router
import { Router } from 'express';
//Importando al controlador Home
import homeControllers from '@server/controllers/homeControllers';

//Creando instancia de un router
const router = new Router();

//Petición GET que se haga a la ruta raíz
router.get(['/', '/index'], homeControllers.index);

//GET '/hola'
router.get('/hola', homeControllers.hola);

//GET '/about'
router.get('/about', homeControllers.about);

//Exportando el router que maneja las subrutas para el controlador home Conectando a router padre
export default router;
