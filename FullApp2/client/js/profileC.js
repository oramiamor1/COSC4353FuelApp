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

async function insertProf() {
    var name = document.querySelector('#name').value;
    var add = document.querySelector('#add').value;
    if(document.querySelector('#add2').value == ""){
        var add2 = "null";
    }
    else{
        var add2 = document.querySelector('#add2').value;
    }
    var city = document.querySelector('#city').value;
    var state = document.querySelector('#state').value;
    var zip = document.querySelector('#zip').value;
    console.log(name);
  
    try {
    const body = {
        name: name, 
        add: add,
        add2: add2,
        city: city,
        state: state,
        zip: zip
    };

    const response = await fetch(`http://localhost:5000/profile`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    });
  
    location.reload();
    return false;
  
    }catch (err) {
      console.log(err.message);
    }
}