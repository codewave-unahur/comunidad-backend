import express from 'express';
import {
  getConFiltros
} from '../controllers/provincias';
import { withErrorHandling } from './utils';

const router = express.Router();

router.get('/', withErrorHandling(getConFiltros));

export default router;