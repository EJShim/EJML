var E_Manager = require('./E_Manager.js');


///WEBIX LAYOUT

/// Left Menu
//Toolbar
var l_toolBar = {view:"toolbar",
                elements:[
                  //Toggle Run Random Learning
                  {id:"ID_RUN_TRAINNING", view:"button",  value:"Run Trainning", width:100},


                  //Generate Random Object and run classification
                  {id:"ID_REFRESH", view:"button", value:"Classification(Random)", width:100}
                ]};


//Left Viewport : Visualize Original Mesh
var l_leftMenu = {id:"ID_VIEW_LEFT", view:"template"};

//Right Viewport : Visuzlize Voxelized Mesh
var l_rightMenu = {id:"ID_VIEW_RIGHT", view:"template"};

//Log Menuv
var l_logMenu = {id:"ID_LOG", view:"template", gravity:0.3};

var layout = new webix.ui({
  rows:[
    l_toolBar,
    {
      cols:[
        l_leftMenu,
        {view:"resizer"},
        l_rightMenu
      ]
    },
    {view:"resizer"},
    l_logMenu
  ]
})



//Initialize Manager
var Manager = new E_Manager();


///IO event
window.addEventListener("resize", function(){
  Manager.UpdateWindowSize();
  Manager.Redraw();
});

$$("ID_VIEW_LEFT").attachEvent("onViewResize", function(){
  Manager.UpdateWindowSize();
  Manager.Redraw();
});

$$("ID_VIEW_RIGHT").attachEvent("onViewResize", function(){
  Manager.UpdateWindowSize();
  Manager.Redraw();
});

$$("ID_LOG").attachEvent("onViewResize", function(){
  Manager.UpdateWindowSize();
  Manager.Redraw();
});



///button
$$("ID_REFRESH").attachEvent("onItemClick", function(id){
  //this.select(id);
  Manager.ClearScene();
});
