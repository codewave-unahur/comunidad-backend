import express from 'express';
import {
  getConFiltros,
  postPostulaciones,
  getPorId,
  deletePostulacion,
  updatePostulaciones,
} from '../controllers/postulaciones';
import { withErrorHandling } from './utils';

const router = express.Router();

router.get('/', withErrorHandling(getConFiltros));
router.post('/', withErrorHandling(postPostulaciones));
router.get('/:id', withErrorHandling(getPorId));
router.delete('/:id', withErrorHandling(deletePostulacion));
router.put('/:id', withErrorHandling(updatePostulaciones));

export default router;