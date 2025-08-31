function fetchUsers() {
	fetch("https://jsonplaceholder.typicode.com/users")
		.then(function (response) {
			return response.json();
		})
		.then(function (users) {
			// filtro solo utenti con email che termina in .biz
			let filtrati = users.filter(function (user) {
				return user.email.endsWith(".biz");
			});

			// mostro nella lista nome e email
			let lista = document.getElementById("userList");
			filtrati.forEach(function (user) {
				let li = document.createElement("li");
				li.textContent = `${user.name} - ${user.email}`;
				lista.appendChild(li);
			});

			// mostro il conteggio
			document.getElementById(
				"count"
			).textContent = `Totale utenti .biz: ${filtrati.length}`;
		})
		.catch(function (error) {
			console.error("Errore nel recupero degli utenti:", error);
			document.getElementById("count").textContent =
				"Errore nel recupero degli utenti.";
		});
}

fetchUsers();
