console.log("farm");
let img = new Image();
img.src = "stockHood.jpg";

img.onload = function () {
  init();
};

function init() {
  let canvas = document.getElementsByTagName("canvas");
  console.log("canvas", canvas);
  let context = canvas[0].getContext("2d");

  context.canvas.width = context.canvas.height = clearWidth = clearHeight = 800; // Height & Width of the actual canvas->context, when set this the space when object moves gets extended (not when u apply css on id #farm-days) (or you can directly apply height and width attribute to canvas tag in html file , it works )
  console.log("contextxxx", context);
  srcWidth = 260;
  srcHeight = 253;
  desWidth = 70;
  desHeight = 70;

  function drawImage(
    srcFromWidth,
    srcFromHeight,
    srcToWidth,
    srcToHeight,
    desFromWidth,
    desFromHeight,
    desToWidth,
    desToHeight
  ) {
    context.drawImage(
      img,
      srcWidth * srcFromWidth,
      srcHeight * srcFromHeight,
      srcWidth * srcToWidth,
      srcHeight * srcToHeight,
      desWidth * desFromWidth,
      desHeight * desFromHeight,
      desWidth * desToWidth,
      desHeight * desToHeight
    );
  }
  // drawImage(0, 0, 1, 1, 0, 0, 1, 1);
  // context.clearRect(0, 0, canvas.width, canvas.height);
  // drawImage(1, 0, 1, 1, 1, 0, 1, 1);
  // context.clearRect(1, 0, canvas.width, canvas.height);
  // drawImage(2, 0, 1, 1, 2, 0, 1, 1);
  // context.clearRect(2, 0, canvas.width, canvas.height);
  // drawImage(3, 0, 1, 1, 3, 0, 1, 1);

  let i = 0;
  const loop = [0, 1, 2, 3];
  let appearCount = 0;
  let speed = 0;
  function step() {
    // console.log("inside step");
    speed++;
    if (speed < 10) {
      window.requestAnimationFrame(step); // recurse 15 times and then return back from recursion
      return;
    }
    speed = 0;
    context.clearRect(appearCount, 0, clearWidth, clearHeight);
    drawImage(loop[i], 0, 1, 1, appearCount, 0, 1, 1);

    appearCount = appearCount + 0.2;
    i++;
    if (i > 3) {
      i = 0;
    }

    if (appearCount > 10) {
      appearCount = 0;
    }
    window.requestAnimationFrame(step);
  }
  window.requestAnimationFrame(step);
}
