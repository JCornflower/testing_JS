function convertSecondsToMilliseconds(time) {
    const seconds = parseInt(time, 10);

    if (typeof seconds !== 'number') {
        window.console.error('func "convertSecondsToMilliseconds" - seconds is NaN');
        return NaN;
    }
    return Math.floor(seconds * 1000);
}

module.exports = convertSecondsToMilliseconds;