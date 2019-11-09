var getValue = (number) => {
 let calculate = document.getElementById("output-value");
 switch (number) {
     case 1:
         calculate.innerHTML += '1';
         break;
     case 2:
         calculate.innerHTML += '2';
         break;
     case 3:
         calculate.innerHTML += '3';
         break;
     case 4:
         calculate.innerHTML += '4';
         break;
     case 5:
         calculate.innerHTML += '5';
         break;
     case 6:
         calculate.innerHTML += '6';
         break;
     case 7:
         calculate.innerHTML += '7';
         break;
     case 8:
         calculate.innerHTML += '8';
         break;
     case 9:
         calculate.innerHTML += '9';
         break;
     case 0:
         calculate.innerHTML += '0';
         break;
 }
}

var clearscreen = () => {
 document.getElementById("output-value").innerHTML = "";
}

var Operator = (operate) => {
 let calculate = document.getElementById("output-value");
 switch (operate) {
     case '+':
         calculate.innerHTML += '+';
         break;
     case '-':
         calculate.innerHTML += '-';
         break;
     case '%':
         calculate.innerHTML += '%';
         break;
     case '*':
         calculate.innerHTML += '*';
         break;
     case '/':
         calculate.innerHTML += '/';
         break;
 }
}

var equal = () => {
 let calculate = document.getElementById("output-value");
 let clickequal = Math.floor(+eval(calculate.innerHTML));
 document.getElementById("output-value").innerHTML = clickequal;
}

function clickback() {
 let cancelback = document.getElementById("output-value");
 let turenback =cancelback.innerHTML;
 if (turenback.length > 0){
     turenback = turenback.substring(0,turenback.length-1);
     cancelback.innerHTML =turenback;
 }
}

var sounds = document.getElementById("output-value");
var output = document.getElementById("microphone");
var userspeak = () =>{
 if ('webkitSpeechRecognition' in window) {
     let speak = new webkitSpeechRecognition();
     speak.continuous = true;
     speak.interimResults = true;
     speak.lang = "en-IN";
     speak.start();


     let finalspeak = "";
     speak.onresult = function(event){
         let interimTranscript = "";
         for ( let i = event.resultIndex; i < event.results.length; i++){
             let transcripts = event.results[i][0].transcript;
             transcripts.replace("\n" , "<br>")
             if (event.results[i].isFinal) {
                 finalspeak += transcripts;
             }else{
                 interimTranscript += transcripts;
             }
         }
         sounds.innerHTML = finalspeak  + interimTranscript;
         var getSounds = ()  => {
             document.getElementById("output-value").innerHTML = eval(sounds.innerHTML);
         }
         setInterval(getSounds, 2000);
     }
 }else{
     sounds.innerHTML = "Broswer no support" ;
 }
}  
output.addEventListener('click',userspeak);
