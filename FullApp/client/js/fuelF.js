async function insertProf() {
    var gallonsreq = document.querySelector('#gallonsreq').value;
    var deliveryadr = document.querySelector('#deliveryadr').value;
    var ddate = document.querySelector('#ddate').value;
    console.log(gallonsreq);
  
    try {
    const body = {
        gallonsreq: gallonsreq, 
        deliveryadr: deliveryadr,
        ddate: ddate,
    };

    const response = await fetch(`http://localhost:5000/fuelform`, {
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
