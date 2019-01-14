const PubSub = require('../helpers/pub_sub.js');

const FormView = function () {

};

FormView.prototype.bindEvents = function () {
  // hook into html
  const form = document.querySelector('#prime-checker-form');

  // listen for input and store inputted information
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputtedNumber = event.target.number.value;

    // publish
    PubSub.publish('FormView:text-submitted', inputtedNumber);
  })
};

module.exports = FormView;
