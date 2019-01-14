const PubSub = require('../helpers/pub_sub.js');

const ResultView = function () {

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
    const result = event.detail;
    this.displayResult(result);
  })
};

ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector('#result');
  if (result === true){
    resultElement.textContent = `Yes! it is a prime number!`;
  }
  else {
    resultElement.textContent = `No! it is not prime.`
  }
};

module.exports = ResultView;
