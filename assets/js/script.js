let notesArray = [];

const savedNotesString = localStorage.getItem("notes"); // read from locale storage
const savedNotes = JSON.parse(savedNotesString); // convert string to array

if (savedNotes !== null) {
  notesArray = notesArray.concat(savedNotes); // add savedNotes to notesArray
}

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

  noteButton.addEventListener("click", function (_event) {
    notesArray = notesArray.filter(function (element) {
      return element !== content;
    });

    loadNotesToScreen();
  });

  noteHtml.append(noteSection, noteButton);

  return noteHtml;
}

noteCreatorHtml.addEventListener("submit", function (event) {
  event.preventDefault();

  const elements = event.target.elements;

  const inputContentHtml = elements.content;

  if (notesArray.includes(inputContentHtml.value)) {
    window.alert("This content already exists");

    return;
  }

  notesArray.push(inputContentHtml.value);

  const notesString = JSON.stringify(notesArray); // convert array to string

  localStorage.setItem("notes", notesString); // save in locale storage

  loadNotesToScreen();

  inputContentHtml.value = "";
});

function loadNotesToScreen() {
  notesListHtml.innerHTML = "";

  for (const note of notesArray) {
    const noteHtml = createNoteHtml(note);
    notesListHtml.append(noteHtml);
  }
}

loadNotesToScreen();
