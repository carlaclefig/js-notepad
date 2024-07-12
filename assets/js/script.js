const notesList = document.getElementById("notes-list");

const noteObj = {
  title: "My shopping list",
  content: "a. Milk b. Tomato c. Onion",
  color: "#FF0000",
};

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

notesList.append(noteHtml);
