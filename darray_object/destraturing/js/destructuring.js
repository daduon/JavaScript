const url = "https://jsonplaceholder.typicode.com/todos";

const method = "GET";

const sycrs = true;

const destruc = new XMLHttpRequest();

destruc.open(method, url, sycrs);

destruc.onload = () => {
 const data = JSON.parse(destruc.response);
 const table = document.querySelector("table");
 data.forEach(element => {
  if (element.id <= 10) {
    table.innerHTML += `
                     <tr>
                       <td> ${element.id}
                       <td> ${element.title}
                       <td> ${element.completed}
                     </tr>
  
  `
  }
 
 });
}
destruc.send();