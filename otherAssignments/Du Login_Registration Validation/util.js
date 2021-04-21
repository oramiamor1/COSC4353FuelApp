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

module.exports.checkPwd = checkPwd;
module.exports.testLogin = testLogin;
module.exports.validateUser = validateUser;
