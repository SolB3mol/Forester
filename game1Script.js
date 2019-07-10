
{var treeStage = new Array();

treeStage[1] = new Image();
treeStage[1].src = 'tree1.png';
treeStage[2] = new Image();
treeStage[2].src = 'tree2.png';
treeStage[3] = new Image();
treeStage[3].src = 'tree3.png';
treeStage[4] = new Image();
treeStage[4].src = 'tree4.png';}
{
  var money = 1000;
  function tree(stage,water,value) {
    this.stage=stage;
    this.water=water;
    this.value=value;
  }

  var size={
    tree1x:0.03229166666*window.innerWidth,
    tree1y:0.03302373581*window.innerHeight,
    tree2x:0.06927083333*window.innerWidth,
    tree2y:0.07946336429*window.innerHeight,
    tree3x:0.09114583333*window.innerWidth,
    tree3y:0.11971104231*window.innerHeight,
    tree4x:0.115625*window.innerWidth,
    tree4y:0.14138286893*window.innerHeight

  }
  var locate={
      tree11x:0.07291666666*window.innerWidth,
      tree11y:0.13519091847*window.innerHeight,
      tree12x:0.2375*window.innerWidth,
      tree12y:0.13519091847*window.innerHeight,
      tree13x:0.40260416666*window.innerWidth,
      tree13y:0.13519091847*window.innerHeight,
      tree14x:0.56770833333*window.innerWidth,
      tree14y:0.13519091847*window.innerHeight,
      tree15x:0.7328125*window.innerWidth,
      tree15y:0.13519091847*window.innerHeight

  }


  var ctx = document.getElementById("canvas");
    var c = ctx.getContext("2d");
    ctx.width =  window.innerWidth ;
    ctx.height = window.innerHeight ;
  /*var instr = document.getElementById('instruction');
  instr.width = window.innerWidth*0.53044375645;
  instr.height = window.innerHeight*0.5140625;
  */
    c.font = "30px Verdana";
    c.fillText(money, 0.930729166666*window.innerWidth,50);

  var toolbar = document.getElementById('toolbar');
  toolbar.width = window.innerWidth*0.07552083333;
  toolbar.height = window.innerHeight*0.87203302373;

  var plantButton = document.getElementById('plantButton');
  plantButton.width = window.innerWidth*0.0671875;
  plantButton.height = window.innerHeight*0.11764705882;

  var buyButton = document.getElementById('buyButton');
  buyButton.width = window.innerWidth*0.0671875;
  buyButton.height = window.innerHeight*0.11764705882;

  var waterButton = document.getElementById('waterButton');
  waterButton.width = window.innerWidth*0.0671875;
  waterButton.height = window.innerHeight*0.11764705882;

  var sellButton = document.getElementById('sellButton');
  waterButton.width = window.innerWidth*0.0671875;
  waterButton.height = window.innerHeight*0.11764705882;

  var dirt11 = document.getElementById('dirt11');
  dirt11.width = 0.13333333333*window.innerWidth;
  dirt11.height = 0.1826625387*window.innerHeight;
  var dirt12 = document.getElementById('dirt12');
  dirt12.width = 0.13333333333*window.innerWidth;
  dirt12.height = 0.1826625387*window.innerHeight;
  var dirt13 = document.getElementById('dirt13');
  dirt13.width = 0.13333333333*window.innerWidth;
  dirt13.height = 0.1826625387*window.innerHeight;
  var dirt14 = document.getElementById('dirt14');
  dirt14.width = 0.13333333333*window.innerWidth;
  dirt14.height = 0.1826625387*window.innerHeight;
  var dirt15 = document.getElementById('dirt15');
  dirt15.width = 0.13333333333*window.innerWidth;
  dirt15.height = 0.1826625387*window.innerHeight;
  var dirt21 = document.getElementById('dirt21');
  dirt21.width = 0.13333333333*window.innerWidth;
  dirt21.height = 0.1826625387*window.innerHeight;
  var dirt22 = document.getElementById('dirt22');
  dirt22.width = 0.13333333333*window.innerWidth;
  dirt22.height = 0.1826625387*window.innerHeight;
  var dirt23 = document.getElementById('dirt23');
  dirt23.width = 0.13333333333*window.innerWidth;
  dirt23.height = 0.1826625387*window.innerHeight;
  var dirt24 = document.getElementById('dirt24');
  dirt24.width = 0.13333333333*window.innerWidth;
  dirt24.height = 0.1826625387*window.innerHeight;
  var dirt25 = document.getElementById('dirt25');
  dirt25.width = 0.13333333333*window.innerWidth;
  dirt25.height = 0.1826625387*window.innerHeight;
  var dirt31 = document.getElementById('dirt31');
  dirt31.width = 0.13333333333*window.innerWidth;
  dirt31.height = 0.1826625387*window.innerHeight;
  var dirt32 = document.getElementById('dirt32');
  dirt32.width = 0.13333333333*window.innerWidth;
  dirt32.height = 0.1826625387*window.innerHeight;
  var dirt33 = document.getElementById('dirt33');
  dirt33.width = 0.13333333333*window.innerWidth;
  dirt33.height = 0.1826625387*window.innerHeight;
  var dirt34 = document.getElementById('dirt34');
  dirt34.width = 0.13333333333*window.innerWidth;
  dirt34.height = 0.1826625387*window.innerHeight;
  var dirt35 = document.getElementById('dirt35');
  dirt35.width = 0.13333333333*window.innerWidth;
  dirt35.height = 0.1826625387*window.innerHeight;
  var dirt41 = document.getElementById('dirt41');
  dirt41.width = 0.13333333333*window.innerWidth;
  dirt41.height = 0.1826625387*window.innerHeight;
  var dirt42 = document.getElementById('dirt42');
  dirt42.width = 0.13333333333*window.innerWidth;
  dirt42.height = 0.1826625387*window.innerHeight;
  var dirt43 = document.getElementById('dirt43');
  dirt43.width = 0.13333333333*window.innerWidth;
  dirt43.height = 0.1826625387*window.innerHeight;
  var dirt44 = document.getElementById('dirt44');
  dirt44.width = 0.13333333333*window.innerWidth;
  dirt44.height = 0.1826625387*window.innerHeight;
  var dirt45 = document.getElementById('dirt45');
  dirt45.width = 0.13333333333*window.innerWidth;
  dirt45.height = 0.1826625387*window.innerHeight;

  var slotOwned=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var slotIndex=[dirt11,dirt12,dirt13,dirt14,dirt15,dirt21,dirt22,
                 dirt23,dirt24,dirt25,dirt31,dirt32,dirt33,dirt34,
                 dirt35,dirt41,dirt42,dirt43,dirt44,dirt45];
  for(var i=0; i<=3 ; i++){
    for(var j=0; j<=4; j++){
   //  slotIndex[i*5+j].style.top =(26+(i*247)) + "px";
   //  slotIndex[i*5+j].style.left=(42+(j*316)) + "px";
       slotIndex[i*5+j].style.width =  0.13333333333*window.innerWidth;
       slotIndex[i*5+j].style.height = 0.1826625387*window.innerHeight;
        slotIndex[i*5+j].style.display = "none";
     }
   }
   for(var i=0; i<=3 ; i++){
     for(var j=0; j<=4; j++){
     //  slotIndex[i*5+j].style.top =(26+(i*247)) + "px";
     //  slotIndex[i*5+j].style.left=(42+(j*316)) + "px";
      // slotIndex[i*5+j].style.width =  0.13333333333*window.innerWidth;
      // slotIndex[i*5+j].style.height = 0.1826625387*window.innerHeight;
       slotIndex[i*5+j].style.display = "none";
     }
   }
}




var activeButton={
  plant:0,
  sell:0,
  water:0
};


  function selector(id){

    switch (id){

       case "dirt11":
          if( activeButton.plant===1){
            c.drawImage(treeStage[1],locate.tree11x,locate.tree11y,size.tree1x,size.tree1y);
          }
       break;
       case "dirt12":
          if( activeButton.plant===1){
            c.drawImage(treeStage[1],locate.tree12x,locate.tree12y,size.tree1x,size.tree1y);
       }
       break;
       case "dirt13":
          if( activeButton.plant===1){
            c.drawImage(treeStage[1],locate.tree13x,locate.tree13y,size.tree1x,size.tree1y);
          }
       break;
       case "dirt14":
          if( activeButton.plant===1){
            c.drawImage(treeStage[1],locate.tree14x,locate.tree14y,size.tree1x,size.tree1y);
          }
       break;
       case "dirt15":
          if( activeButton.plant===1){
            c.drawImage(treeStage[1],locate.tree15x,locate.tree15y,size.tree1x,size.tree1y);
          }
       break;
       case "dirt21":
       break;
       case "dirt22":
       break;
       case "dirt23":
       break;
       case "dirt24":
       break;
       case "dirt25":
       break;
       case "dirt31":
       break;
       case "dirt32":
       break;
       case "dirt33":
       break;
       case "dirt34":
       break;
       case "dirt35":
       break;
       case "dirt41":
       break;
       case "dirt42":
       break;
       case "dirt43":
       break;
       case "dirt44":
       break;
       case "dirt45":
       break;
    }


  }

  function plantTree(){
    activeButton.plant=1;
    activeButton.water=0;
    activeButton.sell=0;
  }
  function waterTree(){
    activeButton.water=1;
    activeButton.plant=0;
    activeButton.sell=0;
  }
  function sellTree(){
    activeButton.sell=1;
    activeButton.plant=0;
    activeButton.water=0;
  }


  function buySlot(){
      for( i=0; i<=19 ; i++){
        if( slotOwned[i]===0 && money>=30){
          slotIndex[i].style.display = "block";
          slotOwned[i]=1;
          money-=30;
          break;
        }
      }
  }
