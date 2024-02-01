var i = 0;
var txt = 'Hi, my name is Phatsimo Pheko.';
var speed = 150;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    startBlinkingCursor();
  }
}

function startBlinkingCursor() {
  var cursorElement = document.getElementById("typing-text");
  cursorElement.innerHTML = cursorElement.innerHTML.slice(0); // Remove the last character (the '|')
  cursorElement.classList.add("blinking-cursor");
}

function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdownContent");
  if (dropdownContent.style.maxHeight) {
    dropdownContent.style.maxHeight = null;
  } else {
    dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
  }
}


typeWriter();