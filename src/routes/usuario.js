import express from 'express';
import {
  getAll,
  signIn,
  signUp,

} from '../controllers/usuarios';
import { withErrorHandling } from './utils';

const router = express.Router();

router.get('/',withErrorHandling(getAll));
router.post('/login', withErrorHandling(signIn));
router.post('/register', withErrorHandling(signUp));

export default router;