// const url = "https://jsonplaceholder.typicode.com/users";
// async function data() {
//  const response = await fetch(url);
//  const data = await response.json();
//  const table = document.querySelector('table');
//  data.forEach(element => {
//   // const { name } = element.company;
//   if (element.company.name == "Johns Group"){
//    const { id, username, email, phone, website, company} = element;
//    table.innerHTML += `
//    <tr>
//               <td>${id}</td>
//               <td>${username}</td>
//               <td>${email}</td>
//               <td>${phone}</td>
//               <td>${website}</td>
//               <td>${company.name}</td>  
//    </tr>`
//   }
//  });
// }
// data();
const url = "https://jsonplaceholder.typicode.com/users";
async function data() {
 const response = await fetch(url);
 const data = await response.json();
 const table = document.querySelector('table');
 data.forEach(element => {

  if (element.id > 5 && element.id % 2 == 0){
   const { id, username, email, phone, website } = element;
   
   table.innerHTML += `
   <tr>
              <td>${id}</td>
              <td>${username}</td>
              <td>${email}</td>
              <td>${phone}</td>
              <td>${website}</td>
   </tr>`
  }
 });
}
data();