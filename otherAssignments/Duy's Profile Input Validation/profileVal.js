/*function testProfile(name,address1,address2,city,zipcode){
    return `${name} and ${address1} and ${address2} and ${city} and ${zipcode}`;
}*/


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




//module.exports.testProfile = testProfile;
module.exports.checkName = checkName;
module.exports.checkAddress1 = checkAddress1;
module.exports.checkAddress2 = checkAddress2;
module.exports.checkCity = checkCity;
module.exports.checkZipcode = checkZipcode;