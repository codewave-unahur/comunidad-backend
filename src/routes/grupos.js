import express from 'express';
import{
    createGroup,
    getAll,
    getGrupoById,
    updateGrupo,
    deleteGrupo
} from "../controllers/grupos.js";
import { withErrorHandling } from './utils';

const router = express.Router();

router.post("/", withErrorHandling(createGroup));
router.get("/", withErrorHandling(getAll))
      .get("/:id", withErrorHandling(getGrupoById));
router.put("/:id", withErrorHandling(updateGrupo));
router.delete("/:id", withErrorHandling(deleteGrupo));

export default router;