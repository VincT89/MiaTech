let primiPost = [];
let tuttiCommenti = [];

// funzione per caricare i post
function caricaPost() {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(function(response) {
    return response.json();
  })
  .then(function(posts) {
    primiPost = posts.slice(0, 10); // prendo solo i primi 10 post
    caricaCommenti();
  });
}

// funzione per caricare i commenti
function caricaCommenti() {
  fetch('https://jsonplaceholder.typicode.com/comments')
  .then(function(response) {
    return response.json();
  })
  .then(function(comments) {
    tuttiCommenti = comments;
    mostraCommenti();
  });
}

// funzione per mostrare i commenti
function mostraCommenti() {
  let lista = document.getElementById('listaPost');
  lista.innerHTML = ''; // pulisco la lista
  primiPost.forEach(function (post) {
    // conto i commenti per ogni post
    let postComments = tuttiCommenti.filter(function (comment) {
      return comment.postId === post.id;
    }).length;
    let li = document.createElement('li');
    li.textContent = post.title + ' - Commenti: ' + postComments;
    lista.appendChild(li);
  });
}

caricaPost();