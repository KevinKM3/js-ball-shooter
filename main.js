const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let mouse = {
  x: canvas.width / 2,
  y: canvas.height / 2,
};

addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;

  console.log(mouse);
});
