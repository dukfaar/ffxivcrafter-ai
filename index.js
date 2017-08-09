const io = require('socket.io-client')
const socket = io('https://localhost:3001')

socket.on('connect', () => {
  console.log('connected')

  socket.emit('room join', 'discordBot')
})

socket.on('disconnect', () => {
  console.log('disconnected')
})

socket.on('sent reaction', reaction => {
  console.log(reaction)
})

console.log(socket)
