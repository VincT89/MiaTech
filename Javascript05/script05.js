// UTILIZZARE UN PROXY PER BYPASSARE CORS
const api = "https://api.publicapis.org/entries";
const proxy = "https://localhost:3000";

fetch(`${proxy}/?url=${encodeURIComponent(api)}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));

