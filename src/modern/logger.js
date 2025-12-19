// NEW WAY
const log = (msg) => {
    console.log(`[MODERN] ${new Date().toISOString()}: ${msg}`);
};
module.exports = log;