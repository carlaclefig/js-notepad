let notasGuardadas = [];

const notasGuardadasEnString = localStorage.getItem("notas");
const notasGuardadasEnArray = JSON.parse(notasGuardadasEnString);

if (notasGuardadasEnArray !== null) {
  notasGuardadas = notasGuardadas.concat(notasGuardadasEnArray);
}

const creadorDeNotasHtml = document.querySelector(".note-creator");
const listaDeNotasHtml = document.querySelector(".notes-list");

function crearNota(contenidoDeLaNota) {
  const notaHtml = document.createElement("article");
  notaHtml.classList.add("note");

  const seccionDeNotaHtml = document.createElement("section");
  const contenidoDeNotaHtml = document.createElement("p");
  contenidoDeNotaHtml.classList.add("note__content");
  contenidoDeNotaHtml.innerText = contenidoDeLaNota;

  seccionDeNotaHtml.append(contenidoDeNotaHtml);

  const botonEliminarHtml = document.createElement("button");
  botonEliminarHtml.classList.add("note__delete-btn");
  botonEliminarHtml.innerText = "Borrar";

  botonEliminarHtml.addEventListener("click", function (evento) {
    evento.preventDefault();

    const notasFiltradas = notasGuardadas.filter(function (elemento) {
      return elemento !== contenidoDeLaNota;
    });

    notasGuardadas = notasFiltradas;
    const stringNotas = JSON.stringify(notasGuardadas);
    localStorage.setItem("notas", stringNotas);

    cargarNotasEnPantalla();
  });

  notaHtml.append(seccionDeNotaHtml, botonEliminarHtml);

  return notaHtml;
}

creadorDeNotasHtml.addEventListener("submit", function (event) {
  event.preventDefault();

  const elements = event.target.elements;
  const textAreaHtml = elements.noteContent;

  if (notasGuardadas.includes(textAreaHtml.value)) {
    window.alert("Este contenido ya existe");

    return;
  }

  notasGuardadas.push(textAreaHtml.value);
  const stringNotas = JSON.stringify(notasGuardadas);
  localStorage.setItem("notas", stringNotas);

  cargarNotasEnPantalla();

  textAreaHtml.value = "";
});

function cargarNotasEnPantalla() {
  listaDeNotasHtml.innerHTML = "";

  for (const nota of notasGuardadas) {
    const notaHtml = crearNota(nota);
    listaDeNotasHtml.append(notaHtml);
  }
}

cargarNotasEnPantalla();
