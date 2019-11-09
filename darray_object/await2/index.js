////first
// const url = "https://jsonplaceholder.typicode.com/todos";

// fetch(url)

//  .then(response => response.json())
//  .then(data => {
//   data.forEach(element => {
//    if (element.id <= 20) {
//     console.log(element);
//    }
//   });
//  })

//  .catch(() => console.error("error.......") )
//   .finally(() => console.warn("run auto....") )

//secound
// async function data() {
//  const url = "https://jsonplaceholder.typicode.com/todos";
//  const response = await fetch(url);
//  const store = await response.json();
//  store.forEach(element => {
//   if (element.id <= 20) {
//    console.log(element);
//   }
//  });
// }
// data();

// const url = "https://jsonplaceholder.typicode.com/todos";
// const method = "GET";
// const syncronous = true;
// const ajax = new XMLHttpRequest();
// ajax.open(method, url, syncronous);
// ajax.onload = () => {
//  const data = JSON.parse(ajax.response);
//  const table = document.querySelector('table');
//  data.forEach(element => {
//   if (element.id <= 20) {
//    table.innerHTML += `
//                       <tr>
//                          <td>${element.id}</td>
//                          <td>${element.title}</td>
//                       </tr>
//    `
//   }
//  });
// }
// ajax.send();