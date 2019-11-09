const url = "https://jsonplaceholder.typicode.com/users";

const method = "GET";

const sycrs = true;

const loopinloop = new XMLHttpRequest();

loopinloop.open(method, url, sycrs);

loopinloop.onload = () => {
  const data = JSON.parse(loopinloop.response);
  const table = document.querySelector("table");
  data.forEach(element => {
    table.innerHTML += `
                          <tr>
                              <td> ${element.id}</td>
                              <td> ${element.name}</td>
                              <td> ${element.username}</td>
                              <td> ${element.email}</td>
                              <td>
                                    ${element.address.zipcode}
                                   <td> ${element.address.city}
                                   <td> ${element.address.suite}
                                   <td> ${element.address.street}
                                   <td> ${element.address.geo}
                                  
                              </td>
                          </tr>
                          `
  });
}
loopinloop.send();