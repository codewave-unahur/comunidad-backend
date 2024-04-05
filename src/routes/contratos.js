import express from 'express';
import {
  getAll
} from '../controllers/contratos';
import { withErrorHandling } from './utils';
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Contratos
 * /contratos:
 *   get:
 *     tags:
 *       - Contratos
 *     summary: Obtiene todos los contratos.
 *     responses:
 *       200:
 *         description: Retorna la lista de contratos.
 *         content:
 *           application/json:
 *             example:
 *               contratos:
 *                 - id: 1
 *                   nombre_contrato: "Contrato1"
 *                 - id: 2
 *                   nombre_contrato: "Contrato2"
 *       500:
 *         description: Error del servidor.
 */

router.get('/', withErrorHandling(getAll));

export default router;