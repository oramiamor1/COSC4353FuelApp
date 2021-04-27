"use strict";

/*let form = document.querySelector('form');
form.onsubmit = insertProf;

function sendData(e){
    e.preventDefault();

    let formData = new FormData(form);
    let Params = {
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            fullname: formData.get('fullname'),
            address: formData.get('address'),
            address2: formData.get('address2'),
            city: formData.get('city'),
            state: formData.get('state'),
            zipcode: formData.get('zipcode'),  
        }),
        method: "POST"
    }
    console.log(Params);

    fetch('http://localhost:3000/profile', Params)
    .then(response => response.json())
    .then(data => {

        if(data.success === "Ok"){
            console.log("success");
        }

        else{
            let error = document.querySelector('.error');
            error.innerHTML = "";
            document.querySelector('.errorContainer').style.display = 'block';
            data.errors.forEach(function(err){
                error.innerHTML += `<li>* ${err.msg}</li>`;
            });
        }
        console.log(data)
        
    })
    .catch(err => console.log(err))
}*/
function insertProf() {
  var name, add, add2, city, state, zip, body, response;
  return regeneratorRuntime.async(function insertProf$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          name = document.querySelector('#name').value;
          add = document.querySelector('#add').value;

          if (document.querySelector('#add2').value == "") {
            add2 = "null";
          } else {
            add2 = document.querySelector('#add2').value;
          }

          city = document.querySelector('#city').value;
          state = document.querySelector('#state').value;
          zip = document.querySelector('#zip').value;
          console.log(name);
          _context.prev = 7;
          body = {
            name: name,
            add: add,
            add2: add2,
            city: city,
            state: state,
            zip: zip
          };
          _context.next = 11;
          return regeneratorRuntime.awrap(fetch("http://localhost:5000/profile", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
          }));

        case 11:
          response = _context.sent;
          location.reload();
          return _context.abrupt("return", false);

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](7);
          console.log(_context.t0.message);

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[7, 16]]);
}