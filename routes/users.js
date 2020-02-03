var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

router.get('/:id', function (req, res, next) {
  //asi seteas el status del http
  let response = {}
  console.log(res)
  response.nombre = 'Nicolas'
  res.send(response)
})

module.exports = router
