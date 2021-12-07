const { Password } = require('./Password');
const { getRandomInt } = require('../helpers');
const { PASSWORD_LENGTH } = require('../options/passwordProperties');

const generateHumanPassword = (nouns, adjectives, names) => {
    const takePasswordMethod = getRandomInt(1, 8);

    const password = new Password(PASSWORD_LENGTH, [], nouns, adjectives, names);

    switch(takePasswordMethod) {
        case(1):
            return password.nounsWithNouns();

        case(2):
            return password.adjectivesWithAdjectives();
        
        case(3):
            return password.nounsWithAdjectives();

        case(4):
            return password.adjectivesWithNouns();

        case(5):
            return password.simplePasswordBasedOnSequence();

        case(6):
            return password.simplePasswordBasedOnSequenceReverse();

        case(7):
            return password.simpleNames();

        default:
            return password.reallyRandom();
    };
};

module.exports = {
    generateHumanPassword
}