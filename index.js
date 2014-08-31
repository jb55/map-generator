'use strict'

var isGeneratorFunction = require('is-generator-function');

module.exports = function*(gen, fn) {
  gen = isGeneratorFunction(gen)? gen() : gen;
  for (let x of gen) {
    yield fn(x);
  }
}
