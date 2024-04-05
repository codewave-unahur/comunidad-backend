import express from 'express';
import {
  getAll
} from '../controllers/jornadas';
import { withErrorHandling } from './utils';
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Jornadas
 * /jornadas:
 *   get:
 *     tags:
 *       - Jornadas
 *     summary: Obtiene todos los tipos de jornadas.
 *     responses:
 *       200:
 *         description: Retorna la lista de tipos de jornadas.
 *         content:
 *           application/json:
 *             example:
 *               jornadas:
 *                 - id: 1
 *                   nombre_jornada: "Jornada1"
 *                   detalle: "Detalles de la Jornada1"
 *                 - id: 2
 *                   nombre_jornada: "Jornada2"
 *                   detalle: "Detalles de la Jornada2"
 *       500:
 *         description: Error del servidor.
 */

router.get('/', withErrorHandling(getAll));

export default router;