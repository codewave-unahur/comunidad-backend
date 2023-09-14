"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _files = require("../controllers/files");

var _utils = require("./utils");

var _validador = require("../middlewares/validador");

var _multer = require("../middlewares/multer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.post('/logo', _validador.validateToken, _multer.multer.single("uploadLogo"), (0, _utils.withErrorHandling)(_files.uploadLogo));
router.post('/cv/', _validador.validateToken, _multer.multer.single("uploadCV"), (0, _utils.withErrorHandling)(_files.uploadCV));
router.post('/foto/', _validador.validateToken, _multer.multer.single("uploadFoto"), (0, _utils.withErrorHandling)(_files.uploadFoto));
router.get('/', (0, _utils.withErrorHandling)(_files.getFiles));
var _default = router;
exports.default = _default;
//# sourceMappingURL=files.js.map