var express = require('express');
var router = express.Router();

const destinationCtrl = require('../controllers/destinations')

/* GET home page. */
router.get('/new', destinationCtrl.new);
router.post('/', destinationCtrl.create);
router.delete('/:id', destinationCtrl.delete )

module.exports = router;