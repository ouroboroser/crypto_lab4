const getRandomInt = (min, max) => {
    return Math.trunc(Math.random() * (max - min) + min);
};

module.exports = {
    getRandomInt
}