import express from 'express';
import {
  getAll,
  postIdiomasOfertas,
  getPorId
} from '../controllers/idiomasOfertas';
import { withErrorHandling } from './utils';
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: IdiomasOfertas
 * /idiomasOfertas:
 *   get:
 *     tags:
 *       - IdiomasOfertas
 *     summary: Obtiene todas las asociaciones entre Idiomas y Ofertas.
 *     responses:
 *       200:
 *         description: Retorna la lista de asociaciones.
 *         content:
 *           application/json:
 *             example:
 *               idiomas_ofertas:
 *                 - id: 1
 *                   fk_id_idioma: 1
 *                   fk_id_oferta: 1
 *                   fk_id_nivel: 1
 *                 - id: 2
 *                   fk_id_idioma: 2
 *                   fk_id_oferta: 2
 *                   fk_id_nivel: 2
 *       500:
 *         description: Error del servidor.
 *   post:
 *     tags:
 *       - IdiomasOfertas
 *     summary: Crea una nueva asociación entre Idioma y Oferta.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             idIdioma: 1
 *             idOferta: 1
 *             idNivel: 1
 *     responses:
 *       201:
 *         description: Asociación creada con éxito.
 *       401:
 *         description: Error de validación de campos.
 *       500:
 *         description: Error del servidor.
 * /idiomasOfertas/{id}:
 *   get:
 *     tags:
 *       - IdiomasOfertas
 *     summary: Obtiene una asociación entre Idioma y Oferta por ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: integer
 *         description: ID de la asociación Idioma-Oferta.
 *     responses:
 *       200:
 *         description: Retorna la asociación Idioma-Oferta por ID.
 *       401:
 *         description: No se encuentra la asociación.
 *       400:
 *         description: Error del servidor.
 */


router.get('/', withErrorHandling(getAll));
router.post('/', withErrorHandling(postIdiomasOfertas));
router.get('/:id', withErrorHandling(getPorId));

export default router;