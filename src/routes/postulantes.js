import express from 'express';
import {
  getConFiltros,
  getPorId,
  getPorIdUsuario,
  postPostulante,
  deletePostulante,
  updatePostulante
} from '../controllers/postulantes';
import { withErrorHandling } from './utils';
import { validateToken } from '../middlewares/validador';

const router = express.Router();

router.post('/', withErrorHandling(postPostulante));
router.get('/', withErrorHandling(getConFiltros))
      .get('/idUsuario/:id', withErrorHandling(getPorIdUsuario)) 
      .get('/dni/:id', withErrorHandling(getPorId));
router.put('/dni/:id',validateToken, withErrorHandling(updatePostulante));
router.delete('/dni/:id', withErrorHandling(deletePostulante));


export default router;