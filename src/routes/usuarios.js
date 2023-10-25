import express from 'express';
import {
  getAll,
  signIn,
  signUp,
  deleteUsuario,
  updateUsuario
} from '../controllers/usuarios';
import { withErrorHandling } from './utils';
import { validateToken } from '../middlewares/validador';

const router = express.Router();


router.post('/signin', withErrorHandling(signIn))
      .post('/signup', withErrorHandling(signUp));
router.get('/', withErrorHandling(getAll));
router.put('/:id', withErrorHandling(updateUsuario));
router.delete('/:id', withErrorHandling(deleteUsuario));

export default router;