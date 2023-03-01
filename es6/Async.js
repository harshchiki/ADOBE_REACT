async function getUsers() {
   let response = await fetch("https://jsonplaceholder.typicode.com/users"); // blocked
   let data = await response.json();
   console.log(data);
}
getUsers();