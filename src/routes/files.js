import express from 'express';
import {
  uploadFoto,
  uploadLogo,
  uploadCV,
  getFiles
} from '../controllers/files';

import { withErrorHandling } from './utils';
import {multer} from '../middlewares/multer';


const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Files
 * /files/logo:
 *   post:
 *     tags:
 *       - Files
 *     summary: Sube el logo de una empresa.
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               logo:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Logo subido con éxito.
 *       500:
 *         description: Error del servidor.
 * /files/foto:
 *   post:
 *     tags:
 *       - Files
 *     summary: Sube la foto de un postulante.
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               foto:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Foto subida con éxito.
 *       500:
 *         description: Error del servidor.
 * /files/cv:
 *   post:
 *     tags:
 *       - Files
 *     summary: Sube el CV de un postulante.
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               cv:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: CV subido con éxito.
 *       500:
 *         description: Error del servidor.
 * /files/:
 *   get:
 *     tags:
 *       - Files
 *     summary: Descarga un archivo.
 *     parameters:
 *       - in: header
 *         name: file
 *         required: true
 *         type: string
 *         description: Nombre del archivo a descargar.
 *     responses:
 *       200:
 *         description: Archivo descargado con éxito.
 *       500:
 *         description: Error del servidor.
 */

router.post('/logo', multer.single("logo"), withErrorHandling(uploadLogo));
router.post('/cv', multer.single("cv"), withErrorHandling(uploadCV));
router.post('/foto', multer.single("foto"), withErrorHandling(uploadFoto));
router.get('/', withErrorHandling(getFiles));

export default router;
