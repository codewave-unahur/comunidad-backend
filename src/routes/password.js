import express from 'express';

import{
    signUpController,
    resetPasswordRequestController,
    resetPasswordController,
} from "../controllers/auth.controller";

import { withErrorHandling } from './utils';
import { validateToken } from '../middlewares/validador';

const router = express.Router();
  
router.post("/auth/signup", withErrorHandling(signUpController));
router.post("/auth/requestResetPassword", withErrorHandling(resetPasswordRequestController));
router.post("/auth/resetPassword", withErrorHandling(resetPasswordController));
  
export default router;