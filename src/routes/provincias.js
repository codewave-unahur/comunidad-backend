import express from 'express';
import {
  getConFiltros
} from '../controllers/provincias';
import { withErrorHandling } from './utils';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Provincias
 * /provincias:
 *   get:
 *     tags:
 *       - Provincias
 *     summary: Obtiene todas las provincias con filtros opcionales.
 *     parameters:
 *       - in: query
 *         name: nombreProvincia
 *         schema:
 *           type: string
 *         description: Nombre de la provincia o parte del nombre para filtrar.
 *     responses:
 *       200:
 *         description: Retorna la lista de provincias que coinciden con los filtros.
 *         content:
 *           application/json:
 *             example:
 *               provincias:
 *                 - id: 1
 *                   nombre: "Provincia1"
 *                 - id: 2
 *                   nombre: "Provincia2"
 *       500:
 *         description: Error del servidor.
 */

router.get('/', withErrorHandling(getConFiltros));

export default router;