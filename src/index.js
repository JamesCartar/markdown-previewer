import { defaultText } from "./defaultText.js";

let editor = document.getElementById("editor");
let preview = document.getElementById("preview");
editor.value = defaultText;
let editorDiv = document.querySelector(".editor");
let previewDiv = document.querySelector(".preview");
let showHalfEditor = true;
let showEditor = true;

function updatePreview() {
  preview.innerHTML = marked.parse(editor.value);
}

function handleClick(event) {
  if (event.target.id === "editorIcon") {
    if (showHalfEditor) {
      editorDiv.style.height = "100vh";
      showHalfEditor = false;
      previewDiv.style.display = "none";
    } else if (!showHalfEditor) {
      editorDiv.style.height = "500px";
      showHalfEditor = true;
      previewDiv.style.display = "block";
    }
  } else if (event.target.id === "previewIcon") {
    if (showEditor) {
      editorDiv.style.display = "none";
      showEditor = false;
    } else {
      editorDiv.style.display = "block";
      showEditor = true;
    }
  }
}

window.updatePreview = updatePreview;
window.onload = updatePreview();
window.handleClick = handleClick;
