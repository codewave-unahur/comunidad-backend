import express from 'express';
import {
  getAll
} from '../controllers/carreras';
import { withErrorHandling } from './utils';
import { validateToken } from '../middlewares/validador';

const router = express.Router();

// Aca el admin tendria que poder modificar/eliminar/crear(CRUD) las carreras.....
// Estarian faltando funcionalidades.
// Quizas lo de validar token quedaria bien en put y en delete.
router.get('/', withErrorHandling(getAll));

export default router;