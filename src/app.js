const mostrarArticulos = document.getElementById("contenedorArticulos");

articulos.forEach((articulo) => {
  const div = document.createElement("div");
  div.classList.add("cards-containerArticulosPage");
  div.innerHTML += `
                    <div class="cardsArticulos">
                        <img class="imgCards" src="${articulo.imagen}">
                        <h3 class="tituloCardsArticulos">${articulo.titulo}</h3>
                        <button class="botonArticulos">Ver más</button>
                    </div>
                `;
  mostrarArticulos.appendChild(div);
});