import express from 'express';
import {
  getConFiltros
} from '../controllers/ciudades';
import { withErrorHandling } from './utils';
import { validateToken } from '../middlewares/validador';

const router = express.Router();

// Aca no usaria validateToken, las ciudades estaria bueno sacarlas de una api....
router.get('/', withErrorHandling(getConFiltros));

export default router;