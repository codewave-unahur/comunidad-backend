import express from 'express';
import {
  getOfertasPorFiltros,
  getIdOferta,
  getOfertasPorIdEmpresa,
  createOferta,
  deleteOferta,
  updateOfertas,
  getOfertas
} from '../controllers/ofertas';
import { withErrorHandling } from './utils';

const router = express.Router();

router.post('/', withErrorHandling(createOferta));
router.get('/all/', withErrorHandling(getOfertas))
      .get('/', withErrorHandling(getOfertasPorFiltros))
      .get('/idOferta/:id', withErrorHandling(getIdOferta))
      .get('/cuit/:id', withErrorHandling(getOfertasPorIdEmpresa));
router.put('/idOferta/:id', withErrorHandling(updateOfertas));
router.delete('/idOferta/:id', withErrorHandling(deleteOferta));

export default router;