var express = require('express');
var router = express.Router();
var PinList = require('./../data/pins.json')
var _ = require('underscore');

router.get('/', function(req, res, next) {
  console.log(req.query)
  if(req.query.results && req.query.page){
    return res.json(_.chunk(PinList, parseInt(req.query.results))[parseInt(req.query.page)])
  }else
    return res.json(PinList)
});

router.get('/:id', function(req, res, next) {
  res.json(PinList[0])
});

router.post('/', function(req, res, next){
      console.log(req.body)
      res.json(req.body)
})

module.exports = router;
