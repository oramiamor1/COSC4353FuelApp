var uid = findLastUID();
var curUID = 0;
var hist = []

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
        if(data[0].count == 1)
        {
            console.log("yes");
            const result = await findUID(l_user);
            window.location.href = 'transition.html';
        }
        else{
            alert("Incorrect Username or Password");
        }
  
    }catch (err) {
      console.log(err.message);
    }
}

async function insertUserCred() {
    // const result = await findUID()
    if(uid == null){
        uid = 0;
    }
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
        // alert(err);
        console.log(err.message);
    }
}

async function findLastUID(){
    try {
        const response = await fetch(`http://localhost:5000/uid`);
        const jsonData = await response.json();
        let data = [];
        data = jsonData;
        // console.log(data);
        if(data.length == 0 || data.length == null){
            uid = 0;
        }
        else{
            uid = data[0].userid + 1;
        }
        console.log(uid);
        console.log(curUID);
  
    }catch (err) {
      console.log(err.message);
    }
}

async function findUID(l_user){
    var fac = l_user;
    try {
        const response = await fetch(`http://localhost:5000/uid/${fac}`);
        const jsonData = await response.json();
        let data = [];
        data = jsonData;
        // console.log(data);
        curUID = data[0].userid;
        console.log(curUID);
  
    }catch (err) {
      console.log(err.message);
    }
}

async function selectHistory() {
    var fac = curUID;
    console.log(fac);
    try {
        // window.location.href = 'orderhistory.html';
      const response = await fetch(`http://localhost:5000/orderHist/${fac}`);
      const jsonData = await response.json();
    //   window.location.href = 'orderhistory.html';
      setHist(jsonData);
      console.log(jsonData);
      displayHist();
    } catch (err) {
      console.log(err.message);
    }

}

const getHist = async () => {
    let result = await selectHistory;
}

const setHist = (data) => {
    hist = data;
}

if (document.URL.includes("orderhistory.html")) {
    selectHistory();
  }

const displayHist = () => {
    const orderTable = document.querySelector('#order_hist');
  
    let tableHTML = "";
    hist.map(FuelQuote => {
      tableHTML +=
        `<tr key=${FuelQuote.userid}>
        <td >${FuelQuote.orderid}</td>
        <td>${FuelQuote.gallonsreq}</td>
        <td>${FuelQuote.deliveryadd}</td>
        <td>${FuelQuote.deliverydate}</td>
        <td>${FuelQuote.suggestedprice}</td>
        <td>${FuelQuote.total}</td>
        </tr>`;
    })
    orderTable.innerHTML = tableHTML;
}




//duy
async function insertProf() {
    console.log(curUID);
    var userid = curUID;
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
    if(name.length == 0 || name.length > 50
        || add.length == 0 || add.length > 100
        || city.length == 0 || city.length > 100
        || zip.length < 5 || zip.length > 9){
        alert("Please fill all required field.");
        return false;
    }

    console.log(name);
  
    try {
    const body = {
        userid: userid,
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
  
    alert("Profile Created!");
    window.location.href = 'transition.html'
  
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