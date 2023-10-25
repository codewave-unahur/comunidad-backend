import express from 'express';

import{
    createAptitudPostulante,
    getAll,
    getIdUsuario
} from "../controllers/aptitudesPostulantes.js";

import { withErrorHandling } from './utils';
import { validateToken } from '../middlewares/validador';

const router = express.Router();

router.post("/", withErrorHandling(createAptitudPostulante));
router.get("/", withErrorHandling(getAll));
router.get("/:id", withErrorHandling(getIdUsuario));
  
export default router;