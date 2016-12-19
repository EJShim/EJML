function E_SocketManager(Mgr)
{
  this.Mgr = Mgr;
  this.io = io();


  this.Initialize()

}

E_SocketManager.prototype.Initialize = function()
{
  this.HandleSignal();
}

E_SocketManager.prototype.HandleSignal = function()
{
  var socket = this.io;

}

module.exports = E_SocketManager;
