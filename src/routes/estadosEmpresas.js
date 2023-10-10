import express from 'express';
import{
    createEstadoEmpresa,
    getAll,
    getEstadoEmpresaById,
    updateEstadoEmpresa,
    deleteEstadoEmpresa
} from "../controllers/estadosEmpresas.js";
import { withErrorHandling } from './utils.js';

const router = express.Router();

router.post("/", withErrorHandling(createEstadoEmpresa));
router.get("/", withErrorHandling(getAll))
      .get("/:id", withErrorHandling(getEstadoEmpresaById));
router.put("/:id", withErrorHandling(updateEstadoEmpresa));
router.delete("/:id", withErrorHandling(deleteEstadoEmpresa));

export default router;