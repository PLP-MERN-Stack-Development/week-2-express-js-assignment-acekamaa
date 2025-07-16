const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');
const auth = require('../middleware/auth');
const validate = require('../middleware/validateProduct');

app.use(logger);

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', auth, validate, controller.create);
router.put('/:id', auth, validate, controller.update);
router.delete('/:id', auth, controller.remove);

module.exports = router;
