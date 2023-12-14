var i = 0;
var txt = 'Hi, my name is Phatsimo Pheko.';
var speed = 150;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}