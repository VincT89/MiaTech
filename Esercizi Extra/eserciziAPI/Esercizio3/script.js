let tuttiPosts = [];

// fetch per recuperare i post
function fetchPosts() {
	fetch("https://jsonplaceholder.typicode.com/posts")
		.then(function (response) {
			return response.json();
		})
		.then(function (posts) {
			tuttiPosts = posts;
			displayRisultati(tuttiPosts);
		});
}

// Funzione per visualizzare i risultati
function displayRisultati(posts) {
	let ul = document.getElementById("risultati");
	ul.innerHTML = "";
	posts.forEach(function (post) {
		let li = document.createElement("li");
		li.textContent = post.title;
		ul.appendChild(li);
	});
	document.getElementById(
		"count"
	).textContent = `Trovati ${posts.length} risultati`;
}

// ricerca
document.getElementById("search").addEventListener("input", function (e) {
	let query = e.target.value.toLowerCase();
	let risultati = tuttiPosts.filter(function (post) {
		return post.title.toLowerCase().includes(query);
	});
	displayRisultati(risultati);
});

fetchPosts();
