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
  getPorIdOfertaTodas,
  marcarContactado,
  desactivarPostulacion,
  postularseBaseUnahur
} from '../controllers/postulaciones';
import { withErrorHandling } from './utils';

const router = express.Router();

router.post('/', withErrorHandling(postPostulaciones));
router.post('/baseConstante/:id', withErrorHandling(postularseBaseUnahur));
router.get('/todas/', withErrorHandling(getConFiltros))
      .get('/:id', withErrorHandling(getPorId))
      .get('/oferta/:id', withErrorHandling(getPorIdOferta))
      .get('/postulante/:id', withErrorHandling(getPorIdPostulante));
router.get('/ofertatodas/:id', withErrorHandling(getPorIdOfertaTodas));
router.put('/:id', withErrorHandling(updatePostulaciones));
router.put('/activar/:id', withErrorHandling(activarPostulante));
router.put('/desactivar/:id', withErrorHandling(desactivarPostulacion));
router.put('/contactado/:id', withErrorHandling(marcarContactado));
router.delete('/:id', withErrorHandling(deletePostulacion));

export default router;
