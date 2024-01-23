import express from 'express';
import {
  createCiudad,
  getAll,
  updateCiudadById,
  deleteCiudadById, getCiudadesByProvinciaId
} from '../controllers/ciudades';
import { withErrorHandling } from './utils';

const router = express.Router();

router.post('/', withErrorHandling(createCiudad));
router.get('/', withErrorHandling(getAll))
      .get('/:id', withErrorHandling(getCiudadesByProvinciaId));
router.put('/:id', withErrorHandling(updateCiudadById));
router.delete('/:id', withErrorHandling(deleteCiudadById));


export default router;