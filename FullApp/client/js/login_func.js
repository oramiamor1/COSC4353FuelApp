var uid = 0;
var curUID = 0;

async function success_login(){
    var l_user = document.querySelector('#l_user').value;
    var l_pass = document.querySelector('#l_pass').value;
    console.log(l_user);
    var fac = l_user + ',' + l_pass;
    if(l_user.length == 0 || l_pass.length == 0){
        alert("Please fill all required field.");
        return false;
    }

    try {
  
        const response = await fetch(`http://localhost:5000/login/${fac}`);
        const jsonData = await response.json();
        let data = [];
        data = jsonData;
        if(data.length == 1)
        {
            console.log("yes");
            window.location.href = 'profile_dv.html';
        }
  
    }catch (err) {
      console.log(err.message);
    }
}

async function insertUserCred() {
    const result = await findUID()
    var user = document.querySelector('#r_user').value;
    var pass = document.querySelector('#r_pass').value;
    console.log(uid);
    var userid = uid;
    console.log(uid);
  
    try{
  
        const body = {
            userid: userid,
            user: user, 
            pass: pass 
        };
        const response = await fetch(`http://localhost:5000/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });

        console.log(response);
        
        alert("Registration Successful!");
        window.location.href = 'login.html';
  
    }catch (err) {
        alert(err);
        console.log(err.message);
    }
}

async function findUID(){
    try {
        const response = await fetch(`http://localhost:5000/uid`);
        const jsonData = await response.json();
        let data = [];
        data = jsonData;
        // console.log(data);
        uid = data[0].userid+1;
        curUID = data[0].userid;
        console.log(uid);
        console.log(curUID);
  
    }catch (err) {
      console.log(err.message);
    }
}


// function sendData(e){
//     e.preventDefault();

//     let formData = new FormData(form);

//     let Params = {
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify({
//             user1: formData.get('user1'),
//             pass1: formData.get('pass1'),
//         }),
//         method: "POST"
//     }

//     fetch('http://localhost:3000/regisData', Params)
//     .then(response => response.json())
//     .then(data => {
//         if(data.success === "Ok"){
//             console.log("success");
//         }
//         else{
//             let error = document.querySelector('.error');

//             error.innerHTML = "";
//             document.querySelector('.errorContainer').style.display = "block";
//             data.errors.forEach(function(err){
//                 error.innerHTML += `<li>* ${err.msg}</li>`;
//             });
//         }
        
//     })
//     .catch(err => console.log(err + 'help'))
// }

// function sendData1(e){
//     e.preventDefault();


//     let formData = new FormData(form);



//     let Params = {
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify({
//             user: formData.get('user'),
//             pass: formData.get('pass'),
//         }),
//         method: "POST"
//     }

//     fetch('http://localhost:3000/logData', Params)
//     .then(response => response.json())
//     .then(data => {

//         if(data.success === "Ok"){
//             console.log("success");
//         }
//         else{
//             let error = document.querySelector('.error');

//             error.innerHTML = "";
//             document.querySelector('.errorContainer').style.display = "block";
//             data.errors.forEach(function(err){
//                 error.innerHTML += `<li>* ${err.msg}</li>`;
//             });
//         }
        
//     })
//     .catch(error => console.log(error));
// }