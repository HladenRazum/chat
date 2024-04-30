const io = require('socket.io')(3000, {
  cors: {
    origin: 'http://localhost:5173',
  },
})

io.on('connection', (socket) => {
  const currentTime = new Date().toISOString()
  console.log(`user ${socket.id} connected - ${currentTime}`)

  socket.on('disconnect', () => {
    console.log(`user ${socket.id} disconnected`)
  })
})
