
{var treeStage = new Array();

var timer = [0,3000,5000,7000];

treeStage[1] = new Image();
treeStage[1].src = 'tree1.png';
treeStage[2] = new Image();
treeStage[2].src = 'tree2.png';
treeStage[3] = new Image();
treeStage[3].src = 'tree3.png';
treeStage[4] = new Image();
treeStage[4].src = 'tree4.png';}
{
  var money = 130;
  function tree(stage,water,value,placed) {
    this.stage=stage;
    this.water=water;
    this.value=value;
    this.placed=placed;
  }
{
var tree11 = new tree(1, 100, 1, 0);
var tree12 = new tree(1, 100, 1, 0);
var tree13 = new tree(1, 100, 1, 0);
var tree14 = new tree(1, 100, 1, 0);
var tree15 = new tree(1, 100, 1, 0);
var tree21 = new tree(1, 100, 1, 0);
var tree22 = new tree(1, 100, 1, 0);
var tree23 = new tree(1, 100, 1, 0);
var tree24 = new tree(1, 100, 1, 0);
var tree25 = new tree(1, 100, 1, 0);
var tree31 = new tree(1, 100, 1, 0);
var tree32 = new tree(1, 100, 1, 0);
var tree33 = new tree(1, 100, 1, 0);
var tree34 = new tree(1, 100, 1, 0);
var tree35 = new tree(1, 100, 1, 0);
var tree41 = new tree(1, 100, 1, 0);
var tree42 = new tree(1, 100, 1, 0);
var tree43 = new tree(1, 100, 1, 0);
var tree44 = new tree(1, 100, 1, 0);
var tree45 = new tree(1, 100, 1, 0);
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
      t1ree11x:0.07291666666*window.innerWidth,
      t1ree11y:0.13519091847*window.innerHeight,
      t1ree12x:0.2375*window.innerWidth,
      t1ree12y:0.13519091847*window.innerHeight,
      t1ree13x:0.40260416666*window.innerWidth,
      t1ree13y:0.13519091847*window.innerHeight,
      t1ree14x:0.56770833333*window.innerWidth,
      t1ree14y:0.13519091847*window.innerHeight,
      t1ree15x:0.7328125*window.innerWidth,
      t1ree15y:0.13519091847*window.innerHeight,
      t1ree21x:0.07291666666*window.innerWidth,
      t1ree21y:0.39009287925*window.innerHeight,
      t1ree22x:0.2375*window.innerWidth,
      t1ree22y:0.39009287925*window.innerHeight,
      t1ree23x:0.40260416666*window.innerWidth,
      t1ree23y:0.39009287925*window.innerHeight,
      t1ree24x:0.56770833333*window.innerWidth,
      t1ree24y:0.39009287925*window.innerHeight,
      t1ree25x:0.7328125*window.innerWidth,
      t1ree25y:0.39009287925*window.innerHeight,
      t1ree31x:0.07291666666*window.innerWidth,
      t1ree31y:0.64499484004*window.innerHeight,
      t1ree32x:0.2375*window.innerWidth,
      t1ree32y:0.64499484004*window.innerHeight,
      t1ree33x:0.40260416666*window.innerWidth,
      t1ree33y:0.64499484004*window.innerHeight,
      t1ree34x:0.56770833333*window.innerWidth,
      t1ree34y:0.64499484004*window.innerHeight,
      t1ree35x:0.7328125*window.innerWidth,
      t1ree35y:0.64499484004*window.innerHeight,
      t1ree41x:0.07291666666*window.innerWidth,
      t1ree41y:0.89989680082*window.innerHeight,
      t1ree42x:0.2375*window.innerWidth,
      t1ree42y:0.89989680082*window.innerHeight,
      t1ree43x:0.40260416666*window.innerWidth,
      t1ree43y:0.89989680082*window.innerHeight,
      t1ree44x:0.56770833333*window.innerWidth,
      t1ree44y:0.89989680082*window.innerHeight,
      t1ree45x:0.7328125*window.innerWidth,
      t1ree45y:0.89989680082*window.innerHeight,

      t2ree11x:0.05442708333*window.innerWidth,
      t2ree11y:0.08875128998*window.innerHeight,
      t2ree12x:0.21901041666*window.innerWidth,
      t2ree12y:0.08875128998*window.innerHeight,
      t2ree13x:0.38359375*window.innerWidth,
      t2ree13y:0.08875128998*window.innerHeight,
      t2ree14x:0.54817708333*window.innerWidth,
      t2ree14y:0.08875128998*window.innerHeight,
      t2ree15x:0.71276041666*window.innerWidth,
      t2ree15y:0.08875128998*window.innerHeight,
      t2ree21x:0.05442708333*window.innerWidth,
      t2ree21y:0.3436532507739938*window.innerHeight,
      t2ree22x:0.21901041666*window.innerWidth,
      t2ree22y:0.3436532507739938*window.innerHeight,
      t2ree23x:0.38359375*window.innerWidth,
      t2ree23y:0.3436532507739938*window.innerHeight,
      t2ree24x:0.54817708333*window.innerWidth,
      t2ree24y:0.3436532507739938*window.innerHeight,
      t2ree25x:0.71276041666*window.innerWidth,
      t2ree25y:0.3436532507739938*window.innerHeight,
      t2ree31x:0.05442708333*window.innerWidth,
      t2ree31y:0.5985552115583075*window.innerHeight,
      t2ree32x:0.21901041666*window.innerWidth,
      t2ree32y:0.5985552115583075*window.innerHeight,
      t2ree33x:0.38359375*window.innerWidth,
      t2ree33y:0.5985552115583075*window.innerHeight,
      t2ree34x:0.54817708333*window.innerWidth,
      t2ree34y:0.5985552115583075*window.innerHeight,
      t2ree35x:0.71276041666*window.innerWidth,
      t2ree35y:0.5985552115583075*window.innerHeight,
      t2ree41x:0.05442708333*window.innerWidth,
      t2ree41y:0.8534571723426213*window.innerHeight,
      t2ree42x:0.21901041666*window.innerWidth,
      t2ree42y:0.8534571723426213*window.innerHeight,
      t2ree43x:0.38359375*window.innerWidth,
      t2ree43y:0.8534571723426213*window.innerHeight,
      t2ree44x:0.54817708333*window.innerWidth,
      t2ree44y:0.8534571723426213*window.innerHeight,
      t2ree45x:0.71276041666*window.innerWidth,
      t2ree45y:0.8534571723426213*window.innerHeight,

      t3ree11x:0.04348958333*window.innerWidth,
      t3ree11y:0.05885416666*window.innerHeight,
      t3ree12x:0.20807291666*window.innerWidth,
      t3ree12y:0.05885416666*window.innerHeight,
      t3ree13x:0.37265625*window.innerWidth,
      t3ree13y:0.05885416666*window.innerHeight,
      t3ree14x:0.53723958333*window.innerWidth,
      t3ree14y:0.05885416666*window.innerHeight,
      t3ree15x:0.70182291666*window.innerWidth,
      t3ree15y:0.05885416666*window.innerHeight,
      t3ree21x:0.04348958333*window.innerWidth,
      t3ree21y:0.30340557275*window.innerHeight,
      t3ree22x:0.20807291666*window.innerWidth,
      t3ree22y:0.30340557275*window.innerHeight,
      t3ree23x:0.37265625*window.innerWidth,
      t3ree23y:0.30340557275*window.innerHeight,
      t3ree24x:0.53723958333*window.innerWidth,
      t3ree24y:0.30340557275*window.innerHeight,
      t3ree25x:0.70182291666*window.innerWidth,
      t3ree25y:0.30340557275*window.innerHeight,
      t3ree31x:0.04348958333*window.innerWidth,
      t3ree31y:0.55830753354*window.innerHeight,
      t3ree32x:0.20807291666*window.innerWidth,
      t3ree32y:0.55830753354*window.innerHeight,
      t3ree33x:0.37265625*window.innerWidth,
      t3ree33y:0.55830753354*window.innerHeight,
      t3ree34x:0.53723958333*window.innerWidth,
      t3ree34y:0.55830753354*window.innerHeight,
      t3ree35x:0.70182291666*window.innerWidth,
      t3ree35y:0.55830753354*window.innerHeight,
      t3ree41x:0.04348958333*window.innerWidth,
      t3ree41y:0.81320949432*window.innerHeight,
      t3ree42x:0.20807291666*window.innerWidth,
      t3ree42y:0.81320949432*window.innerHeight,
      t3ree43x:0.37265625*window.innerWidth,
      t3ree43y:0.81320949432*window.innerHeight,
      t3ree44x:0.53723958333*window.innerWidth,
      t3ree44y:0.81320949432*window.innerHeight,
      t3ree45x:0.70182291666*window.innerWidth,
      t3ree45y:0.81320949432*window.innerHeight,

      t4ree11x:0.03125*window.innerWidth,
      t4ree11y:0.02683178534*window.innerHeight,
      t4ree12x:0.19583333333*window.innerWidth,
      t4ree12y:0.02683178534*window.innerHeight,
      t4ree13x:0.36041666666*window.innerWidth,
      t4ree13y:0.02683178534*window.innerHeight,
      t4ree14x:0.525*window.innerWidth,
      t4ree14y:0.02683178534*window.innerHeight,
      t4ree15x:0.68958333333*window.innerWidth,
      t4ree15y:0.02683178534*window.innerHeight,
      t4ree21x:0.03125*window.innerWidth,
      t4ree21y:0.28173374613*window.innerHeight,
      t4ree22x:0.19583333333*window.innerWidth,
      t4ree22y:0.28173374613*window.innerHeight,
      t4ree23x:0.36041666666*window.innerWidth,
      t4ree23y:0.28173374613*window.innerHeight,
      t4ree24x:0.525*window.innerWidth,
      t4ree24y:0.28173374613*window.innerHeight,
      t4ree25x:0.68958333333*window.innerWidth,
      t4ree25y:0.28173374613*window.innerHeight,
      t4ree31x:0.03125*window.innerWidth,
      t4ree31y:0.53663570691*window.innerHeight,
      t4ree32x:0.19583333333*window.innerWidth,
      t4ree32y:0.53663570691*window.innerHeight,
      t4ree33x:0.36041666666*window.innerWidth,
      t4ree33y:0.53663570691*window.innerHeight,
      t4ree34x:0.525*window.innerWidth,
      t4ree34y:0.53663570691*window.innerHeight,
      t4ree35x:0.68958333333*window.innerWidth,
      t4ree35y:0.53663570691*window.innerHeight,
      t4ree41x:0.03125*window.innerWidth,
      t4ree41y:0.79153766769*window.innerHeight,
      t4ree42x:0.19583333333*window.innerWidth,
      t4ree42y:0.79153766769*window.innerHeight,
      t4ree43x:0.36041666666*window.innerWidth,
      t4ree43y:0.79153766769*window.innerHeight,
      t4ree44x:0.525*window.innerWidth,
      t4ree44y:0.79153766769*window.innerHeight,
      t4ree45x:0.68958333333*window.innerWidth,
      t4ree45y:0.79153766769*window.innerHeight


  }

  var interchange = 0;

  var ctx = document.getElementById("canvas");
    var c = ctx.getContext("2d");
    ctx.width =  window.innerWidth ;
    ctx.height = window.innerHeight ;
  /*var instr = document.getElementById('instruction');
  instr.width = window.innerWidth*0.53044375645;
  instr.height = window.innerHeight*0.5140625;
  */
  function updateMoney(){
    c.font = "25px sillkscreen";
    c.fillStyle = "#e1cb47";
    c.clearRect(0.930729166666*window.innerWidth,0,300,100);
    c.fillText(money+"$", 0.930729166666*window.innerWidth,50);
  }
  money-=5;
  updateMoney();

{
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
  sellButton.width = window.innerWidth*0.0671875;
  sellButton.height = window.innerHeight*0.11764705882;



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
}
  // for(var i=0; i<=3 ; i++){
  //   for(var j=0; j<=4; j++){
  //  //  slotIndex[i*5+j].style.top =(26+(i*247)) + "px";
  //  //  slotIndex[i*5+j].style.left=(42+(j*316)) + "px";
  //      slotIndex[i*5+j].style.width =  0.13333333333*window.innerWidth;
  //      slotIndex[i*5+j].style.height = 0.1826625387*window.innerHeight;
  //       slotIndex[i*5+j].style.display = "none";
  //    }
  //  }
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



function cutTree(x,y,obj,sx,sy){
  c.clearRect(x,y,sx,sy);
  money+= Math.pow(5, obj.stage-1);
  obj.placed=0;
  obj.stage=1;
  updateMoney();

}

function upgrade12(x,y,obj){

    if(obj.placed===1 && obj.stage===1){
    c.clearRect(x,y,size.tree2x,size.tree2y);
    c.drawImage(treeStage[2],x,y,size.tree2x,size.tree2y);
    obj.stage++;
  }
}

function upgrade23(x,y,obj){

    if(obj.placed===1 && obj.stage===2){
    c.clearRect(x,y,size.tree3x,size.tree3y);
    c.drawImage(treeStage[3],x,y,size.tree3x,size.tree3y);
    obj.stage++;
  }
}
function upgrade34(x,y,obj ){
    if(obj.placed===1 && obj.stage===3){
    c.clearRect(x,y,size.tree4x,size.tree4y);
    c.drawImage(treeStage[4],x,y,size.tree4x,size.tree4y);
    obj.stage++;
  }

}

var activeButton={
  plant:0,
  sell:0,
  water:0,
};

function selector(id){

  switch (id){

     case "dirt11":
        if( activeButton.plant===1 && tree11.placed===0){
          tree11.placed=1;
          c.drawImage(treeStage[1],locate.t1ree11x,locate.t1ree11y,size.tree1x,size.tree1y);
          money-=5;
          updateMoney();
          if(tree11.placed===1){
             setTimeout(upgrade12,timer[1],locate.t2ree11x,locate.t2ree11y,tree11);
             setTimeout(upgrade23,timer[2],locate.t3ree11x,locate.t3ree11y,tree11);
             setTimeout(upgrade34,timer[3],locate.t4ree11x,locate.t4ree11y,tree11);
        }
        }else

        if( activeButton.sell===1 && tree11.placed===1){

            if( tree11.stage === 1){
              cutTree(locate.t2ree11x,locate.t2ree11y,tree11,size.tree2x,size.tree2y);
            }
            if( tree11.stage === 2){
              cutTree(locate.t3ree11x,locate.t3ree11y,tree11,size.tree3x,size.tree3y);
            }
            if(tree11.stage === 3){
              cutTree(locate.t4ree11x,locate.t4ree11y,tree11,size.tree4x,size.tree4y);
            }
            if(tree11.stage === 4){
              cutTree(locate.t4ree11x,locate.t4ree11y,tree11,size.tree4x,size.tree4y);
            }

        }

     break;
     case "dirt12":
     if( activeButton.plant===1 && tree12.placed===0){
       tree12.placed=1;
       c.drawImage(treeStage[1],locate.t1ree12x,locate.t1ree12y,size.tree1x,size.tree1y);
       money-=5;
       updateMoney();
       if(tree12.placed===1){
          setTimeout(upgrade12,timer[1],locate.t2ree12x,locate.t2ree12y,tree12);
          setTimeout(upgrade23,timer[2],locate.t3ree12x,locate.t3ree12y,tree12);
          setTimeout(upgrade34,timer[3],locate.t4ree12x,locate.t4ree12y,tree12);
     }
     }else

     if( activeButton.sell===1 && tree12.placed===1){

         if( tree12.stage === 1){
           cutTree(locate.t2ree12x,locate.t2ree12y,tree12,size.tree2x,size.tree2y);
         }
         if( tree12.stage === 2){
           cutTree(locate.t3ree12x,locate.t3ree12y,tree12,size.tree3x,size.tree3y);
         }
         if(tree12.stage === 3){
           cutTree(locate.t4ree12x,locate.t4ree12y,tree12,size.tree4x,size.tree4y);
         }
         if(tree12.stage === 4){
           cutTree(locate.t4ree12x,locate.t4ree12y,tree12,size.tree4x,size.tree4y);
         }

     }
     break;
     case "dirt13":
     if( activeButton.plant===1 && tree13.placed===0){
       tree13.placed=1;
       c.drawImage(treeStage[1],locate.t1ree13x,locate.t1ree13y,size.tree1x,size.tree1y);
       money-=5;
       updateMoney();
       if(tree13.placed===1){
          setTimeout(upgrade12,timer[1],locate.t2ree13x,locate.t2ree13y,tree13);
          setTimeout(upgrade23,timer[2],locate.t3ree13x,locate.t3ree13y,tree13);
          setTimeout(upgrade34,timer[3],locate.t4ree13x,locate.t4ree13y,tree13);
     }
     }else

     if( activeButton.sell===1 && tree13.placed===1){

         if( tree13.stage === 1){
           cutTree(locate.t2ree13x,locate.t2ree13y,tree13,size.tree2x,size.tree2y);
         }
         if( tree13.stage === 2){
           cutTree(locate.t3ree13x,locate.t3ree13y,tree13,size.tree3x,size.tree3y);
         }
         if(tree13.stage === 3){
           cutTree(locate.t4ree13x,locate.t4ree13y,tree13,size.tree4x,size.tree4y);
         }
         if(tree13.stage === 4){
           cutTree(locate.t4ree13x,locate.t4ree13y,tree13,size.tree4x,size.tree4y);
         }

     }
     break;
     case "dirt14":
     if( activeButton.plant===1 && tree14.placed===0){
       tree14.placed=1;
       c.drawImage(treeStage[1],locate.t1ree14x,locate.t1ree14y,size.tree1x,size.tree1y);
       money-=5;
       updateMoney();
       if(tree14.placed===1){
          setTimeout(upgrade12,timer[1],locate.t2ree14x,locate.t2ree14y,tree14);
          setTimeout(upgrade23,timer[2],locate.t3ree14x,locate.t3ree14y,tree14);
          setTimeout(upgrade34,timer[3],locate.t4ree14x,locate.t4ree14y,tree14);
     }
     }else

     if( activeButton.sell===1 && tree14.placed===1){

         if( tree14.stage === 1){
           cutTree(locate.t2ree14x,locate.t2ree14y,tree14,size.tree2x,size.tree2y);
         }
         if( tree14.stage === 2){
           cutTree(locate.t3ree14x,locate.t3ree14y,tree14,size.tree3x,size.tree3y);
         }
         if(tree14.stage === 3){
           cutTree(locate.t4ree14x,locate.t4ree14y,tree14,size.tree4x,size.tree4y);
         }
         if(tree14.stage === 4){
           cutTree(locate.t4ree14x,locate.t4ree14y,tree14,size.tree4x,size.tree4y);
         }

     }
     break;
     case "dirt15":
     if( activeButton.plant===1 && tree15.placed===0){
       tree15.placed=1;
       c.drawImage(treeStage[1],locate.t1ree15x,locate.t1ree15y,size.tree1x,size.tree1y);
       money-=5;
       updateMoney();
       if(tree15.placed===1){
          setTimeout(upgrade12,timer[1],locate.t2ree15x,locate.t2ree15y,tree15);
          setTimeout(upgrade23,timer[2],locate.t3ree15x,locate.t3ree15y,tree15);
          setTimeout(upgrade34,timer[3],locate.t4ree15x,locate.t4ree15y,tree15);
     }
     }else

     if( activeButton.sell===1 && tree15.placed===1){

         if( tree15.stage === 1){
           cutTree(locate.t2ree15x,locate.t2ree15y,tree15,size.tree2x,size.tree2y);
         }
         if( tree15.stage === 2){
           cutTree(locate.t3ree15x,locate.t3ree15y,tree15,size.tree3x,size.tree3y);
         }
         if(tree15.stage === 3){
           cutTree(locate.t4ree15x,locate.t4ree15y,tree15,size.tree4x,size.tree4y);
         }
         if(tree15.stage === 4){
           cutTree(locate.t4ree15x,locate.t4ree15y,tree15,size.tree4x,size.tree4y);
         }

     }
     break;
     case "dirt21":
     if( activeButton.plant===1 && tree21.placed===0){
       tree21.placed=1;
       c.drawImage(treeStage[1],locate.t1ree21x,locate.t1ree21y,size.tree1x,size.tree1y);
       money-=5;
       updateMoney();
       if(tree21.placed===1){
          setTimeout(upgrade12,timer[1],locate.t2ree21x,locate.t2ree21y,tree21);
          setTimeout(upgrade23,timer[2],locate.t3ree21x,locate.t3ree21y,tree21);
          setTimeout(upgrade34,timer[3],locate.t4ree21x,locate.t4ree21y,tree21);
     }
     }else

     if( activeButton.sell===1 && tree21.placed===1){

         if( tree21.stage === 1){
           cutTree(locate.t2ree21x,locate.t2ree21y,tree21,size.tree2x,size.tree2y);
         }
         if( tree21.stage === 2){
           cutTree(locate.t3ree21x,locate.t3ree21y,tree21,size.tree3x,size.tree3y);
         }
         if(tree21.stage === 3){
           cutTree(locate.t4ree21x,locate.t4ree21y,tree21,size.tree4x,size.tree4y);
         }
         if(tree21.stage === 4){
           cutTree(locate.t4ree21x,locate.t4ree21y,tree21,size.tree4x,size.tree4y);
         }

     }
     break;
     case "dirt22":
     if( activeButton.plant===1 && tree22.placed===0){
       tree22.placed=1;
       c.drawImage(treeStage[1],locate.t1ree22x,locate.t1ree22y,size.tree1x,size.tree1y);
       money-=5;
       updateMoney();
       if(tree22.placed===1){
          setTimeout(upgrade12,timer[1],locate.t2ree22x,locate.t2ree22y,tree22);
          setTimeout(upgrade23,timer[2],locate.t3ree22x,locate.t3ree22y,tree22);
          setTimeout(upgrade34,timer[3],locate.t4ree22x,locate.t4ree22y,tree22);
     }
     }else

     if( activeButton.sell===1 && tree22.placed===1){

         if( tree22.stage === 1){
           cutTree(locate.t2ree22x,locate.t2ree22y,tree22,size.tree2x,size.tree2y);
         }
         if( tree22.stage === 2){
           cutTree(locate.t3ree22x,locate.t3ree22y,tree22,size.tree3x,size.tree3y);
         }
         if(tree22.stage === 3){
           cutTree(locate.t4ree22x,locate.t4ree22y,tree22,size.tree4x,size.tree4y);
         }
         if(tree22.stage === 4){
           cutTree(locate.t4ree22x,locate.t4ree22y,tree22,size.tree4x,size.tree4y);
         }

     }
     break;
     case "dirt23":
     if( activeButton.plant===1 && tree23.placed===0){
       tree23.placed=1;
       c.drawImage(treeStage[1],locate.t1ree23x,locate.t1ree23y,size.tree1x,size.tree1y);
       money-=5;
       updateMoney();
       if(tree23.placed===1){
          setTimeout(upgrade12,timer[1],locate.t2ree23x,locate.t2ree23y,tree23);
          setTimeout(upgrade23,timer[2],locate.t3ree23x,locate.t3ree23y,tree23);
          setTimeout(upgrade34,timer[3],locate.t4ree23x,locate.t4ree23y,tree23);
     }
     }else

     if( activeButton.sell===1 && tree23.placed===1){

         if( tree23.stage === 1){
           cutTree(locate.t2ree23x,locate.t2ree23y,tree23,size.tree2x,size.tree2y);
         }
         if( tree23.stage === 2){
           cutTree(locate.t3ree23x,locate.t3ree23y,tree23,size.tree3x,size.tree3y);
         }
         if(tree23.stage === 3){
           cutTree(locate.t4ree23x,locate.t4ree23y,tree23,size.tree4x,size.tree4y);
         }
         if(tree23.stage === 4){
           cutTree(locate.t4ree23x,locate.t4ree23y,tree23,size.tree4x,size.tree4y);
         }

     }
     break;
     case "dirt24":
     if( activeButton.plant===1 && tree24.placed===0){
       tree24.placed=1;
       c.drawImage(treeStage[1],locate.t1ree24x,locate.t1ree24y,size.tree1x,size.tree1y);
       money-=5;
       updateMoney();
       if(tree24.placed===1){
          setTimeout(upgrade12,timer[1],locate.t2ree24x,locate.t2ree24y,tree24);
          setTimeout(upgrade23,timer[2],locate.t3ree24x,locate.t3ree24y,tree24);
          setTimeout(upgrade34,timer[3],locate.t4ree24x,locate.t4ree24y,tree24);
     }
     }else

     if( activeButton.sell===1 && tree24.placed===1){

         if( tree24.stage === 1){
           cutTree(locate.t2ree24x,locate.t2ree24y,tree24,size.tree2x,size.tree2y);
         }
         if( tree24.stage === 2){
           cutTree(locate.t3ree24x,locate.t3ree24y,tree24,size.tree3x,size.tree3y);
         }
         if(tree24.stage === 3){
           cutTree(locate.t4ree24x,locate.t4ree24y,tree24,size.tree4x,size.tree4y);
         }
         if(tree24.stage === 4){
           cutTree(locate.t4ree24x,locate.t4ree24y,tree24,size.tree4x,size.tree4y);
         }

     }
     break;
     case "dirt25":
     if( activeButton.plant===1 && tree25.placed===0){
       tree25.placed=1;
       c.drawImage(treeStage[1],locate.t1ree25x,locate.t1ree25y,size.tree1x,size.tree1y);
       money-=5;
       updateMoney();
       if(tree25.placed===1){
          setTimeout(upgrade12,timer[1],locate.t2ree25x,locate.t2ree25y,tree25);
          setTimeout(upgrade23,timer[2],locate.t3ree25x,locate.t3ree25y,tree25);
          setTimeout(upgrade34,timer[3],locate.t4ree25x,locate.t4ree25y,tree25);
     }
     }else

     if( activeButton.sell===1 && tree25.placed===1){

         if( tree25.stage === 1){
           cutTree(locate.t2ree25x,locate.t2ree25y,tree25,size.tree2x,size.tree2y);
         }
         if( tree25.stage === 2){
           cutTree(locate.t3ree25x,locate.t3ree25y,tree25,size.tree3x,size.tree3y);
         }
         if(tree25.stage === 3){
           cutTree(locate.t4ree25x,locate.t4ree25y,tree25,size.tree4x,size.tree4y);
         }
         if(tree25.stage === 4){
           cutTree(locate.t4ree25x,locate.t4ree25y,tree25,size.tree4x,size.tree4y);
         }

     }
     break;
     case "dirt31":
     if( activeButton.plant===1 && tree31.placed===0){
       tree31.placed=1;
       c.drawImage(treeStage[1],locate.t1ree31x,locate.t1ree31y,size.tree1x,size.tree1y);
       money-=5;
       updateMoney();
       if(tree31.placed===1){
          setTimeout(upgrade12,timer[1],locate.t2ree31x,locate.t2ree31y,tree31);
          setTimeout(upgrade23,timer[2],locate.t3ree31x,locate.t3ree31y,tree31);
          setTimeout(upgrade34,timer[3],locate.t4ree31x,locate.t4ree31y,tree31);
     }
     }else

     if( activeButton.sell===1 && tree31.placed===1){

         if( tree31.stage === 1){
           cutTree(locate.t2ree31x,locate.t2ree31y,tree31,size.tree2x,size.tree2y);
         }
         if( tree31.stage === 2){
           cutTree(locate.t3ree31x,locate.t3ree31y,tree31,size.tree3x,size.tree3y);
         }
         if(tree31.stage === 3){
           cutTree(locate.t4ree31x,locate.t4ree31y,tree31,size.tree4x,size.tree4y);
         }
         if(tree31.stage === 4){
           cutTree(locate.t4ree31x,locate.t4ree31y,tree31,size.tree4x,size.tree4y);
         }

     }
     break;
     case "dirt32":
     if( activeButton.plant===1 && tree32.placed===0){
       tree32.placed=1;
       c.drawImage(treeStage[1],locate.t1ree32x,locate.t1ree32y,size.tree1x,size.tree1y);
       money-=5;
       updateMoney();
       if(tree32.placed===1){
          setTimeout(upgrade12,timer[1],locate.t2ree32x,locate.t2ree32y,tree32);
          setTimeout(upgrade23,timer[2],locate.t3ree32x,locate.t3ree32y,tree32);
          setTimeout(upgrade34,timer[3],locate.t4ree32x,locate.t4ree32y,tree32);
     }
     }else

     if( activeButton.sell===1 && tree32.placed===1){

         if( tree32.stage === 1){
           cutTree(locate.t2ree32x,locate.t2ree32y,tree32,size.tree2x,size.tree2y);
         }
         if( tree32.stage === 2){
           cutTree(locate.t3ree32x,locate.t3ree32y,tree32,size.tree3x,size.tree3y);
         }
         if(tree32.stage === 3){
           cutTree(locate.t4ree32x,locate.t4ree32y,tree32,size.tree4x,size.tree4y);
         }
         if(tree32.stage === 4){
           cutTree(locate.t4ree32x,locate.t4ree32y,tree32,size.tree4x,size.tree4y);
         }

     }
     break;
     case "dirt33":
     if( activeButton.plant===1 && tree33.placed===0){
       tree33.placed=1;
       c.drawImage(treeStage[1],locate.t1ree33x,locate.t1ree33y,size.tree1x,size.tree1y);
       money-=5;
       updateMoney();
       if(tree33.placed===1){
          setTimeout(upgrade12,timer[1],locate.t2ree33x,locate.t2ree33y,tree33);
          setTimeout(upgrade23,timer[2],locate.t3ree33x,locate.t3ree33y,tree33);
          setTimeout(upgrade34,timer[3],locate.t4ree33x,locate.t4ree33y,tree33);
     }
     }else

     if( activeButton.sell===1 && tree33.placed===1){

         if( tree33.stage === 1){
           cutTree(locate.t2ree33x,locate.t2ree33y,tree33,size.tree2x,size.tree2y);
         }
         if( tree33.stage === 2){
           cutTree(locate.t3ree33x,locate.t3ree33y,tree33,size.tree3x,size.tree3y);
         }
         if(tree33.stage === 3){
           cutTree(locate.t4ree33x,locate.t4ree33y,tree33,size.tree4x,size.tree4y);
         }
         if(tree33.stage === 4){
           cutTree(locate.t4ree33x,locate.t4ree33y,tree33,size.tree4x,size.tree4y);
         }

     }
     break;
     case "dirt34":
     if( activeButton.plant===1 && tree34.placed===0){
       tree34.placed=1;
       c.drawImage(treeStage[1],locate.t1ree34x,locate.t1ree34y,size.tree1x,size.tree1y);
       money-=5;
       updateMoney();
       if(tree34.placed===1){
          setTimeout(upgrade12,timer[1],locate.t2ree34x,locate.t2ree34y,tree34);
          setTimeout(upgrade23,timer[2],locate.t3ree34x,locate.t3ree34y,tree34);
          setTimeout(upgrade34,timer[3],locate.t4ree34x,locate.t4ree34y,tree34);
     }
     }else

     if( activeButton.sell===1 && tree34.placed===1){

         if( tree34.stage === 1){
           cutTree(locate.t2ree34x,locate.t2ree34y,tree34,size.tree2x,size.tree2y);
         }
         if( tree34.stage === 2){
           cutTree(locate.t3ree34x,locate.t3ree34y,tree34,size.tree3x,size.tree3y);
         }
         if(tree34.stage === 3){
           cutTree(locate.t4ree34x,locate.t4ree34y,tree34,size.tree4x,size.tree4y);
         }
         if(tree34.stage === 4){
           cutTree(locate.t4ree34x,locate.t4ree34y,tree34,size.tree4x,size.tree4y);
         }

     }
     break;
     case "dirt35":
     if( activeButton.plant===1 && tree35.placed===0){
       tree35.placed=1;
       c.drawImage(treeStage[1],locate.t1ree35x,locate.t1ree35y,size.tree1x,size.tree1y);
       money-=5;
       updateMoney();
       if(tree35.placed===1){
          setTimeout(upgrade12,timer[1],locate.t2ree35x,locate.t2ree35y,tree35);
          setTimeout(upgrade23,timer[2],locate.t3ree35x,locate.t3ree335,tree35);
          setTimeout(upgrade34,timer[3],locate.t4ree35x,locate.t4ree35y,tree35);
     }
     }else

     if( activeButton.sell===1 && tree35.placed===1){

         if( tree35.stage === 1){
           cutTree(locate.t2ree35x,locate.t2ree35y,tree35,size.tree2x,size.tree2y);
         }
         if( tree35.stage === 2){
           cutTree(locate.t3ree35x,locate.t3ree35y,tree35,size.tree3x,size.tree3y);
         }
         if(tree35.stage === 3){
           cutTree(locate.t4ree35x,locate.t4ree35y,tree35,size.tree4x,size.tree4y);
         }
         if(tree35.stage === 4){
           cutTree(locate.t4ree35x,locate.t4ree35y,tree35,size.tree4x,size.tree4y);
         }
     }

     break;
     case "dirt41":
     if( activeButton.plant===1 && tree41.placed===0){
       tree41.placed=1;
       c.drawImage(treeStage[1],locate.t1ree41x,locate.t1ree41y,size.tree1x,size.tree1y);
       money-=5;
       updateMoney();
       if(tree41.placed===1){
          setTimeout(upgrade12,timer[1],locate.t2ree41x,locate.t2ree41y,tree41);
          setTimeout(upgrade23,timer[2],locate.t3ree41x,locate.t3ree41y,tree41);
          setTimeout(upgrade34,timer[3],locate.t4ree41x,locate.t4ree41y,tree41);
     }
     }else

     if( activeButton.sell===1 && tree41.placed===1){

         if( tree41.stage === 1){
           cutTree(locate.t2ree41x,locate.t2ree41y,tree41,size.tree2x,size.tree2y);
         }
         if( tree41.stage === 2){
           cutTree(locate.t3ree41x,locate.t3ree41y,tree41,size.tree3x,size.tree3y);
         }
         if(tree41.stage === 3){
           cutTree(locate.t4ree41x,locate.t4ree41y,tree41,size.tree4x,size.tree4y);
         }
         if(tree41.stage === 4){
           cutTree(locate.t4ree41x,locate.t4ree41y,tree41,size.tree4x,size.tree4y);
         }

     }
     break;
     case "dirt42":
     if( activeButton.plant===1 && tree42.placed===0){
       tree42.placed=1;
       c.drawImage(treeStage[1],locate.t1ree42x,locate.t1ree42y,size.tree1x,size.tree1y);
       money-=5;
       updateMoney();
       if(tree42.placed===1){
          setTimeout(upgrade12,timer[1],locate.t2ree42x,locate.t2ree42y,tree42);
          setTimeout(upgrade23,timer[2],locate.t3ree42x,locate.t3ree42y,tree42);
          setTimeout(upgrade34,timer[3],locate.t4ree42x,locate.t4ree42y,tree42);
     }
     }else

     if( activeButton.sell===1 && tree42.placed===1){

         if( tree42.stage === 1){
           cutTree(locate.t2ree42x,locate.t2ree42y,tree42,size.tree2x,size.tree2y);
         }
         if( tree42.stage === 2){
           cutTree(locate.t3ree42x,locate.t3ree42y,tree42,size.tree3x,size.tree3y);
         }
         if(tree42.stage === 3){
           cutTree(locate.t4ree42x,locate.t4ree42y,tree42,size.tree4x,size.tree4y);
         }
         if(tree42.stage === 4){
           cutTree(locate.t4ree42x,locate.t4ree42y,tree42,size.tree4x,size.tree4y);
         }

     }
     break;
     case "dirt43":
     if( activeButton.plant===1 && tree43.placed===0){
       tree43.placed=1;
       c.drawImage(treeStage[1],locate.t1ree43x,locate.t1ree43y,size.tree1x,size.tree1y);
       money-=5;
       updateMoney();
       if(tree43.placed===1){
          setTimeout(upgrade12,timer[1],locate.t2ree43x,locate.t2ree43y,tree43);
          setTimeout(upgrade23,timer[2],locate.t3ree43x,locate.t3ree43y,tree43);
          setTimeout(upgrade34,timer[3],locate.t4ree43x,locate.t4ree43y,tree43);
     }
     }else

     if( activeButton.sell===1 && tree43.placed===1){

         if( tree43.stage === 1){
           cutTree(locate.t2ree43x,locate.t2ree43y,tree43,size.tree2x,size.tree2y);
         }
         if( tree43.stage === 2){
           cutTree(locate.t3ree43x,locate.t3ree43y,tree43,size.tree3x,size.tree3y);
         }
         if(tree43.stage === 3){
           cutTree(locate.t4ree43x,locate.t4ree43y,tree43,size.tree4x,size.tree4y);
         }
         if(tree43.stage === 4){
           cutTree(locate.t4ree43x,locate.t4ree43y,tree43,size.tree4x,size.tree4y);
         }

     }
     break;
     case "dirt44":
     if( activeButton.plant===1 && tree44.placed===0){
       tree44.placed=1;
       c.drawImage(treeStage[1],locate.t1ree44x,locate.t1ree44y,size.tree1x,size.tree1y);
       money-=5;
       updateMoney();
       if(tree44.placed===1){
          setTimeout(upgrade12,timer[1],locate.t2ree44x,locate.t2ree44y,tree44);
          setTimeout(upgrade23,timer[2],locate.t3ree44x,locate.t3ree44y,tree44);
          setTimeout(upgrade34,timer[3],locate.t4ree44x,locate.t4ree44y,tree44);
     }
     }else

     if( activeButton.sell===1 && tree44.placed===1){

         if( tree44.stage === 1){
           cutTree(locate.t2ree44x,locate.t2ree44y,tree44,size.tree2x,size.tree2y);
         }
         if( tree44.stage === 2){
           cutTree(locate.t3ree44x,locate.t3ree44y,tree44,size.tree3x,size.tree3y);
         }
         if(tree44.stage === 3){
           cutTree(locate.t4ree44x,locate.t4ree44y,tree44,size.tree4x,size.tree4y);
         }
         if(tree44.stage === 4){
           cutTree(locate.t4ree44x,locate.t4ree44y,tree44,size.tree4x,size.tree4y);
         }

     }
     break;
     case "dirt45":
     if( activeButton.plant===1 && tree45.placed===0){
       tree45.placed=1;
       c.drawImage(treeStage[1],locate.t1ree45x,locate.t1ree45y,size.tree1x,size.tree1y);
       money-=5;
       updateMoney();
       if(tree45.placed===1){
          setTimeout(upgrade12,timer[1],locate.t2ree45x,locate.t2ree45y,tree45);
          setTimeout(upgrade23,timer[2],locate.t3ree45x,locate.t3ree45y,tree45);
          setTimeout(upgrade34,timer[3],locate.t4ree45x,locate.t4ree45y,tree45);
     }
     }else

     if( activeButton.sell===1 && tree45.placed===1){

         if( tree45.stage === 1){
           cutTree(locate.t2ree45x,locate.t2ree45y,tree45,size.tree2x,size.tree2y);
         }
         if( tree45.stage === 2){
           cutTree(locate.t3ree45x,locate.t3ree45y,tree45,size.tree3x,size.tree3y);
         }
         if(tree45.stage === 3){
           cutTree(locate.t4ree45x,locate.t4ree45y,tree45,size.tree4x,size.tree4y);
         }
         if(tree45.stage === 4){
           cutTree(locate.t4ree45x,locate.t4ree45y,tree45,size.tree4x,size.tree4y);
         }

     }
     break;
  }
}

  function plantTree(){
    activeButton.plant=1;
    activeButton.water=0;
    activeButton.sell=0;
    plantButton.style.opacity = "0.7";
    sellButton.style.opacity = "1.0";

  }
  function waterTree(){
  //  activeButton.water=1;
    //activeButton.plant=0;
  //  activeButton.sell=0;
  }
  function sellTree(){
    activeButton.sell=1;
    activeButton.plant=0;
    activeButton.water=0;
    sellButton.style.opacity = "0.7";
    plantButton.style.opacity = "1.0";
  }




  function buySlot(){
      for( i=0; i<=19 ; i++){
        if( slotOwned[i]===0 && money>=30){
          slotIndex[i].style.display = "block";
          slotOwned[i]=1;
          money-=30;
          updateMoney();
          break;
        }
      }
  }
