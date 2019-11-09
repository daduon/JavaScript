// var changBg = () =>{
//     let red = document.getElementById("red");
//     let blue = document.getElementById("blue");
//     let teal = document.getElementById("teal");
//     if (red.checked){
//         document.body.style.background = red.value;
//     }else if(blue.checked){
//         document.body.style.background = blue.value;
//     }else {
//         document.body.style.background = teal.value;
//     }
// }
// document.addEventListener('change', changBg);

///function get value from input{
// var changeColor = () =>{
//     let input = document.getElementById("colors").value;
//     if(input !=""){
//         document.body.style.background=input;
//     }
// }
// document.addEventListener('keyup', changeColor);

// var colors = ()=>{
//     let color = document.getElementById("color").value;
//     document.body.style.background= color;
// }
// document.addEventListener('change', colors);

////function get value checkbox
var getSubject = () =>{
    let subjects = document.getElementsByClassName("subject");
    let result = "";
    for (let i=0; i<subjects.length; i++){
        if(subjects[i].checked){
            result += subjects[i].value;
        }
    }
    document.getElementById("result").innerHTML = result;
}
document.addEventListener('change', getSubject);