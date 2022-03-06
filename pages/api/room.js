import { Server } from 'socket.io'



const RoomHandler = (req, res) => {

  var userInRooms = [];
  var AllMsg = [];

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
        //console.log("|nickname:"+msg.user+"|ID:"+socket.id+"| vuole entrare nella room "+msg.numRoom);
        if (!userInRooms.hasOwnProperty(socket.id)) {
          userInRooms[socket.id] = msg.numRoom
          console.log(userInRooms+"\n");

          socket.emit("HistoryOfRoom", "bbh");
        }

      });

      // obj: {user, room, msg }
      // Qualcuno che scrive su una room
      socket.on('new message', function (obj) {

          AllMsg.push({
            room: obj.numRoom,
            user: obj.user,
            msg:  obj.msg
          });
          console.log(AllMsg);
          io.to(obj.numRoom).emit('new message', obj);
      });

  });


}
  res.end()
}

export default RoomHandler
