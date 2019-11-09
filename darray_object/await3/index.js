const url = "https://jsonplaceholder.typicode.com/users";
async function data() {
 const response = await fetch(url);
 const store = await response.json();
 const table = document.querySelector('table');
 await store.forEach(element => {
  if (element.id <= 5) {
   table.innerHTML += `
      <tr>
         <td>${element.id}</td>
         <td>${element.name}</td>
         <td>${element.email}</td>
         <td>${element.username}</td>
         <td>${element.phone}</td>
      </tr>
   `
  }
 });
}
data();
