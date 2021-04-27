"use strict";

function insertProf() {
  var gallonsreq, deliveryadr, ddate, body, response;
  return regeneratorRuntime.async(function insertProf$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          gallonsreq = document.querySelector('#gallonsreq').value;
          deliveryadr = document.querySelector('#deliveryadr').value;
          ddate = document.querySelector('#ddate').value;
          console.log(gallonsreq);
          _context.prev = 4;
          body = {
            gallonsreq: gallonsreq,
            deliveryadr: deliveryadr,
            ddate: ddate
          };
          _context.next = 8;
          return regeneratorRuntime.awrap(fetch("http://localhost:5000/fuelform", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
          }));

        case 8:
          response = _context.sent;
          location.reload();
          return _context.abrupt("return", false);

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](4);
          console.log(_context.t0.message);

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[4, 13]]);
}