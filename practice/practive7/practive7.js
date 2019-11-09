let circle = document.getElementById("circle").getContext("2d");
circle.fillStyle = "red";
circle.arc(100, 100, 50, 0, Math.PI*2,true);
circle.stroke();
circle.fill();

let circle2 = document.getElementById("circle2").getContext("2d");
circle2.fillStyle = "red";
circle2.rect(100, 100, 200, 100);
circle2.stroke();
circle2.fill();