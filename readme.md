Used for generating random "unique" identifiers using the character space of
[A-Za-z0-9]. This gives a total unique space of 62^*n* where *n* is the length
of the identifier.

#### Example Usage
```javascript
const uid = require('otter-uid');

// Generate a single UID of the default length (5).
var uid5 = uid();

// Generate a single UID of a set length (7).
var uid7 = uid(7);
var uid7 = uid({ length: 7 });

// Generate a list of 100 UIDs of default length (5). Duplicates are
// not allowed.
var uid100_5 = uid({ count: 100 });

// Generate a list of 100 UIDs of length 7. Duplicates are allowed.
var uid100_7 = uid(7, { count: 100, allowDuplicates: true });
var uid100_7 = uid({ length: 7, count: 100, allowDuplicates: true });
```

#### Links
