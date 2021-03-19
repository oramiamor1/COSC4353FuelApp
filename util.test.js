//install jest = npm install --save-dev jest
//make sure package.json contain this in script "test": "jest"
//make sure your js file name contain .test or .spec (i use .test)
//that's all, now just run npm test in terminal and it should work

const { expect } = require("@jest/globals");

function testLogin(user,pass){
    return `${user} and ${pass}`;
}

function validateUser(user,pass){
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


test('should output username and password', () =>{
    const text = testLogin('user','password');
    expect(text).toBe('user and password');

    const text1 = testLogin('help', 'longer');
    expect(text1).toBe('help and longer');
})

test('should output username and no password', () =>{
    const text = testLogin('user',null);
    expect(text).toBe('user and null');
})

