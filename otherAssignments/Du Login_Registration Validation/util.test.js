//install jest = npm install --save-dev jest
//make sure package.json contain this in script "test": "jest"
//make sure your js file name contain .test or .spec (i use .test)
//that's all, now just run npm test in terminal and it should work

const { expect } = require("@jest/globals");
const {testLogin, validateUser, checkPwd} = require("./util.js");


test('should output username and password', () =>{
    const text = testLogin('user','password');
    expect(text).toBe('user and password');

    const text1 = testLogin('help', 'longer');
    expect(text1).toBe('help and longer');
})

test('should output no username or no password', () =>{
    const text = testLogin('user',null);
    expect(text).toBe('user and null');

    const text1 = testLogin(null,'password');
    expect(text1).toBe('null and password');
})

test('check username to make sure it contain at least 4 characters', () =>{
    const text = validateUser('user');
    expect(text).toBe(true);

    const text1 = validateUser('uasdfafgsdgsdgser');
    expect(text1).toBe(true);
})

test('check username to make sure it outside of requirement', () =>{
    const text = validateUser('use');
    expect(text).toBe(false);

    const text1 = validateUser('uasdfafgsdsdfsdfsdfsdfgsdgser');
    expect(text1).toBe(false);
})
describe("Something", () => {
test('check password requirement', () =>{
    const text = checkPwd('pass');
    expect(text).toBe('too_short');

    const text1 = checkPwd('password');
    expect(text1).toBe('no_num');

    const text2 = checkPwd('password1');
    expect(text2).toBe('ok');

    const text3 = checkPwd('123');
    expect(text3).toBe('too_short');

    const text4 = checkPwd('1234567');
    expect(text4).toBe('no_letter');

    const text5 = checkPwd('142DE');
    expect(text5).toBe('too_short');

    const text6 = checkPwd('!trigger1');
    expect(text6).toBe('ok');

    const text7 = checkPwd('uasdfafgsdsdfsdfsdfsdfgsdgser!fsdgs465sdf4sdfsdfsd1f3sd4fsdf4sd6f4sd6f4sd3f1sd3f1sf4e1f3sd1f6e54fse61fsd3');
    expect(text7).toBe('too_long');

    const text8 = checkPwd('142DEE');
    expect(text8).toBe('ok');
    });
});