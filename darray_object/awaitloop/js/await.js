const url = "https://jsonplaceholder.typicode.com/users";
 
async function username () {
 const response = await fetch(url);
 const data = await response.json();
 const table = document.querySelector('table');
 await data.forEach(element => {
  if (element.id <= 5) {
   table.innerHTML += `
                <tr>
                  <td> ${element.id}</td>
                  <td> ${element.username}</td>
                  <td> ${element.email}</td>
                  <td> ${element.address.street}</td>
                  <td> ${element.address.zipcode}</td>
                  <td> ${element.address.geo.lng}</td>
                </tr>
   `
  }
 });
}
username();