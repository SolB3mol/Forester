

var instr = document.getElementById('instruction');
document.onkeypress = function(e) {
    if( e.keyCode == 32){
      instr.remove();
  }
}

var tractor = new Image();
  tractor.src = 'tractor.png';


var ctx = document.getElementById("myCanvas");
  var c = ctx.getContext("2d");
  ctx.width =  window.innerWidth;
  ctx.height = window.innerHeight;
c.fillRect(20, 20, 150, 100);
