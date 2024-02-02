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
  var dropbtn = document.getElementById("dropbtn");

  if (dropdownContent.style.maxHeight) {
    dropdownContent.style.maxHeight = null;
    dropbtn.style.backgroundImage = 'url("menu-icon.png")'; // Change to menu image
  } else {
    dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
    dropbtn.style.backgroundImage = 'url("close.png")'; // Change to cancel image
  }
}

document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", function() {
      var fromTop = window.scrollY + 5;
      var navLinks = document.querySelectorAll(".nav-link");

      navLinks.forEach(function(link) {
          var section = document.querySelector(link.hash);

          if (
              section.offsetTop <= fromTop &&
              section.offsetTop + section.offsetHeight > fromTop
          ) {
              link.classList.add("active");
          } else {
              link.classList.remove("active");
          }
      });
  });
});


typeWriter();