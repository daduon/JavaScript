var gameKhmer = ( ) =>{
 let mix = Math.floor(Math.random()*6+1);
 let mix1 = Math.floor(Math.random()*6+1);
 let mix2 = Math.floor(Math.random()*6+1);
 let output ='';
 let output1 ='';
 let output2 ='';
 switch(mix){
  case 1:
   output = "<img src='../img/1.png' style='width:100px;'>";
   break;
  case 2:
   output =  "<img src='../img/2.png' style='width:100px;'>";
   break;
  case 3:
   output =  "<img src='../img/3.png' style='width:100px;'>";
   break;
  case 4:
   output =  "<img src='../img/4.png' style='width:100px;'>";
   break;
  case 5: 
   output = "<img src='../img/5.png' style='width:100px;'>";
   break;
  case 6:
   output = "<img src='../img/6.png' style='width:100px;'>";
   break;

 }
 switch(mix1){
  case 1:
   outpuoutput1 =  "<img src='../img/1.png' style='width:100px;'>";
   break;
  case 2:
  output1 =  "<img src='../img/1.png' style='width:100px;'>";
   break;
  case 3:
  output1 =  "<img src='../img/1.png' style='width:100px;'>";
   break;
  case 4:
  output1 =  "<img src='../img/1.png' style='width:100px;'>";
   break;
  case 5: 
  output1 =  "<img src='../img/1.png' style='width:100px;'>";
   break;
  case 6:
  output1 =  "<img src='../img/1.png' style='width:100px;'>";
   break;

 }
 switch(mix2){
  case 1:
   output2 = "<img src='../img/1.png' style='width:100px;'>";
   break;
  case 2:
   output2 =  "<img src='../img/1.png' style='width:100px;'>";
   break;
  case 3:
   output2 =  "<img src='../img/1.png' style='width:100px;'>";
   break;
  case 4:
   output2 =  "<img src='../img/1.png' style='width:100px;'>";
   break;
  case 5: 
   output2 = "<img src='../img/1.png' style='width:100px;'>";
   break;
  case 6:
   output2 = "<img src='../img/1.png' style='width:100px;'>";
   break;

 }
 let result = document.getElementById("result");
 setTimeout( () =>{
  result.innerHTML = output + "  "+ output1 + "  "+output2;
 },1000);
  
 

}
var playGame = document.getElementById("play");
playGame.addEventListener('click', gameKhmer);
