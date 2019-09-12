'use strict';

var dogNames = require('dog-names');

var getADogName = function getADogName(gender) {
  var fn = gender === 'm' ? dogNames.maleRandom : dogNames.femaleRandom;
  console.log(fn());
};

getADogName('f');
