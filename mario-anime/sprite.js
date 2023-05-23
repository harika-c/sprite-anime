console.log("hello");
const img = new Image();
img.src =
  "https://opengameart.org/sites/default/files/styles/medium/public/Preview-Green-Cap-Character-16x18.png";

img.onload = function () {
  init();
};
const width = 57;
const height = 63;
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
console.log(context);

function init() {
  function drawFrame(xFrame, xCanvas) {
    context.drawImage(
      img,
      width * xFrame,
      0,
      width,
      height,
      width * xCanvas,
      0,
      width,
      height
    );
  }

  // drawFrame(0, 0);
  // drawFrame(width, width);
  // drawFrame(0, width * 2);
  // drawFrame(width * 2, width * 3);

  const cycleLoop = [0, 1, 0, 2];
  let currentLoopIndex = 0;
  let frameCount = 0;

  function step() {
    frameCount++;
    if (frameCount < 15) {
      console.log("before", frameCount);
      window.requestAnimationFrame(step);
      console.log("innnnnn");
      return;
    }
    frameCount = 0;
    console.log("next frame");
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawFrame(cycleLoop[currentLoopIndex], 0);
    currentLoopIndex++;

    if (currentLoopIndex >= cycleLoop.length) {
      currentLoopIndex = 0;
    }
    window.requestAnimationFrame(step);
  }
  window.requestAnimationFrame(step);
}
