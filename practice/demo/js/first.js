// //Regular function or name function
// function message(){
//     console.log("Good morning");
// }
// message();

// //anonymous

// var anony = function(){
//     console.log("Hello anony");
// }
// anony();

// //Immediately invoke
 
// (function(){
//     console.log("Hello immediately");

// }())
// //function expression
// var sum = function add(){
//     console.log("Hello expression");
// }
// sum();
// //arrow
// var more = () =>{
//     console.log("Hello arrow");
// }
// more();



/////////////////////////////////////////////

// var disply = (name, age, province) =>{
//     console.log(name, age, province);
// }
// disply("duonda", 22, "Banteaymeanchey");

//write arrow function to create clock
// var watch = () =>{
//     let day = new Date();
//     let hours = day.getHours();
//     let minutes= day.getMinutes();
//     let seconds = day.getSeconds();
//     let time = document.getElementById("time");
//     time.innerHTML = hours + ":" + minutes + ":" + seconds;
// }
// setInterval(watch, 1000);

// var teal = () =>{
//     document.body.style.background="teal";
// }
// document.addEventListener('click', teal);
// var red = () =>{
//     document.body.style.background="red";
// }
// document.addEventListener('dblclick', red);

var changeBg = () =>{
    if (document.body.style.background == "teal"){
        document.body.style.background = "red";
    }else{
        document.body.style.background = "teal";
    }
}  
setInterval(changeBg,500);