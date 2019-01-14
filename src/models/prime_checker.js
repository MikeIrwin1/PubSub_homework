const PubSub = require('../helpers/pub_sub.js');

const PrimeChecker = function () {

}

PrimeChecker.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:text-submitted', (event) => {
    const inputtedNumber = event.detail;
    const isNumberPrime = this.isNumberPrime(inputtedNumber);
    PubSub.publish('PrimeChecker:result-calculated', isNumberPrime);
  })
};

PrimeChecker.prototype.isNumberPrime = function (number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return false;
    }
  }
  return true;
};
module.exports = PrimeChecker;
