"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _usuarios = _interopRequireDefault(require("./usuarios"));
var _postulantes = _interopRequireDefault(require("./postulantes"));
var _ofertas = _interopRequireDefault(require("./ofertas"));
var _empresas = _interopRequireDefault(require("./empresas"));
var _postulaciones = _interopRequireDefault(require("./postulaciones"));
var _jornadas = _interopRequireDefault(require("./jornadas"));
var _contratos = _interopRequireDefault(require("./contratos"));
var _estudios = _interopRequireDefault(require("./estudios"));
var _carreras = _interopRequireDefault(require("./carreras"));
var _provincias = _interopRequireDefault(require("./provincias"));
var _ciudades = _interopRequireDefault(require("./ciudades"));
var _idiomas = _interopRequireDefault(require("./idiomas"));
var _nivelesIdiomas = _interopRequireDefault(require("./nivelesIdiomas"));
var _files = _interopRequireDefault(require("./files"));
var _tiposDocumentos = _interopRequireDefault(require("./tiposDocumentos"));
var _password = _interopRequireDefault(require("./password.js"));
var _aptitudesPostulantes = _interopRequireDefault(require("./aptitudesPostulantes.js"));
var _aptitudes = _interopRequireDefault(require("./aptitudes.js"));
var _aptitudesOfertas = _interopRequireDefault(require("./aptitudesOfertas.js"));
var _grupos = _interopRequireDefault(require("./grupos.js"));
var _rubros = _interopRequireDefault(require("./rubros.js"));
var _abmModels = _interopRequireDefault(require("./abmModels.js"));
var _estados = _interopRequireDefault(require("./estados.js"));
var _validador = require("../middlewares/validador");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = _express.default.Router();

//router.use(validateToken);
router.use('/usuarios', _usuarios.default);
router.use('/postulantes', _postulantes.default);
router.use('/ofertas', _ofertas.default);
router.use('/empresas', _empresas.default);
router.use('/postulaciones', _postulaciones.default);
router.use('/jornadas', _jornadas.default);
router.use('/contratos', _contratos.default);
router.use('/estudios', _estudios.default);
router.use('/carreras', _carreras.default);
router.use('/provincias', _provincias.default);
router.use('/ciudades', _ciudades.default);
router.use('/idiomas', _idiomas.default);
router.use('/nivelesIdiomas', _nivelesIdiomas.default);
router.use('/files', _files.default);
router.use('/tiposDocumento', _tiposDocumentos.default);
router.use('/password', _password.default);
router.use('/aptitudesPostulantes', _aptitudesPostulantes.default);
router.use('/aptitudes', _aptitudes.default);
router.use('/aptitudesOfertas', _aptitudesOfertas.default);
router.use('/grupos', _grupos.default);
router.use('/rubros', _rubros.default);
router.use('/abm', _abmModels.default);
router.use('/estados', _estados.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=index.js.map