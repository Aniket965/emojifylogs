# emojifylogs 🐬
[NPM](https://www.npmjs.com/package/emojifylogs)
Convert basic logs into more intresting Log using Emoji logs.
it Contains different type of loggers you can choose your type or suggest for more Loggers

## Installation
```
npm install emojifylogs
```
## Definations
```javascript

const log = require('emojifylogs').log
const Doglogger = require('emojifylogs').Doglogger
const Catlogger = require('emojifylogs').Catlogger
const Humanlogger = require('emojifylogs').Humanlogger
```

## Usage
```javascript
log('Lol')
log.info('Awesome info')
log.error('Awesome Error')
log.warn('Awesome Warn')
/* Log =>
❤️  Lol
📄  Awesome info
👾  Awesome Error
⚠️  Awesome Warn
*/
```
 😷 🤒 🤕 😈 👿 👹 👺 💩 👻
