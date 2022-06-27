const firstPassword = document.querySelector("#passwordOne");

document.addEventListener("keydown", logText);

function logText(e) {
  console.log(e.key);
}
