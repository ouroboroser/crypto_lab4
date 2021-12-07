const bcrypt = require('bcrypt');
const md5 = require('md5');

const { readFile, writeCSV, getRandomInt, resultFileName } = require('./helpers');
const { Password, generateHumanPassword } = require('./password');

const { 
    MILLION_POPULAR_PASSWORD, 
    HUNDRED_POPULAR_PASSWORD, 
    HUMAM_PASSWORD, NUMBER_OF_PASSWORDS, 
    PASSWORD_LENGTH, 
    NOUNS, 
    ADJECTIVES, 
    NAMES, 
    MILLION_PASSWORD, 
    HUNDRED_PASSWORD, 
    MIN_PASSWORD_LENGTH 
} = require('./options');

const nouns = readFile(NOUNS);
const adjectives = readFile(ADJECTIVES);
const names = readFile(NAMES);
const millionpasswords = readFile(MILLION_PASSWORD);
const hundredpasswords = readFile(HUNDRED_PASSWORD);

const recordsBcrypt = [];
const recordsMd5 = [];

const passLenght = getRandomInt(MIN_PASSWORD_LENGTH, PASSWORD_LENGTH);
const pass = new Password(passLenght, [], nouns, adjectives, names);

for (let i = 0; i < NUMBER_OF_PASSWORDS; i ++) {
    console.log(i);
    const salt = getRandomInt(5, 8);
    console.log('salt: ', salt);
    
    if (0 < i && i <= NUMBER_OF_PASSWORDS * MILLION_POPULAR_PASSWORD) {
        const password = millionpasswords[i];

        recordsBcrypt.push([bcrypt.hashSync(password, salt)]);
        recordsMd5.push([md5(password)]);
    };

    if (i > NUMBER_OF_PASSWORDS * MILLION_POPULAR_PASSWORD && i <= NUMBER_OF_PASSWORDS * HUMAM_PASSWORD) {
        const password = generateHumanPassword(nouns, adjectives, names);

        recordsBcrypt.push([bcrypt.hashSync(password, salt)]);
        recordsMd5.push([md5(password)]);
    };

    if (i > NUMBER_OF_PASSWORDS * HUMAM_PASSWORD && i <= NUMBER_OF_PASSWORDS * HUNDRED_POPULAR_PASSWORD) {
        const getTopHundredpasswords = getRandomInt(1, 100);
        const password = hundredpasswords[getTopHundredpasswords];

        recordsBcrypt.push([bcrypt.hashSync(password, salt)]);
        recordsMd5.push([md5(password)]);
    };

    if (i > NUMBER_OF_PASSWORDS * HUNDRED_POPULAR_PASSWORD && i <= NUMBER_OF_PASSWORDS * 1) {
        const password = pass.reallyRandom();

        recordsBcrypt.push([bcrypt.hashSync(password, salt)]);
        recordsMd5.push([md5(password)]);
    };
};

writeCSV(recordsBcrypt, resultFileName.bcrypt);
writeCSV(recordsMd5, resultFileName.md5);