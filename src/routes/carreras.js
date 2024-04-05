import express from 'express';
import {
  getAll
} from '../controllers/carreras';
import { withErrorHandling } from './utils';
const router = express.Router();


/**
 * @swagger
 * tags:
 *   - name: Carreras
 * paths:
 *     /carreras:
 *       get:
 *         tags:
 *           - Carreras
 *         summary: Obtiene todas las carreras.
 *         responses:
 *           200:
 *             description: Retorna la lista de carreras.
 *             content:
 *               application/json:
 *                 example:
 *                   carreras:
 *                     - id: 1
 *                       nombre_carrera: "Nombre1"
 *                     - id: 2
 *                       nombre_carrera: "Nombre2"
 *           500:
 *             description: Error del servidor.
 */


router.get('/', withErrorHandling(getAll));

export default router;