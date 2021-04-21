"use strict";

var express = require('express');

var app = express();
var port = 3000;

var path = require('path');

var _require = require('express-validator'),
    check = _require.check,
    validationResult = _require.validationResult; //


var cors = require("cors");

var pool = require("./db"); //middleware


app.use(cors());
var urlencoded = express.urlencoded({
  extended: true
});
app.use(express.json());
app.use(urlencoded);
app.use(express["static"](__dirname + '/'));
app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname + '/profile_dv.html'));
});
app.post('/formData', [check('fullname').not().isEmpty().withMessage('Name cannot be empty.').isLength({
  max: 50
}).withMessage('50 characters max for full name.').trim(), check('address').not().isEmpty().withMessage('Address cannot be empty.').isLength({
  max: 100
}).withMessage('100 characters max for address.'), check('address2').isLength({
  max: 100
}).withMessage('100 characters max for address 2.'), check('city').not().isEmpty().withMessage('City cannot be empty.').isLength({
  max: 100
}).withMessage('100 characters max for city.'), check('zipcode').isPostalCode('US').withMessage('not a valid US Zipcode.').isLength({
  min: 5,
  max: 9
}).withMessage('Minimum of 5 characters and Maximum of 9 characters for Zipcode.')], function (request, response) {
  var errors = validationResult(request);

  if (!errors.isEmpty()) {
    return response.status(422).json({
      errors: errors.array()
    });
  }

  response.status(202).json({
    success: 'Ok'
  });
}); //ROUTES//

app.post("/profile", function _callee(req, res) {
  var newTodo;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          fullname = req.body.name;
          address = req.body.add;
          address2 = req.body.add2;
          city = req.body.city;
          state = req.body.state;
          zipcode = req.body.zip;
          console.log("work?");
          _context.prev = 7;
          console.log(req.body);
          console.log("INSERT INTO ClientInformation VALUES(0001,'".concat(fullname, "','").concat(address, "','").concat(address2, "','").concat(city, "','").concat(state, "','").concat(zipcode, "'); "));
          _context.next = 12;
          return regeneratorRuntime.awrap(pool.query("INSERT INTO ClientInformation VALUES(0001,'".concat(fullname, "','").concat(address, "','").concat(address2, "','").concat(city, "','").concat(state, "','").concat(zipcode, "'); ")));

        case 12:
          newTodo = _context.sent;
          _context.next = 18;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](7);
          console.error(_context.t0.message);

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[7, 15]]);
});
app.listen(port, function () {
  return console.log('server running');
}); //echo \"Error: no test specified\" && exit 1