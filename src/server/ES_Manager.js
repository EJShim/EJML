var express = require("express");

function ES_Manager()
{
  //Initialize Server.set('views', __dirname + '/../views');
  this.app = express();
  this.server = null;





  ////Initialize
  this.Initialize();
  this.InitRouter();
}

ES_Manager.prototype.Initialize = function()
{
  this.app.set('view engine', 'ejs');
  this.app.engine('html', require('ejs').renderFile);
  this.app.use(express.static('public'));

  var port = process.env.PORT || 8080;

  //Create Server
  this.server = require('http').createServer(this.app);

  //Open Server
  this.server.listen(port, function(){
    console.log("server opened : " + port);
  });
}

ES_Manager.prototype.InitRouter = function()
{
  //Init Router
  this.app.get('/',function(req,res){
    res.render('index.html')
  });
}

module.exports = ES_Manager;
