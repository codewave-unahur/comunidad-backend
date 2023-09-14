"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _carreras = require("../controllers/carreras");

var _utils = require("./utils");

var _validador = require("../middlewares/validador");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router(); // Aca el admin tendria que poder modificar/eliminar/crear(CRUD) las carreras.....
// Estarian faltando funcionalidades.
// Quizas lo de validar token quedaria bien en put y en delete.


router.get('/', (0, _utils.withErrorHandling)(_carreras.getAll));
var _default = router;
exports.default = _default;
//# sourceMappingURL=carreras.js.map