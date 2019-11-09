// const url = "https://jsonplaceholder.typicode.com/users";
// async function data() {
//  const syn = await fetch(url);
//  const result = await syn.json();
//  const table = document.querySelector('table');
//  result.forEach(element => {
//   if (element.id%2 == 0){
//    table.innerHTML += `
//       <tr>
//          <td>${element.id}</td>
//          <td>${element.name}</td>
//       </tr>
//    `
//   }
//  });
// }
// data();

// const url = "https://jsonplaceholder.typicode.com/users";

// fetch(url)
//  .then(response => response.json())
//  .then(data => {
//   data.forEach(element => {
//    if (element.id % 2 == 0) {
//     console.log(element);
//    }
//   });
//  })

// const url = "https://jsonplaceholder.typicode.com/users";
// const method = "GET";
// const syncrosnous = true;
// const ajax = new XMLHttpRequest();
// ajax.open(method, url, syncrosnous);
// ajax.onload = () => {
//  const result = JSON.parse(ajax.response);
//  const table = document.querySelector("table");
//  result.forEach(element => {
//   if (element.id > 1 && element.id < 9) {
//    table.innerHTML += `
//     <tr>
//         <td>${element.id}</td>
//         <td>${element.name}</td>
//     </tr>
//    `
//   }
//  });
// }
// ajax.send();