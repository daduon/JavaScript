var timer = () =>{
 let time = new Date();
 let hours = (time.getHours() % 12).toString();
 let minutes = time.getMinutes();
 let seconds = time.getSeconds();
 let mili = time.getMilliseconds();
 let result = document.querySelector('h1');
 if (hours.length < 2){
  hours = '0' + hours;
 }
 if (minutes.length < 2){
  minutes = '0' + minutes;
 }
 if (seconds.length < 2){
  seconds = '0' +seconds;
 }
 if (time.getHours() < 12){
  result.innerHTML = hours+":"+minutes+":"+seconds+":"+mili+"AM";
 }else{
  result.innerHTML = hours+":"+minutes+":"+seconds+":"+mili+"PM";
 }
 if (time.getHours() ===12){
  result.innerHTML = hours+":"+minutes+":"+seconds+":"+mili+"AM";
 }
}
timer();
setInterval(timer,1);
