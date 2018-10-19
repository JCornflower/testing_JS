const convertSecondsToMilliseconds = require('./third');

test('if it a function', () =>{
    expect(typeof(convertSecondsToMilliseconds)).toBe('function');
});

test('its not a number', () =>{
    expect(convertSecondsToMilliseconds('no')).toBe(NaN);
});

test('its empty', () =>{
    expect(convertSecondsToMilliseconds('')).toBe(NaN);
});

test('its seconds to milliseconds', () =>{
    expect(convertSecondsToMilliseconds('25')).toBe(25000);
});