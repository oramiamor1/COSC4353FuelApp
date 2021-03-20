
const { expect } = require("@jest/globals");
const {checkGalreq, checkDate, validateDate} = require("./util.js");


describe("Gallons Requested requirement", () => {
test('check Gallons Requested requirement', () =>{
    const galreq = checkGalreq('');
    expect(galreq).toBe('no_request');

    const galreq2 = checkGalreq('12968347321649087236412389074631249031276423112321946213421348912346213489231462314867123409213846');
    expect(galreq2).toBe('too_long');

    const galreq3 = checkGalreq('123');
    expect(galreq3).toBe('ok');
    });
});

describe("date requirement", () => {
test('check date requirement', () =>{
    const date1 = checkDate('');
    expect(date1).toBe('no_date');

    const date2 = checkDate('2022-03-10T02:00:00Z');
    expect(date2).toBe('ok');
    });
});

describe("Validate Date", () => {
test('check valid date', () =>{

    const date1 = new Date('2013-03-10T02:00:00Z');
    expect(validateDate(date1)).toBe(false);

    const date2 = validateDate('2022-03-10T02:00:00Z');
    expect(date2).toBe(true);
    });
});
