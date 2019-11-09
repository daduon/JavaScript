const url = "https://jsonplaceholder.typicode.com/posts";
async function data() {
 const response = await fetch(url);
 const store = await response.json();
 const table = document.querySelector('table');
 await store.forEach(element => {
  table.innerHTML += element;
 });
}
data();


