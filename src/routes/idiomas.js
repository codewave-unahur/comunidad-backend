import express from 'express';
import {
  getAll
} from '../controllers/idiomas';
import { withErrorHandling } from './utils';

const router = express.Router();

router.get('/', withErrorHandling(getAll));

export default router;