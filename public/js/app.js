(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./E_SocketManager.js":2}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
var E_Manager = require('./E_Manager.js');

var Manager = new E_Manager();

},{"./E_Manager.js":1}]},{},[3]);
