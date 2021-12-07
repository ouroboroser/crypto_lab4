const { readFile } = require('./readFile');
const { writeCSV } = require('./writeCSV.js');
const { getRandomInt } = require('./getRandomInt');
const { resultFileName } = require('./writeCSV');

module.exports = {
    readFile,
    writeCSV,
    getRandomInt,
    resultFileName
}