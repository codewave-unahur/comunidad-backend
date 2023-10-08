import express from 'express';
import{
    createAptitudPostulante,
    getAll,
    getIdUsuario,
    updateAptitudPostulante,
    deleteAptitudIdPostulante 
} from "../controllers/aptitudesPostulantes.js";
import { withErrorHandling } from './utils';

const router = express.Router();

router.post("/", withErrorHandling(createAptitudPostulante));
router.get("/", withErrorHandling(getAll))
      .get("/:id", withErrorHandling(getIdUsuario));
router.put("/:id", withErrorHandling(updateAptitudPostulante));
router.delete("/:id", withErrorHandling(deleteAptitudIdPostulante));

export default router;