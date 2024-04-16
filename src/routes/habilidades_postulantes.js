import express from "express";
import {withErrorHandling} from "./utils";
import {
    createAptitudPostulante, deleteAptitudByIdPostulante,
    deleteByIdAptitudPostulante,
    getIdUsuario,
    updateAptitudPostulante,getAll
} from "../controllers/aptitudes_postulantes";

const router = express.Router();

router.post("/", withErrorHandling(createAptitudPostulante));
router.get("/", withErrorHandling(getAll))
    .get("/:id", withErrorHandling(getIdUsuario));
router.put("/:id", withErrorHandling(updateAptitudPostulante));
router.delete("/:id", withErrorHandling(deleteByIdAptitudPostulante))
    .delete("/dni/:id", withErrorHandling(deleteAptitudByIdPostulante));

export default router;