var changeBackground = () => {
 let tiem = new Date();
 let hours = (tiem.getHours() % 12).toString();
 let minutes = tiem.getMinutes().toString();
 let seconds = tiem.getSeconds().toString();
 if (hours.length < 2) {
  hours = '0' + hours;
 }
 if (minutes.length < 2) {
  minutes = '0' + minutes;
 }
 if (seconds.length < 2) {
  seconds = '0' + seconds;
 }
 document.body.style.background = "#" + hours + minutes + seconds;
 if (document.body.style.color == "red") {
  document.body.style.color = "pink";
 } else {
  document.body.style.color = "red";
 }
 document.querySelector('h1').innerHTML = hours + ":" + minutes + ":" + seconds;
}
changeBackground();
setInterval(changeBackground, 1000);