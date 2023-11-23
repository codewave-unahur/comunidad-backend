import express from 'express';
import {
  getConFiltros,
  getPorId,
  getPorIdUsuario,
  postPostulante,
  deletePostulante,
  updatePostulante,
  agregarPreferencias,
  eliminarPreferencias,
  agregarAptitudes,
  eliminarAptitudes,
  agregarIdiomas,
  eliminarIdioma
} from '../controllers/postulantes';
import { withErrorHandling } from './utils';

const router = express.Router();

router.post('/', withErrorHandling(postPostulante));
router.get('/', withErrorHandling(getConFiltros))
      .get('/idUsuario/:id', withErrorHandling(getPorIdUsuario)) 
      .get('/dni/:id', withErrorHandling(getPorId));
router.post('/preferencias/:id', withErrorHandling(agregarPreferencias));
router.post('/idiomas/:id', withErrorHandling(agregarIdiomas));
router.delete('/idiomas/:id', withErrorHandling(eliminarIdioma));
router.delete('/preferencias/:id', withErrorHandling(eliminarPreferencias));
router.post('/aptitudes/:id', withErrorHandling(agregarAptitudes));
router.delete('/aptitudes/:id', withErrorHandling(eliminarAptitudes));
router.put('/dni/:id', withErrorHandling(updatePostulante));
router.delete('/dni/:id', withErrorHandling(deletePostulante));


export default router;