"use strict";

var express = require("express");

var app = express();

var path = require('path');

var cors = require("cors");

var pool = require("./db");

var _require = require('express-validator'),
    check = _require.check,
    validationResult = _require.validationResult; //middleware


app.use(cors());
app.use(express.json()); //req.body

var urlencoded = express.urlencoded({
  extended: true
});
app.use(express.json());
app.use(urlencoded);
app.use(express["static"](__dirname + '/')); //Du Code

app.post("/register", function _callee(req, res) {
  var newTodo;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          user = req.body.user;
          pass = req.body.pass;
          _context.prev = 2;
          console.log(req.body); //this will encrypt the password once it is made

          _context.next = 6;
          return regeneratorRuntime.awrap(pool.query("INSERT INTO UserCredentials VALUES(0001,'".concat(user, "',crypt('firstpass',gen_salt('").concat(pass, "'))); ")));

        case 6:
          newTodo = _context.sent;
          res.json(newTodo.rows[0]);
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](2);
          console.error(_context.t0.message);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 10]]);
}); //William Code

app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname + '/fuelform.html'));
});
app.post('/formData', [check('gallonsreq').not().isEmpty().withMessage('Name cannot be empty.').isLength({
  max: 50
}).withMessage('50 numbers max for gallons required.').trim(), check('deliveryadr').not().isEmpty().withMessage('Delivery address cannot be empty.').isLength({
  max: 100
}).withMessage('100 characters max for address.'), check('ddate').not().isEmpty().withMessage('Delivery date cannot be empty.')], function (request, response) {
  var errors = validationResult(request);

  if (!errors.isEmpty()) {
    return response.status(422).json({
      errors: errors.array()
    });
  }

  response.status(202).json({
    success: 'Ok'
  });
});
app.post("/fuelform", function _callee2(req, res) {
  var newTodo;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          gallonsrequested = req.body.gallonsreq;
          deliveryaddress = req.body.deliveryadr;
          deliverydate = req.body.ddate;
          console.log("work?");
          _context2.prev = 4;
          console.log(req.body);
          console.log("INSERT INTO FuelQuote VALUES(0001,'".concat(gallonsrequested, "','").concat(deliveryaddress, "','").concat(deliverydate, "'); "));
          _context2.next = 9;
          return regeneratorRuntime.awrap(pool.query("INSERT INTO FuelQuote VALUES(0001,'".concat(gallonsrequested, "','").concat(deliveryaddress, "','").concat(deliverydate, "'); ")));

        case 9:
          newTodo = _context2.sent;
          _context2.next = 15;
          break;

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](4);
          console.error(_context2.t0.message);

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[4, 12]]);
}); //Duy Code

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

app.post("/profile", function _callee3(req, res) {
  var newTodo;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          fullname = req.body.name;
          address = req.body.add;
          address2 = req.body.add2;
          city = req.body.city;
          state = req.body.state;
          zipcode = req.body.zip;
          console.log("work?");
          _context3.prev = 7;
          console.log(req.body);
          console.log("INSERT INTO ClientInformation VALUES(0001,'".concat(fullname, "','").concat(address, "','").concat(address2, "','").concat(city, "','").concat(state, "','").concat(zipcode, "'); "));
          _context3.next = 12;
          return regeneratorRuntime.awrap(pool.query("INSERT INTO ClientInformation VALUES(0001,'".concat(fullname, "','").concat(address, "','").concat(address2, "','").concat(city, "','").concat(state, "','").concat(zipcode, "'); ")));

        case 12:
          newTodo = _context3.sent;
          _context3.next = 18;
          break;

        case 15:
          _context3.prev = 15;
          _context3.t0 = _context3["catch"](7);
          console.error(_context3.t0.message);

        case 18:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[7, 15]]);
});
app.listen(5000, function () {
  console.log("server has started on port 5000");
});