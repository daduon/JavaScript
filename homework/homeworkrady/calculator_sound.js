function getNumber(number){
 let getValue = document.getElementById("result");
 switch(number){
  case 1:
   getValue.value += "1";
   break;
  case 2:
   getValue.value += "2";
   break;
   case 3:
   getValue.value += "3";
   break;
   case 4:
   getValue.value += "4";
   break;
   case 5:
   getValue.value += "5";
   break;
   case 6:
   getValue.value += "6";
   break;
   case 7:
   getValue.value += "7";
   break;
   case 8:
   getValue.value += "8";
   break;
   case 9:
   getValue.value += "9";
   break;
   case 0:
   getValue.value += "0";
   break;
 }
}
function cancel (){
 document.getElementById("result").value = "";
 document.getElementById("answer").value = "";
}
function getOperator (operator){
 let getValue = document.getElementById("result");
 switch(operator){
  case '+':
   getValue.value += "+";
   break;
   case '-':
   getValue.value += "-";
   break;
   case '*':
   getValue.value += "*";
   break;
   case '/':
   getValue.value += "/";
   break;
 }
}
function calculator (){
 let getResult = document.getElementById("result");
 let getAnswer = Math.floor(eval(getResult.value));
 document.getElementById("answer").value= "="+ getAnswer;
}

var sound = document.getElementById("sound");
var btn = document.querySelector("#btn");
btn.addEventListener('click', userSpeak);
function userSpeak (){
 if('webkitSpeechRecognition'){
   let speak = new webkitSpeechRecognition();
   speak.continuous = true;
   speak.interimResults = true;
   speak.lang = "en-IN";
   speak.start();
   operators = {
     "plus":"+",
     "minus":"-",
     "multiplied":"*",
     "divide":"/",
     "divided":"/",
     "reminder":"%"
   }
   speak.onresult = function(event){
     var input = event.results[0][0].transcript;
     for (recod in operators){
       input = input.replace(recod, operators[recod]);
     }
     document.getElementById("output-result").innerHTML = input;
     setTimeout(function(){
       evaluate(input);
     },3000);
   }
 }
}

function evaluate(input){
  try{
  var outputs = document.getElementById("outputs");  
  var output = eval(input);
  document.getElementById("output-result").innerHTML = output + outputs;
  }
  catch(e){
    console.log(e);
    document.getElementById("output-result").innerHTML = "";
  }
}