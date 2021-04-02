let form = document.querySelector('form');

form.onsubmit = sendData;

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

    fetch('http://localhost:3000/formData', Params)
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
}