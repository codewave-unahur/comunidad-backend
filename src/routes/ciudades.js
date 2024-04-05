import express from 'express';
import {
  getConFiltros
} from '../controllers/ciudades';
import { withErrorHandling } from './utils';
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Ciudades
 * /ciudades:
 *   get:
 *     tags:
 *       - Ciudades
 *     summary: Obtiene ciudades con filtros.
 *     parameters:
 *       - in: query
 *         name: nombreCiudad
 *         type: string
 *         description: Nombre de la ciudad para filtrar.
 *       - in: query
 *         name: idProvincia
 *         type: integer
 *         description: ID de la provincia para filtrar.
 *     responses:
 *       200:
 *         description: Retorna la lista de ciudades filtradas.
 *         content:
 *           application/json:
 *             example:
 *               {
 *                 "ciudades": [
 *                   {
 *                     "id": 1,
 *                     "nombre": "Ciudad1"
 *                   }
 *                 ]
 *               }
 *       500:
 *         description: Error del servidor.
 */

router.get('/', withErrorHandling(getConFiltros));

export default router;