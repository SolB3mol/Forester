
var instr = document.getElementById('instruction');
document.onkeypress = function(e) {
    if( e.keyCode == 32){
      instr.remove();
  }
}
   //alert("Your screen resolution1 is: " + window.innerWidth + "x" + window.innerHeight);
   //alert("Your screen resolution2 is: " + screen.width + "x" + screen.height);
   //alert("Your screen resolution3 is: " + document.body.clientWidth + "x" + document.body.clientHeight);

var ctx = document.getElementById("canvas");
  var c = ctx.getContext("2d");
  ctx.width =  window.innerWidth;
  ctx.height = window.innerHeight;


var tractor = new Image();
  tractor.src = 'tractor.png';
  tractor.onload = function(){
    c.drawImage(tractor ,100, 156, 97, 70);
  }
