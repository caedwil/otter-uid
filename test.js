const uid = require('./index');

// Generate a bunch of UIDs.
let uids0 = uid(5);
let uids1 = uid(5, { count: 5 });
let uids2 = uid(5, { count: 5, allowDuplicates: true });
let uids3 = uid({ length: 7 });
let uids4 = uid({ length: 7, count: 5 });
let uids5 = uid({ length: 7, count: 5, allowDuplicates: true });
let uids6 = uid({ count: 5 });

console.log(uids0);
console.log(uids1);
console.log(uids2);
console.log(uids3);
console.log(uids4);
console.log(uids5);
console.log(uids6);
