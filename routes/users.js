var express = require('express');
var router = express.Router();
var UserList = require('./../data/usuarios.json')

router.get('/', function(req, res, next) {
    res.json(UserList)
});

router.get('/:id', function(req, res, next) {
  res.json(UserList[0])
});

router.post('/', function(req, res, next){
  
})

module.exports = router;