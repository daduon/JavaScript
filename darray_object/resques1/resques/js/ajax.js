const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)

 .then(response => response.json())

 .then(data => {
  const card = document.querySelector("#card");
  data.forEach(el => {
   if (data.id <= 10) {
    card.innerHTML += `
       <div class="card mt-4">
          <div class="card-header> ${el.title}</div>
          <div class="card-body> ${el.body}</div>
    `;
   }
  });
 })