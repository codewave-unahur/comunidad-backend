import express from 'express';
import {
  getAll,
  getById
} from '../controllers/nivelesIdiomas';
import { withErrorHandling } from './utils';

const router = express.Router();

router.get('/', withErrorHandling(getAll));
router.get("/niveles/:id", withErrorHandling(getById));
export default router;