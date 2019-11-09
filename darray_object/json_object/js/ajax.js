const url = "src/data.json";

fetch(url)


 .then(response => response.json())

 .then(data => {
  const table = document.querySelector("table");
  data.forEach(item => {
   if (item.id <= 100) {
    table.innerHTML += `
    <tr>
    <td>${item.id}</td>
    <td>${item.first_name}</td>
    <td>${item.last_name}</td>
    <td>${item.email}</td>
    <td>${item.gen}</td>
    </tr>
    `;
    
    
}
});
 })