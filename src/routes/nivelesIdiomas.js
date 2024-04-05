import express from 'express';
import {
  getAll
} from '../controllers/nivelesIdiomas';
import { withErrorHandling } from './utils';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: NivelesIdiomas
 * /nivelesIdiomas:
 *   get:
 *     tags:
 *       - NivelesIdiomas
 *     summary: Obtiene todos los niveles de idiomas.
 *     responses:
 *       200:
 *         description: Retorna la lista de niveles de idiomas.
 *         content:
 *           application/json:
 *             example:
 *               niveles_idiomas:
 *                 - id: 1
 *                   nivel: "Principiante"
 *                 - id: 2
 *                   nivel: "Intermedio"
 *       500:
 *         description: Error del servidor.
 */

router.get('/', withErrorHandling(getAll));

export default router;