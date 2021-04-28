async function insertProf() {
    var gallonsreq = document.querySelector('#gallonsreq').value;
    var deliveryadr = document.querySelector('#deliveryadr').value;
    var ddate = document.querySelector('#ddate').value;
    console.log(gallonsreq);
    /////
    var state = document.querySelector('#state').value;

    var locationFac = 0.04;
    var historyFac = 0;
    var gallonsreqFac = 0.03;
    var profitFac = 0.1;

    var currentPrice = 1.50;

    if(state == 'Texas'){
        locationFac = 0.02;
    }

    if (gallonsreq > 1000){
        gallonsreqFac = 0.02;
    }

    var margin = currentPrice * (locationFac - historyFac + gallonsreqFac + profitFac);
    ////////
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
