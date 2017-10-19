var log = require('./app').log
var Doglogger = require('./app').Doglogger
var Catlogger = require('./app').Catlogger
log("hahaha")
log.info("Awesome")
log.error("check your grammer")
log.warn('agli baar s nhi bolunga this lgne k liye')

Catlogger("hahaha")
Catlogger.info("Awesome")
Catlogger.error("check your grammer")
Catlogger.warn('agli baar s nhi bolunga this lgne k liye')

Doglogger("hahaha")
Doglogger.info("Awesome")
Doglogger.error("check your grammer")
Doglogger.warn('agli baar s nhi bolunga this lgne k liye')
