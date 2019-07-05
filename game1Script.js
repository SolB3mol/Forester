

var instr = document.getElementById('instruction');
instr.style.width = window.innerWidth*0.53044375645;
instr.style.height = window.innerHeight*0.5140625;

var toolbar = document.getElementById('toolbar');
toolbar.style.width = window.innerWidth*0.07552083333;
toolbar.style.height = window.innerHeight*0.57203302373;

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
  ctx.width =  window.innerWidth -1/100*window.innerWidth ;
  ctx.height = window.innerHeight -3/100*window.innerHeight;


var tractor = new Image();
  tractor.src = 'tractor.png';
  tractor.onload = function(){

  }
  var x = 10;
function animate(){

   requestAnimationFrame(animate);
   c.clearRect(0, 0,innerWidth, innerHeight);
   c.fillStyle = '#a3b814';
   c.fillRect(x,100,100,100);
     c.drawImage(tractor ,x, 156, 97, 70);
     // x+=1;
}

animate();
