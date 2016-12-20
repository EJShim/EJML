var convnetjs = require('convnetjs');


//Machine Learning Manager
function E_MLManager(Mgr, network)
{
  this.Mgr = Mgr;


// var layer_defs = [];
// // input layer of size 1x1x2 (all volumes are 3D)
// layer_defs.push({type:'input', out_sx:20, out_sy:20, out_depth:20});
// // some fully connected layers
// layer_defs.push({type:'fc', num_neurons:20, activation:'relu'});
// layer_defs.push({type:'fc', num_neurons:20, activation:'relu'});
// // a softmax classifier predicting probabilities for two classes: 0,1
// layer_defs.push({type:'softmax', num_classes:5});

  this.network = new convnetjs.Net();
  // this.network.makeLayers(layer_defs);
  this.network.fromJSON( JSON.parse(network) );

  ///Initialize
  this.Initialize();
}

E_MLManager.prototype.Initialize = function()
{

}

E_MLManager.prototype.PutVolume = function( volume )
{
  var length = volume.data.length;
  var convVol = new convnetjs.Vol(length, length, length, 0.0);

  for(var i=0 ; i<length; i++){
    for(var j=0 ; j<length; j++){
      for(var k=0 ; k<length; k++){
        if( volume.data[i][j][k] === 1 ){
          convVol.set(i, j, k, volume.data[i][j][k]);
        }
      }
    }
  }

  ///Show Probability
  switch (volume.class) {
    case 0:
      console.log("This is a Box");
    break;
    case 1:
      console.log("This is a Cone");
    break;
    case 2:
      console.log("This is a Cylinder");
    break;
    case 3:
      console.log("This is a TorusKnot");
    break;
    case 4:
      console.log("This is a Sphere");
    break;

    default:

  }

  var probability = this.network.forward(convVol);
  console.log("Box : " + probability.w[0]);
  console.log("Cone : " + probability.w[1]);
  console.log("Cylinder : " + probability.w[2]);
  console.log("TorusKnot " + probability.w[3]);
  console.log("Sphere : " + probability.w[4]);


  //Train Data
  var trainer = new convnetjs.Trainer(this.network, {learning_rate:0.01, l2_decay:0.001});
  trainer.train(convVol, volume.class);


  ///Save Network
  var jsonNetwork = JSON.stringify( this.network.toJSON() );
  this.Mgr.SocketMgr().EmitData("SAVE_NETWORK", jsonNetwork);
}

module.exports = E_MLManager;
