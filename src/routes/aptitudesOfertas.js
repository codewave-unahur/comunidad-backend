import express from 'express';
import{
    createAptitudOferta,
    getAll,
    getIdOferta,
    updateAptitudOferta,
    deleteAptitudIdPostulante 
} from "../controllers/aptitudesOfertas.js";
import { withErrorHandling } from './utils';

const router = express.Router();

router.post("/", withErrorHandling(createAptitudOferta));
router.get("/", withErrorHandling(getAll))
      .get("/:id", withErrorHandling(getIdOferta));
router.put("/:id", withErrorHandling(updateAptitudOferta));
router.delete("/:id", withErrorHandling(deleteAptitudIdPostulante));

export default router;