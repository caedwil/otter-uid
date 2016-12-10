// Generates a pseudo-random number between min (inclusive) and max
// (exclusive).
// min {int} the lower inclusive bound
// max {int} the upper exclusive bound
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

module.exports = {
  int: randomInteger
}
