var changeWebsite = () => {
 let time = new Date();
 let hours = (time.getHours() % 12).toString();
 let minutes = time.getMinutes().toString();
 let seconds = time.getSeconds().toString();
 if (hours.length < 2) {
  hours = '0' + hours;
 }
 if (minutes.length < 2) {
  minutes = '0' + minutes;
 }
 if (seconds.length < 2) {
  seconds = '0' + seconds;
 }

 document.querySelector('h1').innerHTML = hours +":"+ minutes + ":" + seconds;
}
changeWebsite();
setInterval(changeWebsite, 1000);