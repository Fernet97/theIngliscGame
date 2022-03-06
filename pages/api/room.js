import { Server } from 'socket.io'



const RoomHandler = (req, res) => {

  if (res.socket.server.io) {
    console.log('Socket is already running')
  } else {
    console.log('Socket is initializing')
    const io = new Server(res.socket.server)
    res.socket.server.io = io


  io.on('connection', socket => {
      console.log("Un nuovo utente si è connesso.");

      socket.on('joinRoom',  msg => {
        socket.join(msg.numRoom);
        console.log("|nickname:"+msg.user+"|ID:"+socket.id+"| vuole entrare nella room "+msg.numRoom);
      });

      socket.on('chat message', function ({msg, room}) {
          console.log(msg + " della room "+room);
          io.to(room).emit('chat message', msg);
      });

  });


}
  res.end()
}

export default RoomHandler
