"use strict";

var form = document.querySelector('form');
form.onsubmit = sendData;

function sendData(e) {
  e.preventDefault();
  var formData = new FormData(form);
  var Params = {
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      fullname: formData.get('fullname'),
      address: formData.get('address'),
      address2: formData.get('address2'),
      city: formData.get('city'),
      state: formData.get('state'),
      zipcode: formData.get('zipcode')
    }),
    method: "POST"
  };
  fetch('http://localhost:3000/formData', Params).then(function (response) {
    return response.json();
  }).then(function (data) {
    if (data.success === "Ok") {
      console.log("success");
    } else {
      var error = document.querySelector('.error');
      error.innerHTML = "";
      document.querySelector('.errorContainer').style.display = 'block';
      data.errors.forEach(function (err) {
        error.innerHTML += "<li>* ".concat(err.msg, "</li>");
      });
    }

    console.log(data);
  })["catch"](function (err) {
    return console.log(err);
  });
}