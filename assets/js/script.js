const noteArray = [];

const notesListHtml = document.getElementById("notes-list");
const noteCreatorHtml = document.getElementById("note-creator");

function createNoteHtml(content) {
  const noteHtml = document.createElement("article");
  noteHtml.classList.add("note");

  const noteSection = document.createElement("section");

  const noteContent = document.createElement("p");
  noteContent.classList.add("note__content");
  noteContent.innerText = content;

  noteSection.append(noteContent);

  const noteButton = document.createElement("button"); // <button></button>
  noteButton.classList.add("note__delete-btn"); //  <button class="note__delete-btn"></button>
  noteButton.innerText = "Delete"; //  <button class="note__delete-btn">Delete</button>

  noteHtml.append(noteSection, noteButton);

  return noteHtml;
}

function handlerSubmit(event) {
  event.preventDefault();

  const elements = event.target.elements;

  const inputContentHtml = elements.content;

  noteArray.push(inputContentHtml.value);

  addNoteToScreen(inputContentHtml.value);

  inputContentHtml.value = "";
}

noteCreatorHtml.addEventListener("submit", handlerSubmit);

function addNoteToScreen(content) {
  const noteHtml = createNoteHtml(content);
  notesListHtml.append(noteHtml);
}

function loadNotesToScreen() {
  for (const note of noteArray) {
    const noteHtml = createNoteHtml(note);
    notesListHtml.append(noteHtml);
  }
}

loadNotesToScreen();
