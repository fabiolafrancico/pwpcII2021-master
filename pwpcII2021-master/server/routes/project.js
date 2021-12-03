//Importando router
import { Router } from 'express';
//importar el controlador de proyectos
import projectController from '@server/controllers/projectController';
//Creando instancia de un router
const router = new Router();
// "/projects" "/projects/index"
router.get(['/', '/index'], projectController.index);
// "/projects/add"
// Sirve el formulario para agregar proyectos
router.get('/add', projectController.add);

export default router;
