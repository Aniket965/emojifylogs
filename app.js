// Default Logger
function log (type = '', ...msg) {
  let icon = '😍 '
  switch (type) {
    case 'info':
      icon = '🤓 '
      break
    case 'error':
      icon = '😡 '
      break
    case 'warn':
      icon = '😒 '
      break
    default:
  }

  if (['error', 'info', 'warn'].indexOf(type) === -1) {
    msg.unshift(type)
  }
  console.log(`${icon} ${msg.join(' ')}`)
}

//Dogs Emoji  Logger
function Doglogger (type = '', ...msg) {
  let icon = '🐶 '
  switch (type) {
    case 'info':
      icon = '🐩 '
      break
    case 'error':
      icon = '🐕 '
      break
    case 'warn':
      icon = '🐩 🐕 '
      break
    default:
  }

  if (['error', 'info', 'warn'].indexOf(type) === -1) {
    msg.unshift(type)
  }
  console.log(`${icon} ${msg.join(' ')}`)
}

//Cats Emoji Logger
function Catlogger (type = '', ...msg) {
  let icon = '😻 '
  switch (type) {
    case 'info':
      icon = '🙀 '
      break
    case 'error':
      icon = '😾 '
      break
    case 'warn':
      icon = '😿 '
      break
    default:
  }

  if (['error', 'info', 'warn'].indexOf(type) === -1) {
    msg.unshift(type)
  }
  console.log(`${icon} ${msg.join(' ')}`)
}

['error', 'info', 'warn'].forEach(type => {
  log[type] = (...msg) => log(type, ...msg)
  Doglogger[type] = (...msg) => Doglogger(type, ...msg)
  Catlogger[type] = (...msg) => Catlogger(type, ...msg)
})

module.exports = {
  log,
  Doglogger,
  Catlogger
}
