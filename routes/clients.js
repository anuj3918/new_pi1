var express = require('express');
var router = express.Router();
var data = require('../clients.json');
/* GET home page.*/
router.get('/', function(req, res, next) {
    console.log(data);
    res.locals.data=data;
    res.render('clients');



});

module.exports = router;

