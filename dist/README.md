# Thai National ID CARD
## Usage
thaiIdCard.verify(id)

## Installation

``` bash
$ npm install thai-id-card
```

### Javascipt 
``` javascript
var thaiIdCard = require('thai-id-card') // for ES5
or
import thaiIdCard from 'thai-id-card'; // for ES6
```

### USAGE
``` javascript
var result = thaiIdCard.verify(‘1101700207030’);
// return true
```

## Test
You can edit validator.test.js too add your custom test case.

| Test Cases    | Result
| ------------- |:-------------:|
| 1112034563562 | ✅ |
| 1101700230705 | ❌ |
| 110170023073  | ❌ |
| 11017002070d3 | ❌ |
| rytege54fsfsf | ❌ |
| 0             | ❌ |
| '-'           | ❌ |
| ''            | ❌ |
| null          | ❌ |
| 'blablabla'   | ❌ |

`(Tested with Jest)`