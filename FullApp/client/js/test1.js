function checkGallonReq(num){
    uid = num;
    if(uid > 0){
        return true;
    }
    else{
        return false;
    }
}

function testLogin(user,pass){
    return `${user} and ${pass}`;
}

function validateUser(user){
    if(user.length < 4 || user.length > 20){
        return false;
    }
    else{
        return true;
    }
}

function checkPwd(str) {
    if (str.length < 6) {
        return("too_short");
    } else if (str.length > 50) {
        return("too_long");
    } else if (str.search(/\d/) == -1) {
        return("no_num");
    } else if (str.search(/[a-zA-Z]/) == -1) {
        return("no_letter");
    } else if (str.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/) != -1) {
        return("bad_char");
    }
    return("ok");
}

function checkName(name) {
    if (name.length == 0) {
        return("no_name");
    } 
    else if (name.length > 50) {
        return("too_long");
    } 
    return("ok");
}

function checkAddress1(address1){
    if (address1.length == 0) {
        return("no_address1");
    } 
    else if (address1.length > 100) {
        return("too_long");
    } 
    return("ok");
}

function checkAddress2(address2){
    if (address2.length == 0) {
        return("no_address2");
    } 
    else if (address2.length > 100) {
        return("too_long");
    } 
    return("ok");
}

function checkCity(city){
    if (city.length == 0) {
        return("no_city");
    } 
    else if (city.length > 100) {
        return("too_long");
    } 
    return("ok");
}

function checkZipcode(zipcode){
    if (zipcode.length < 5) {
        return("too_short");
    } 
    else if (zipcode.length > 9) {
        return("too_long");
    } 
    return("ok");
}

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


module.exports.checkGallonReq = checkGallonReq;
module.exports.checkPwd = checkPwd;
module.exports.testLogin = testLogin;
module.exports.validateUser = validateUser;

module.exports.checkName = checkName;
module.exports.checkAddress1 = checkAddress1;
module.exports.checkAddress2 = checkAddress2;
module.exports.checkCity = checkCity;
module.exports.checkZipcode = checkZipcode;

module.exports.checkGalreq = checkGalreq;
module.exports.checkDate = checkDate;
module.exports.validateDate = validateDate;
