function ES_SocketManager(Mgr, server)
{
  this.Mgr = Mgr;
  this.io = require('socket.io').listen(server, {'forceNew':true });

  //Initialize
  this.Initialize();
}

ES_SocketManager.prototype.Initialize = function()
{
  this.HandleSignal();
}

ES_SocketManager.prototype.HandleSignal = function()
{

  var io = this.io;

  io.sockets.on('connection', function(socket){
    //Initialize Chat
    console.log("New Connection!!");
    console.log(socket.handshake.address);
  });

}

module.exports = ES_SocketManager;
