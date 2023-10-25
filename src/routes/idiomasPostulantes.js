import express from 'express';
import {
  getAll,
  postIdiomasPostulantes,
  getPorIdPostulante
} from '../controllers/idiomasPostulantes';
import { withErrorHandling } from './utils';
import { validateToken } from '../middlewares/validador';

const router = express.Router();

router.post('/', withErrorHandling(postIdiomasPostulantes));
router.get('/', withErrorHandling(getAll));
router.get('/:id', withErrorHandling(getPorIdPostulante));



export default router;