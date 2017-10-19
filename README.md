# emojifylogs [NPM]('https://www.npmjs.com/package/emojifylogs)
Convert basic logs into more intresting Log using Emoji logs.
it Contains different type of loggers you can choose your type or suggest for more Loggers
## Definations
```javascript

var log = require('emojifylogs').log
var Doglogger = require('emojifylogs').Doglogger
var Catlogger = require('emojifylogs').Catlogger
```

## Usage
```javascript
log('Lol')
log.info('Awesome info')
log.error('Awesome Error')
log.warn('Awesome Warn')
/* Logs =>
😍  Lol
🤓  Awesome info
😡  Awesome Error
😒  Awesome War
*/
```