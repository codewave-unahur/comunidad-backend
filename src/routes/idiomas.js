import express from 'express';
import {
  getAll
} from '../controllers/idiomas';
import { withErrorHandling } from './utils';
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Idiomas
 *     description: Operaciones relacionadas con Idiomas
 * /idiomas:
 *   get:
 *     tags:
 *       - Idiomas
 *     summary: Obtiene todos los idiomas.
 *     responses:
 *       200:
 *         description: Retorna la lista de idiomas.
 *         content:
 *           application/json:
 *             example:
 *               idiomas:
 *                 - id: 1
 *                   nombre_idioma: "Idioma1"
 *                 - id: 2
 *                   nombre_idioma: "Idioma2"
 *       500:
 *         description: Error del servidor.
 */

router.get('/', withErrorHandling(getAll));

export default router;