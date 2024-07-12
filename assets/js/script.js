// const noteObj = {
//   title: "My new note",
//   content: "This is the note content",
//   color: "#EABAED",
// };

const noteArray = [];

const notesListHtml = document.getElementById("notes-list");
const noteCreatorHtml = document.getElementById("note-creator");

function createNoteHtml(noteObj) {
  const noteHtml = document.createElement("article");
  noteHtml.classList.add("note");
  noteHtml.style.backgroundColor = noteObj.color;

  const noteHeader = document.createElement("header");

  const noteTitle = document.createElement("h3");
  noteTitle.classList.add("note__title");
  noteTitle.innerText = noteObj.title;

  noteHeader.append(noteTitle);

  const noteSection = document.createElement("section");

  const noteContent = document.createElement("p");
  noteContent.classList.add("note__content");
  noteContent.innerText = noteObj.content;

  noteSection.append(noteContent);

  const noteButton = document.createElement("button"); // <button></button>
  noteButton.classList.add("note__delete-btn"); //  <button class="note__delete-btn"></button>
  noteButton.innerText = "Delete"; //  <button class="note__delete-btn">Delete</button>

  noteHtml.append(noteHeader, noteSection, noteButton);

  return noteHtml;
}

function handlerSubmit(event) {
  event.preventDefault();
  const elements = event.target.elements;

  const titleHtml = elements.title; // input name
  const contentHtml = elements.content;
  const colorHtml = elements.color;

  const note = {
    title: titleHtml.value,
    content: contentHtml.value,
    color: colorHtml.value,
  };

  noteArray.push(note);
  localStorage.setItem;
  loadNotesToScreen();
}

noteCreatorHtml.addEventListener("submit", handlerSubmit);

function addNoteToScreen(note) {
  const noteHtml = createNoteHtml(note);
  notesListHtml.append(noteHtml);
}

function loadNotesToScreen() {
  for (const note of noteArray) {
    const noteHtml = createNoteHtml(note);
    notesListHtml.append(noteHtml);
  }
}

loadNotesToScreen();
