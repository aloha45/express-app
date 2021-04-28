var express = require('express');
var router = express.Router();
const booksCtrl = require("../controllers/books")

/* GET users listing. */
router.get('/', booksCtrl.getAll);

module.exports = router;
