module.exports = exports = () => 'This is a "constructor"';
exports.method = () => 'this is a test function';
exports.error = () => { throw new Error('this is an error'); };
exports.exit = (code) => { process.exit(code); }
exports.signal = (sig) => { process.kill(process.pid, sig); }
