const mostrarArticulos = document.getElementById('contenedorArticulos');

const div = document.createElement('div');
div.classList.add('cards-containerArticulos');
div.innerHTML += `
                    <div class="cardsArticulos">
                        <img class="imgCards" src="/public/images/articulo1.png">
                        <h3 class="tituloCardsArticulos">Blanqueo de capitales – ¿conviene o no? cuestiones prácticas</h3>
                        <p></p>
                    </div>
                `;
mostrarArticulos.appendChild(div);