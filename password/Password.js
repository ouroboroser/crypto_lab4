const { getRandomInt } = require('../helpers/getRandomInt');

class Password {

    constructor(length, passwordCreationResult, nouns, adjectives, names) {
        this.length = length;
        this.passwordCreationResult = passwordCreationResult;
        this.nouns = nouns;
        this.adjectives = adjectives;
        this.names = names;
    };

    nounsWithNouns() {
        const first = getRandomInt(1,1206);
        const second = getRandomInt(1,1206);

        return this.nouns[first] + this.nouns[second];
    }

    adjectivesWithAdjectives() {
        const first = getRandomInt(1,1310);
        const second = getRandomInt(1,1310);

        return this.adjectives[first] + this.adjectives[second];
    }

    nounsWithAdjectives() {
        const first = getRandomInt(1, 1206);
        const second = getRandomInt(1, 1310);

        return this.nouns[first] + this.adjectives[second];
    }

    adjectivesWithNouns() {
        const first = getRandomInt(1, 1206);
        const second = getRandomInt(1, 1310);

        return this.nouns[second] + this.adjectives[first];
    }

    simplePasswordBasedOnSequence() {
        
        for (let i = 1; i < this.length; i ++) {
            this.passwordCreationResult.push(i);
        };

        return this.passwordCreationResult.join('');
    };

    simplePasswordBasedOnSequenceReverse() {
        
        for (let i = 1; i < this.length; i ++) {
            this.passwordCreationResult += i;
        };
        
        return this.passwordCreationResult.split('').reverse().join('');
    };

    simpleNames() {
        const first = getRandomInt(1, 195);

        return (this.names[first] + this.names[first]).replace(/\s/g, "");
    };

    reallyRandom() {
        const englishAlphabet = ['0', 
        '1', '2', '3', '4', '5', '6', 
        '7', '8', '9', 'A', 'B', 'C',
        'D', 'E', 'F', 'G', 'H', 'I', 
        'J', 'K', 'L', 'M', 'N', 'O', 
        'P', 'Q', 'R', 'S', 'T', 'U', 
        'V', 'W', 'X', 'Y', 'Z', 'a',
        'b', 'c', 'd', 'e', 'f', 'g', 
        'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 't',
        'u', 'v', 'w', 'x', 'y', 'z'];

        const symbols = ['!', '@', '#', '$', '%', '^', '&', '*'];

        let password =  '';

        for (let i = 0; i < this.length; i ++) {
            let getLetterByIndex = getRandomInt(1, 61);
            let getSymbolByIndex = getRandomInt(1, 8);

            password = password + englishAlphabet[getLetterByIndex] + symbols[getSymbolByIndex];
        };

        return password;
    };
};

module.exports = {
    Password
}