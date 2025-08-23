// UTILIZZARE UN PROXY PER BYPASSARE CORS
const api = "https://api.publicapis.org/entries";
const proxy = "https://localhost:3000";

fetch(`${proxy}/?url=${encodeURIComponent(api)}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));

// UTILIZZARE UN API CHE SUPPORTA CORS
const corsApi = "https://api.publicapis.org/entries";

fetch(corsApi)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));

  