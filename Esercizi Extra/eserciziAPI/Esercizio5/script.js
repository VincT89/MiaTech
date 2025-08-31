let tuttiAlbum = [];
let tutteFoto = [];

// funzione per caricare gli album
function caricaAlbum() {
  fetch('https://jsonplaceholder.typicode.com/albums')
  .then(function(response) {
    return response.json();
  })
  .then(function(albums) {
    tuttiAlbum = albums;
    caricaFoto(); //carico le foto
  });
}

// funzione per caricare le foto
function caricaFoto() {
  fetch('https://jsonplaceholder.typicode.com/photos')
  .then(function(response) {
    return response.json();
  })
  .then(function(photos) {
    tutteFoto = photos;
    mostraAlbum(); //mostro gli album
  });
}

// funzione per mostrare gli album
function mostraAlbum() {
  let lista = document.getElementById('listaAlbum');
  lista.innerHTML = ''; // pulisco la lista
  
  // calcolo numero di foto per ogni album
  let conteggioFoto = {};
  tutteFoto.forEach(function(foto) {
    if (conteggioFoto[foto.albumId]) {
      conteggioFoto[foto.albumId]++;
    } else {
      conteggioFoto[foto.albumId] = 1;
    }
  });

  // trovo l'album con più foto
  let albumPopolare = tuttiAlbum[0];
  tuttiAlbum.forEach(function(album) {
    if (conteggioFoto[album.id] > (conteggioFoto[albumPopolare.id] || 0)) {
      albumPopolare = album;
    }
  });

  // mostro album popolare
  document.getElementById('albumPopolare').textContent = albumPopolare.title + ' - Foto: ' + (conteggioFoto[albumPopolare.id] || 0);

  // mostro tutti gli album
  tuttiAlbum.forEach(function(album) {
    let li = document.createElement('li');
    li.textContent = album.title + ' - Foto: ' + (conteggioFoto[album.id] || 0);
    lista.appendChild(li);
  });
}

caricaAlbum();