const fs = require('fs');

const readFile = (filename) => {
    const text = fs.readFileSync(filename, 'utf-8' , (err, data) => {
        if (err) {
            console.error(err);
        };
        return data;
    });

    const arrayOfWords = text.split('\n');

    return arrayOfWords;
};

module.exports = {
    readFile
};