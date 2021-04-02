"use strict";

var express = require("express");

var app = express();

var cors = require("cors");

var pool = require("../db"); //middleware


app.use(cors());
app.use(express.json()); //req.body

app.post("/profile", function _callee(req, res) {
  var newTodo;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          fullname = req.body.fullname;
          address = req.body.address;
          address2 = req.body.address2;
          city = req.body.city;
          state = req.body.state;
          zipcode = req.body.zipcode;
          _context.prev = 6;
          console.log(req.body);
          _context.next = 10;
          return regeneratorRuntime.awrap(pool.query("INSERT INTO clientinformation VALUES(0001,'".concat(fullname, "','").concat(address, "','").concat(address2, "','").concat(city, "','").concat(state, "','").concat(zipcode, "'); ")));

        case 10:
          newTodo = _context.sent;
          res.json(newTodo.rows[0]);
          _context.next = 17;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](6);
          console.error(_context.t0.message);

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[6, 14]]);
});
app.listen(3000, function () {
  console.log("server has started on port 3000");
});