import express from 'express';
import {
  getAll
} from '../controllers/estudios';
import { withErrorHandling } from './utils';
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Estudios
 * /estudios:
 *   get:
 *     tags:
 *       - Estudios
 *     summary: Obtiene todos los estudios y su nivel de completitud.
 *     responses:
 *       200:
 *         description: Retorna la lista tipos de estudios y su nivel de completitud.
 *         content:
 *           application/json:
 *             example:
 *               estudios:
 *                 - id: 1
 *                   nombre_estudio: "Estudio1"
 *                   estado_estudio: "Completo"
 *                 - id: 2
 *                   nombre_estudio: "Estudio2"
 *                   estado_estudio: "Incompleto"
 *       500:
 *         description: Error del servidor.
 */

router.get('/', withErrorHandling(getAll));

export default router;