# Thai National ID CARD
Verify , Generate

## Installation
``` bash
$ npm install thai-id-card
```

### Javascipt 
``` typescript
const thaiIdCard = require('thai-id-card') // for ES5
or
import thaiIdCard from 'thai-id-card'; // for ES6
```

## Usage
``` typescript
const result = thaiIdCard.verify(‘1101700207030’);
// return true

const id = thaiIdCard.generate();
// return id
```

## Demo
```
https://repl.it/@tanjaae/thai-id-card
```
