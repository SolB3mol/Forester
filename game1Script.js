var money = 50;
document.getElementById("money").innerHTML = money + "$";

var ctx1 = document.getElementById("canvas");
  var c = ctx1.getContext("2d");
  ctx1.width =  window.innerWidth ;
  ctx1.height = window.innerHeight ;

/*var instr = document.getElementById('instruction');
instr.width = window.innerWidth*0.53044375645;
instr.height = window.innerHeight*0.5140625;
*/
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

var dirt11 = document.getElementById('dirt11');
dirt11.width= 0.13333333333*window.innerWidth;
dirt11.height=0.1826625387*window.innerHeight;

var dirt12 = document.getElementById('dirt12');
dirt12.width= 0.13333333333*window.innerWidth;
dirt12.height=0.1826625387*window.innerHeight;

var dirt13 = document.getElementById('dirt13');
dirt13.width= 0.13333333333*window.innerWidth;
dirt13.height=0.1826625387*window.innerHeight;

var dirt14 = document.getElementById('dirt14');
dirt14.width= 0.13333333333*window.innerWidth;
dirt14.height=0.1826625387*window.innerHeight;

var dirt15 = document.getElementById('dirt15');
dirt15.width= 0.13333333333*window.innerWidth;
dirt15.height=0.1826625387*window.innerHeight;

var dirt16 = document.getElementById('dirt16');
dirt16.width= 0.13333333333*window.innerWidth;
dirt16.height=0.1826625387*window.innerHeight;

/*document.onkeypress = function(e) {
    if( e.keyCode == 32){
      instr.remove();
  }
}
*/




function animate(){
   requestAnimationFrame(animate);
   c.clearRect(0, 0,innerWidth, innerHeight);

     //c.drawImage(tractor ,100, 100, 97, 70);
}
animate();
