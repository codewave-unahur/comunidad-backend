import express from 'express';
import { withErrorHandling } from './utils';
import {
    createAptitudOferta,
    deleteAptitudId,
    deleteAptitudIdOferta,
    getIdOferta,
    updateAptitudOferta, getAll
} from "../controllers/aptitudes_ofertas";

const router = express.Router();

router.post("/", withErrorHandling(createAptitudOferta));
router.get("/", withErrorHandling(getAll))
    .get("/:id", withErrorHandling(getIdOferta));
router.put("/:id", withErrorHandling(updateAptitudOferta));
router.delete("/:id", withErrorHandling(deleteAptitudId))
    .delete("/oferta/:id", withErrorHandling(deleteAptitudIdOferta));//Borra todas las aptitudes con el if Oferta.

export default router;