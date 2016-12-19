var E_SocketManager = require('./E_SocketManager.js');

function E_Manager()
{

  var m_socketMgr = new E_SocketManager(this);
  this.SocketMgr = function()
  {
    return m_socketMgr;
  }



  //Initialize clientt
  this.Initialize();

}

E_Manager.prototype.Initialize = function()
{
  console.log("initialized");
}

module.exports = E_Manager;
