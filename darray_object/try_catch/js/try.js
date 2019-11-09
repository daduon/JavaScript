const num1 = 10;
const num2 = 20;
try {
 if (num1 > num2) {
  console.log("fial");
 } else {
  console.log("pass");
 }
} catch{
 console.error("error");
} finally {
 console.warn("run auto");
}