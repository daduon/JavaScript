var displayDate = () =>{
 let allDay = ["Sunday", "Monday", "Tuesday", "Wenesday", "Thursday", "Firday", "Saturday"];
 let allMonth = ["January", "February", "March", "April", "June", "July", "August", "September", "Octoer", "November", "December"];

 let myDate = new Date();
 let days = myDate.getDay();
 let months = myDate.getMonth();
 let year = myDate.getFullYear();
 let hours = myDate.getHours();
 let minutes = myDate.getMinutes();
 let seconds = myDate.getSeconds();
 let day = "";
 let month = "";
document.querySelector('h2').innerHTML = hours + ":" + minutes + ":" + seconds + "   " + "AM";

 for (let i = 0; i < allDay.length; i++){
  switch(days){
   case i:
    day = allDay[i];
    break;
  }
 }

 for (let i= 0; i <= allMonth.length; i++){
  switch(months){
   case i:
    month = allMonth[i];
    break;
  }
 }
 let date = myDate.getDate().toString();
 if (date.length < 2){
  date = '0' + date;
 }
 let pot = "";
 switch(myDate.getDate()){
  case 1:
   case 21:
    case 31:
     pot = "st";
     break;
  case 2:
   case 22:
    pot = "nd";
    break;
  case 3:
   case 23:
     pot = "rd";
     break;
     default:
       pot = "th";
       break;

 }
 document.querySelector('h1').innerHTML = day  + "  " +date + "" +"<sup>" + pot +" </sup>" +"    "+ " /"+"    " + month + "   " + "/" + year;
}
displayDate();
setInterval(displayDate, 1000);

var changeBg  = () =>{
  if(document.body.style.background == "teal"){
    document.body.style.background= "red";
  }else{
    document.body.style.background="teal";
  }
}
setInterval(changeBg, 5000);