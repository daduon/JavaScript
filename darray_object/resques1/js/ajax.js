const url = "http://dummy.restapiexample.com/api/v1/employees";

fetch(url)

 .then(response => response.json())

 .then(data => {
  const table = document.querySelector('table');
  data.forEach(element => {
   console.log(element);
   table.innerHTML += ` 
                  <tr>
                      <td> ${element.id} </td>
                      <td> ${element.employee_name} </td>
                      <td> ${element.employee_salary} </td>
                      <td> ${element.employee_age} </td>
                  </tr>
   
   `
   
  });
 })

 .catch(() => console.error("error array"))
 .finally(() => console.warn("run alway"))