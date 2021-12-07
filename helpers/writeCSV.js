const createCsvWriter = require('csv-writer').createArrayCsvWriter;

const resultFileName = {
    bcrypt: './result/bcrypt2.csv',
    md5: './result/md52.csv'
}

const writeCSV = (records, fileName) => {
    const csvWriter = createCsvWriter({
        path: fileName,
    });

    csvWriter.writeRecords(records)
    .then(() => {
        console.log('...Done');
    });
};

module.exports = {
    writeCSV,
    resultFileName
}