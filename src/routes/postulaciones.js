import express from 'express';
import {
  postPostulaciones,
  getConFiltros,
  getPorIdOferta,
  getPorIdPostulante,
  getPorId,
  deletePostulacion,
  updatePostulaciones,
  activarPostulante,
  getPorIdOfertaTodas
} from '../controllers/postulaciones';
import { withErrorHandling } from './utils';

const router = express.Router();

router.post('/', withErrorHandling(postPostulaciones));
router.get('/todas/', withErrorHandling(getConFiltros))
      .get('/:id', withErrorHandling(getPorId))
      .get('/ofertatodas/:id', withErrorHandling(getPorIdOfertaTodas))
      .get('/oferta/:id', withErrorHandling(getPorIdOferta))
      .get('/postulante/:id', withErrorHandling(getPorIdPostulante));
router.put('/:id', withErrorHandling(updatePostulaciones));
router.put('/activar/:id', withErrorHandling(activarPostulante));
router.delete('/:id', withErrorHandling(deletePostulacion));

export default router;
