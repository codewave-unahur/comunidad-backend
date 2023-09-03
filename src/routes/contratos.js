import express from 'express';
import {
  getAll
} from '../controllers/contratos';
import { withErrorHandling } from './utils';
import { validateToken } from '../middlewares/validador';

const router = express.Router();

// Faltan funcionalidades...
// Solo las empresas tendrian que poder hacer CRUD de sus contratos.
router.get('/', withErrorHandling(getAll));

export default router;