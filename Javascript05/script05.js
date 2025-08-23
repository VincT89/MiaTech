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

// GESTIRE I COOKIES
// salva il cookie
document.cookie = "utente=mario; path=/";
console.log("Cookie:", document.cookie);
// recupera il cookie
let cookies = document.cookie.split("; ");
for(let c of cookies) {
  let [name, value] = c.split("=");
  console.log(`Cookie Name: ${name}, Cookie Value: ${value}`);
};
// elimina il cookie
document.cookie = "utente=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
console.log("Cookie eliminato:", document.cookie);


// UTILIZZARE IL LOCALSTORAGE
// salva il dato
localStorage.setItem("utente", "mario");
console.log("Dato salvato:", localStorage.getItem("utente"));
// recupera il dato
console.log("Dato recuperato:", localStorage.getItem("utente"));
// elimina il dato
localStorage.removeItem("utente");
console.log("Dato eliminato:", localStorage.getItem("utente"));
