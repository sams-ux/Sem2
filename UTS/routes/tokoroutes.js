const express = require('express');
const router = express.Router();
const supplierroutes = require('../controller/tokocontroller');

router.get('/', supplierroutes.get);
router.get('/:id', supplierroutes.get);
router.post('/', supplierroutes.post);
router.put('/:id', supplierroutes.put);
router.delete('/:id', supplierroutes.delete);

module.exports = router;