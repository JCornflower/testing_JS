const convertSecondsToMilliseconds = require('./third');

test('if it a function', () =>{
    expect(typeof(convertSecondsToMilliseconds)).toBe('function');
});

test('its not a number', () =>{
    expect(convertSecondsToMilliseconds('no')).toBe(NaN);
});