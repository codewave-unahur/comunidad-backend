import express from 'express';
import {
  getConFiltros,
  getPorId,
  getOfertasPorIdEmpresa
} from '../controllers/ofertas';
import { withErrorHandling } from './utils';
import { validateToken } from '../middlewares/validador';

const router = express.Router();

router.get('/', withErrorHandling(getConFiltros));
router.get('/idOferta/:id', withErrorHandling(getPorId));
router.get('/cuit/:id', withErrorHandling(getOfertasPorIdEmpresa));

export default router;