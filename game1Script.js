
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
  var dirt12 = document.getElementById('dirt12');
  var dirt13 = document.getElementById('dirt13');
  var dirt14 = document.getElementById('dirt14');
  var dirt15 = document.getElementById('dirt15');
  var dirt21 = document.getElementById('dirt21');
  var dirt22 = document.getElementById('dirt22');
  var dirt23 = document.getElementById('dirt23');
  var dirt24 = document.getElementById('dirt24');
  var dirt25 = document.getElementById('dirt25');
  var dirt31 = document.getElementById('dirt31');
  var dirt32 = document.getElementById('dirt32');
  var dirt33 = document.getElementById('dirt33');
  var dirt34 = document.getElementById('dirt34');
  var dirt35 = document.getElementById('dirt35');
  var dirt41 = document.getElementById('dirt41');
  var dirt42 = document.getElementById('dirt42');
  var dirt43 = document.getElementById('dirt43');
  var dirt44 = document.getElementById('dirt44');
  var dirt45 = document.getElementById('dirt45');

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
       slotIndex[i*5+j].style.width =  0.13333333333*window.innerWidth;
       slotIndex[i*5+j].style.height = 0.1826625387*window.innerHeight;
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
            c.drawImage(treeStage[4],0,26,222,137);
          }
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
