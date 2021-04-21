const { expect } = require("@jest/globals");
const {checkName, checkAddress1, checkAddress2, checkCity, checkZipcode} = require("./profileVal.js");


/*test('should output name, address1, address2, city and zipcode', () =>{
    const text = testProfile('name','address','address2','city','zipcode');
    expect(text).toBe('name and address1 and address2 and city and zipcode');
});*/

describe("Name requirement", () => {
test('check name requirement', () =>{
    const name1 = checkName('');
    expect(name1).toBe('no_name');

    const name2 = checkName('uasdfafgsdsdfsdfsdfsdfgsdgser!fsdgs465sdf4sdfsdfsd1f3sd4fsdf4sd6f4sd6f4sd3f1sd3f1sf4e1f3sd1f');
    expect(name2).toBe('too_long');

    const name3 = checkName('Joe Doe');
    expect(name3).toBe('ok');
    });
});

describe("Address1 requirement", () => {
test('check address1 requirement', () =>{
    const address11 = checkAddress1('');
    expect(address11).toBe('no_address1');
    
    const address12 = checkAddress1('uasdfafgsdsdfsdfsdfsdfgsdgser!fsdgs465sdf4sdfsdfsd1f3sd4fsdf4sd6f4sd6f4sd3f1sd3f1sf4e1f3sd1f6e54fse61fsd3uasdfafgsdsdfsdfsdfsdfgsdgser!fsdgs465sdf4sdfsdfsd1f3sd4fsdf4sd6f4sd6f4sd3f1sd3f1sf4e1f3sd1f6e54fse61fsd3dasdsadf3');
    expect(address12).toBe('too_long');
    
    const address13 = checkName('1234 Lake View Dr');
    expect(address13).toBe('ok');
    });
});

describe("Address2 requirement", () => {
test('check address2 requirement', () =>{
    const address21 = checkAddress2('');
    expect(address21).toBe('no_address2');
        
    const address22 = checkAddress2('uasdfafgsdsdfsdfsdfsdfgsdgser!fsdgs465sdf4sdfsdfsd1f3sd4fsdf4sd6f4sd6f4sd3f1sd3f1sf4e1f3sd1f6e54fse61fsd3uasdfafgsdsdfsdfsdfsdfgsdgser!fsdgs465sdf4sdfsdfsd1f3sd4fsdf4sd6f4sd6f4sd3f1sd3f1sf4e1f3sd1f6e54fse61fsd3dasdsadf3');
    expect(address22).toBe('too_long');
        
    const address23 = checkAddress2('1234 Lake View Dr');
    expect(address23).toBe('ok');
    });
});

describe("City requirement", () => {
test('check city requirement', () =>{
    const city1 = checkCity('');
    expect(city1).toBe('no_city');
            
    const city2 = checkCity('uasdfafgsdsdfsdfsdfsdfgsdgser!fsdgs465sdf4sdfsdfsd1f3sd4fsdf4sd6f4sd6f4sd3f1sd3f1sf4e1f3sd1f6e54fse61fsd3uasdfafgsdsdfsdfsdfsdfgsdgser!fsdgs465sdf4sdfsdfsd1f3sd4fsdf4sd6f4sd6f4sd3f1sd3f1sf4e1f3sd1f6e54fse61fsd3dasdsadf3');
    expect(city2).toBe('too_long');
            
    const city3 = checkCity('Houston');
    expect(city3).toBe('ok');
    });
});

describe("Zipcode requirement", () => {
    test('check zipcode requirement', () =>{
        const zip1 = checkZipcode('12');
        expect(zip1).toBe('too_short');
                
        const zip2 = checkZipcode('129374238122');
        expect(zip2).toBe('too_long');

        const zip3 = checkZipcode('77023');
        expect(zip3).toBe('ok');
        });
    });