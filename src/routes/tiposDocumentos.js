import express from 'express';
import {
  getAll
} from '../controllers/tiposDocumentos';
import { withErrorHandling } from './utils';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: TiposDocumento
 * /tiposDocumento:
 *   get:
 *     tags:
 *       - TiposDocumento
 *     summary: Obtiene todos los tipos de documentos.
 *     responses:
 *       200:
 *         description: Retorna la lista de tipos de documentos.
 *         content:
 *           application/json:
 *             example:
 *               tipos_documentos:
 *                 - id: 1
 *                   tipo_documento: "DNI"
 *                 - id: 2
 *                   tipo_documento: "Pasaporte"
 *       500:
 *         description: Error del servidor.
 */

router.get('/', withErrorHandling(getAll));

export default router;
