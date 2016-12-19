var convnetjs = require('convnetjs');


//Machine Learning Manager
function E_MLManager(Mgr)
{
  this.Mgr = Mgr;



  ///Initialize
  this.Initialize();

}

E_MLManager.prototype.Initialize = function()
{
  var vol3d = new convnetjs.Vol(3, 3, 3 ,0.0);

  console.log(vol3d);

}

module.exports = E_MLManager;
