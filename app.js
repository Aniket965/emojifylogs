function log (type = '', ...msg) {
  let icon = '😍 😘 '
  switch (type) {
    case 'info':
      icon = '🤓 😎 '
      break
    case 'error':
      icon = '😈 😡 '
      break
    case 'warn':
      icon = '😑 😒 '
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
})

module.exports = {
  log
}