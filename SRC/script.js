// Botón de "Me gusta"
let likes = 0;
function meGusta(id) {
  likes++;
  document.getElementById('like-' + id).textContent = likes;
}

// Comentarios
document.getElementById('comentarios-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const nombre = document.getElementById('nombre').value;
    const juego = document.getElementById('juego').value;
    const serie = document.getElementById('serie').value;
    const mensaje = document.getElementById('mensaje').value;
  
    const nuevoComentario = document.createElement('p');
    nuevoComentario.innerHTML = `<strong>${nombre}</strong> dejó su mensaje:<br>
      🎮 Juego favorito: <em>${juego}</em><br>
      📺 Serie favorita: <em>${serie}</em><br>
      💬 "${mensaje}"`;
  
    document.getElementById('comentarios-lista').appendChild(nuevoComentario);
  
    // Limpiar formulario
    this.reset();
  });
  
// Juego de adivinar comida favorita
function adivinarComida(opcion) {
  const resultado = document.getElementById('resultado-juego');
  if (opcion === 'Espagueti') {
    resultado.textContent = '¡Correcto! 🍝 Es mi favorita.';
  } else {
    resultado.textContent = 'Intenta de nuevo 🙃';
  }
}
function toggleDescripcion(elemento) {
    const descripcion = elemento.querySelector('.descripcion');
    if (descripcion.style.display === 'block') {
      descripcion.style.display = 'none';
    } else {
      descripcion.style.display = 'block';
    }
  }
  