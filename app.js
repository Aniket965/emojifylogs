/**
 * map icon to Given Type
 * @param {string} type 
 * @param {*} emojiDefault 
 * @param {*} emojiInfo 
 * @param {*} emojiError 
 * @param {*} emojiWarn 
 */
function setEmoji(type,emojiDefault, emojiInfo, emojiError, emojiWarn) {
  let icon = emojiDefault
  switch (type) {
    case 'info':
      icon = emojiInfo
      break
    case 'error':
      icon = emojiError
      break
    case 'warn':
      icon = emojiWarn
      break
    default:
  }
  return icon
}
/**
 * type is passed to log function,
 * this functions Removes type from msg array
 * @param {[*]} msg 
 * @param {string} type 
 */
function removeTypeFromMessage(msg,type) {
  if (['error', 'info', 'warn'].indexOf(type) === -1) {
    msg.unshift(type)
  }
  return msg
}
// Default Logger
function log(type = '', ...msg) {
  let icon = setEmoji(type,'❤️ ', '📄 ', '👾 ', '⚠️ ')
  msg = removeTypeFromMessage(msg,type)
  console.log(`${icon} ${msg.join(' ')}`)
}

//Dogs Emoji  Logger
function Doglogger(type = '', ...msg) {
  let icon =  setEmoji(type,'🐶 ','🐩 ','🐕 ','🐩 🐕 ')
  msg =removeTypeFromMessage(msg,type)
  console.log(`${icon} ${msg.join(' ')}`)
}

//Cats Emoji Logger
function Catlogger(type = '', ...msg) {
  let icon = setEmoji(type,'😻 ', '🙀 ', '😾 ', '😿 ')
  msg = removeTypeFromMessage(msg,type)
  console.log(`${icon} ${msg.join(' ')}`)
}

//Human Logger
function Humanlogger(type = '', ...msg) {
  let icon = setEmoji(type,'😍 ', '🤓 ', '😡 ', '😒 ')
  msg = removeTypeFromMessage(msg,type)
  console.log(`${icon} ${msg.join(' ')}`)
}
/**
 * Registers the type to log functions
 */
['error', 'info', 'warn'].forEach(type => {
  log[type] = (...msg) => log(type, ...msg)
  Doglogger[type] = (...msg) => Doglogger(type, ...msg)
  Catlogger[type] = (...msg) => Catlogger(type, ...msg)
  Humanlogger[type] = (...msg) => Humanlogger(type, ...msg)
})

module.exports = {
  log,
  Doglogger,
  Catlogger,
  Humanlogger
}
