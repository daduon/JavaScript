var displayDate = () =>{
 let allDay = ["sunday", "monday","toueday", "wenesday","thursday", "firday", "saturday" ];
 let allMonth = ["january", "fabruary", "march", "april", "may", "june", "july", "august", "september","october","november","december"];
 let myDate = new Date();
 let days = myDate.getDay();
 let months = myDate.getMonth();
 let years = myDate.getFullYear();
 let hours = (myDate.getHours() % 12).toString();
 let minutes = myDate.getMinutes().toString();
 let seconds = myDate.getSeconds().toString();
 let mili = myDate.getMilliseconds().toString();
 let day = "";
 let month = "";
 let output= document.querySelector('h2');
  for (let i = 0; i <allDay.length; i++){
    switch(days){
      case i:
        day = allDay[i];
        break;
 }
}
for (let j =0; j <= allMonth.length; j++){
 switch(months){
  case j:
   month = allMonth[j];
   break;
 }
}

let yes = myDate.getDate().toString();
if(yes.length < 2){
 yes = '0'+yes;
}
let da ="";
 switch(da){
  case 1:
  case 21:
  case 31:
   da = "st";
   break;
  case 2:
  case 22:
   da = "nd";
   break;
  case 3:
  case 23:
   da = "rd";
  default:
   da = "th";
 }
if(hours.getHours <2){
 hours = '0'+hours;
}
if(minutes.getMinutes <2){
 minutes = '0'+ minutes;
}
if(seconds.getSeconds){
 seconds = '0'+seconds;
}
if(mili.getMilliseconds<2){
 mili = '0'+ mili;
}
if (myDate.getHours() < 12){
  document.querySelector("h1").innerHTML =   hours +":"+minutes+":"+seconds+":"+"AM"+mili;
}else{
  document.querySelector("h1").innerHTML =   hours +":"+minutes+":"+seconds+":"+"PM"+mili;
}
//display  
if(myDate.getHours() < 12){
 document.querySelector("h3").innerHTML = "Morning";
}else if(myDate.getHours() < 16){
  document.querySelector("h3").innerHTML = "Afternoon!";
}else if(myDate.getHours() < 20 ){
  document.querySelector("h3").innerHTML = "Evening";
}else if (myDate.getHours() < 24){
  document.querySelector("h3").innerHTML = " night";
}
output.innerHTML =day +"/"+yes+"<sup>"+da+"</sup>"+month+"/"+years;
}
displayDate();
setInterval(displayDate, 1);

var changeColor = () =>{
if(document.querySelector('h1').style.color == "teal"){
  document.querySelector('h1').style.color = "red";
 }else{
  document.querySelector('h1').style.color = "teal";
 }
}
changeColor();
setInterval(changeColor, 1000)