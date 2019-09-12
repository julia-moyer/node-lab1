const dogNames = require('dog-names');

const getADogName = (gender) => {
  const fn = gender === 'm' ? dogNames.maleRandom : dogNames.femaleRandom;
  console.log(fn());
};

getADogName('f');
