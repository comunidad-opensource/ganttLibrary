import socketIOClient from 'socket.io-client'

const API = 'http://localhost:4000'
const socket = socketIOClient(API)

export const emit = (uri, data) => {
  socket.emit(uri, data)
}

export const on = (uri, callback) => {
  socket.on(uri, async (data) => {
    callback(data)
  })
}
