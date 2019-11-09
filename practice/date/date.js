var displayDate = () =>{
  let allDay = ["Sunday", "Monday", "Tuesday", "Wenesday", "Thursday", "Firday", "Saturday"];
  let allMonth = ["January", "February", "March", "April", "June", "July", "August", "September", "Octoer", "November", "December"];
  let date = new Date();
  let days = date.getDay();
  let months = date.getMonth();
  let years = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let day = "";
  let month = "";
  document.querySelector('h2').innerHTML = hours + ":"  +  minutes + ":" + seconds +"    "+ "PM";
  for (let i = 0;  i < allDay.length; i++){
    switch(days){
      case i:
        day = allDay[i];
        break;
    }
  }
  for (let j = 0; j <= allMonth.length; j++){
    switch(months){
      case j:
        month = allMonth[j];
        break;
    }
  }
  let dates = date.getDate().toString();
  if (dates.length < 2){
    dates = '0' + dates;
  }
  let dara = "";
  switch(dara){
    case 1:
    case 21:
    case 31:
      dara = "st";
      break;
    case 2:
    case 22:
      dara = "nd";
      break;
    case 3:
    case 23:
     dara = "rd";
     break;
    default:
      dara = "th";
      break;
  }
  document.querySelector('h1').innerHTML = day + "/  "+ dates+"  " +"<sup>" + dara + "</sup>" + "/" + month + "    "+ "/" + years;
}
 displayDate();
 setInterval(displayDate, 1000);


 var changeColor = ()=>{
  if(document.body.style.color == "teal"){
    document.body.style.color = "red";
  }else{
    document.body.style.color = "teal";
  }
 }
 changeColor();
 setInterval(changeColor, 1000);