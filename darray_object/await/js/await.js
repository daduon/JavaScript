const url = "https://gorest.co.in/public-api/users?_format=json&access-token=Lry4RFgyMO8Rq_uE_5J4uP9RiNcWJPCltBDx";
async function user() {
 const response = await fetch(url); //promise [full fill, pending, reject] and future
 const data = await response.json();
 const table = document.querySelector('table');
 console.log(data._meta.success)
}
// invoke function
user();