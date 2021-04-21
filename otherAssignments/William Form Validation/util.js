function checkGalreq(gallonsreq) {
    if (gallonsreq.length == 0) {
        return("no_request");
    }
    else if (gallonsreq.length > 50) {
        return("too_long");
    }
    return("ok");
}

function checkDate(ddate){
  if ((ddate.length == 0) || ddate == null){
    return("no_date");
  }
  return("ok");
}

function validateDate(ddate){
  let today = new Date();
  if((ddate - today)<0){
    return false;
  }
  else{
    return true;
  }
}

module.exports.checkGalreq = checkGalreq;
module.exports.checkDate = checkDate;
module.exports.validateDate = validateDate;
