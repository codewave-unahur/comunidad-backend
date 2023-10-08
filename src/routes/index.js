import express from 'express';
import usuarios from './usuarios';
import postulantes from './postulantes'
import ofertas from './ofertas'
import empresas from './empresas'
import postulaciones from './postulaciones';
import jornadas from './jornadas';
import contratos from './contratos';
import estudios from './estudios';
import carreras from './carreras';
import provincias from './provincias';
import ciudades from './ciudades';
import idiomas from './idiomas';
import nivelesIdiomas from './nivelesIdiomas';
import files  from './files';
import tiposDocumentos from './tiposDocumentos';
import password from './password.js';
import aptitudesPostulantes from './aptitudesPostulantes.js';
import {validateToken} from '../middlewares/validador';

const router = express.Router();

//router.use(validateToken);
router.use('/usuarios', usuarios);
router.use('/postulantes', postulantes);
router.use('/ofertas', ofertas);
router.use('/empresas', empresas);
router.use('/postulaciones', postulaciones);
router.use('/jornadas', jornadas);
router.use('/contratos', contratos);
router.use('/estudios', estudios);
router.use('/carreras', carreras);
router.use('/provincias', provincias);
router.use('/ciudades', ciudades);
router.use('/idiomas', idiomas);
router.use('/nivelesIdiomas', nivelesIdiomas);
router.use('/files', files);
router.use('/tiposDocumento', tiposDocumentos);
router.use('/password',password);
router.use('/aptitudesPostulantes', aptitudesPostulantes);

export default router;