function convertMillisecondsToSeconds(time) {
    const milliseconds = parseInt(time, 10);

    if (typeof milliseconds !== 'number') {
        window.console.error('func "convertSecondsToMilliseconds" - seconds is NaN');
        return 0;
    }
    return Math.floor(milliseconds / 1000);
}

module.exports = convertMillisecondsToSeconds;