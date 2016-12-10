const rand = require('./lib/rand');

// The character space used when generating identifiers [A-Za-z0-9].
let characters = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789';

// Generates a single identifier or list of identifiers of the
// specified length using the character space [A-Za-z0-9].
// length                  {int} the length of each identifier
// options.count           {int} optional, the number of identifiers
//                         to generate
// options.allowDuplicates {bool} optional, whether or not to allow
//                         duplicates when generating a list, defaults
//                         to false
function generate(length = 5, options = {}) {
  if (typeof length !== 'number') {
    options = length;
    options.length = options.length || 5;
  } else {
    options.length = length;
  }
  if (options.count === undefined) return generateUID(options.length);
  options.allowDuplicates = options.allowDuplicates || false;
  return generateUIDList(options.length, options.count, options.allowDuplicates);
}

// Generates a random "unique" identifier of the specified length using
// the character space [A-Za-z0-9].
// length   {int} the length of the identifier sequence
function generateUID(length) {
  let sequence = '';
  for (let i = 0; i < length; i++) {
    sequence += characters[rand.int(0, characters.length)];
  }
  return sequence;
}

// Generates a list (of length count) of random "unique" identifiers of
// the specified length using the character space [A-Za-z0-9]. If
// allowDuplicates is set to false, any duplicates will be regenerated.
// length           {int} the length of each identifier sequence
// count            {int} the number of identifiers to generate
// allowDuplicates  {bool} whether or not to allow duplicates in the
//                  resulting list
function generateUIDList(length, count, allowDuplicates) {
  // Generate list of identifier sequences.
  let list = [];
  for (let i = 0; i < count; i++) {
    list.push(generateUID(length));
  }
  // Regenerate any duplicate identifiers if allowDuplicates is false.
  if (!allowDuplicates) {
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        if (list[i] === list[j] && i !== j) {
          list[i--] = generateUID(length);
          break;
        }
      }
    }
  }
  // Finish up.
  return list;
}

module.exports = generate;
