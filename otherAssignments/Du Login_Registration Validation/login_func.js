
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

let form;
form = document.getElementById('login');
form.onsubmit = sendData1;

function p_register(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
    form = document.getElementById('register');
    form.onsubmit = sendData;
}

function p_login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
    form = document.getElementById('login');
    form.onsubmit = sendData1;
}



// function success_register(){
//     var r_user = document.querySelector('#r_user').value;
//     var r_pass = document.querySelector('#r_pass').value;
//     if(r_user.length <= 4 && r_pass.length <= 6){
//         alert("Please fill all required field correctly. Username must contain at least 4 characters. Password must have at least 6 characters");
//         return false;
//     }
//     else{
//         alert("Registeration Successful");
//         x.style.left = "50px";
//         y.style.left = "450px";
//         z.style.left = "0px";
//     }
    
// }

// function success_login(target){
//     var l_user = document.querySelector('#l_user').value;
//     var l_pass = document.querySelector('#l_pass').value;
//     if(l_user.length == 0 || l_pass.length == 0){
//         alert("Please fill all required field.");
//         return false;
        
//     }
//     else{
//         alert("Registeration Successful");
//         window.location.href = 'Profile.html';
//     }
// }



function sendData(e){
    e.preventDefault();

    let formData = new FormData(form);

    let Params = {
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            user1: formData.get('user1'),
            pass1: formData.get('pass1'),
        }),
        method: "POST"
    }

    fetch('http://localhost:3000/regisData', Params)
    .then(response => response.json())
    .then(data => {
        if(data.success === "Ok"){
            console.log("success");
        }
        else{
            let error = document.querySelector('.error');

            error.innerHTML = "";
            document.querySelector('.errorContainer').style.display = "block";
            data.errors.forEach(function(err){
                error.innerHTML += `<li>* ${err.msg}</li>`;
            });
        }
        
    })
    .catch(err => console.log(err + 'help'))
}

function sendData1(e){
    e.preventDefault();


    let formData = new FormData(form);



    let Params = {
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            user: formData.get('user'),
            pass: formData.get('pass'),
        }),
        method: "POST"
    }

    fetch('http://localhost:3000/logData', Params)
    .then(response => response.json())
    .then(data => {

        if(data.success === "Ok"){
            console.log("success");
        }
        else{
            let error = document.querySelector('.error');

            error.innerHTML = "";
            document.querySelector('.errorContainer').style.display = "block";
            data.errors.forEach(function(err){
                error.innerHTML += `<li>* ${err.msg}</li>`;
            });
        }
        
    })
    .catch(error => console.log(error));
}