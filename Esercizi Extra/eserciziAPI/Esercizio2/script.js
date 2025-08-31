function fetchTodos() {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then(function(response) {
          return response.json();
        })
        .then(function (todos) {
          // Filtra i todos completati e incompleti
          let completed = todos.filter(function(t) { return t.completed; });
          let incomplete = todos.filter(function(t) { return !t.completed; });

          // conta todos per utente
          let perUser = todos.reduce(function(acc, t) {
            acc[t.userId] = (acc[t.userId] || 0) + 1;
            return acc;
          }, {});

          // trova l'utente con più todos
          let topUser = Object.keys(perUser).reduce(function(maxUser, currentUser) {
            return perUser[currentUser] > perUser[maxUser] ? currentUser : maxUser;
          });

          let statsDiv = document.getElementById("stats");
          statsDiv.innerHTML = `
            <p>Totale Todos: ${todos.length}</p>
            <p>Completati: ${completed.length}</p>
            <p>Incompleti: ${incomplete.length}</p>
            <p>Utente con più todos: User ${topUser} (${perUser[topUser]} todos)</p>
          `;
        });
    }

    fetchTodos();