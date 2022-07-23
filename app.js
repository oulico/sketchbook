// const canvas = document.querySelector("canvas");
// const ctx = canvas.getContext("2d");
// canvas.width = 800;
// canvas.height = 800;

// ctx.rect(50, 50, 100, 100);
// ctx.rect(150, 150, 100, 100);
// ctx.rect(250, 250, 100, 100);
// ctx.fill();

// ctx.beginPath();
// ctx.rect(350, 350, 100, 100);
// ctx.fillStyle = "red";

// ctx.fill();
/////////////////////////////////////////////////////////////
// const lineWidth = document.getElementById("brushWidth");

// const canvas = document.querySelector("canvas");
// const ctx = canvas.getContext("2d");

// canvas.width = 800;
// canvas.height = 800;

/////////////////////////////////////////////////////////////

// ctx.brushWidth = lineWidth.value;
// ctx.fillRect(200, 200, 50, 200);
// ctx.fillRect(400, 200, 50, 200);
// ctx.lineWidth = "2";
// ctx.strokeRect(300, 300, 50, 100);
// ctx.fillRect(200, 200, 200, 20);
// ctx.moveTo(300, 100);
// ctx.lineTo(100, 300);
// ctx.stroke();
// ctx.moveTo(300, 100);
// ctx.lineTo(600, 300);
// ctx.stroke();
// ctx.lineTo(800, 300);
// ctx.stroke();
// ctx.lineTo(500, 100);
// ctx.stroke();
// ctx.lineTo(300, 100);
// ctx.fill();
// ctx.moveTo(100, 300);
// ctx.lineTo(100, 400);
// ctx.stroke();
// ctx.lineTo(800, 400);
// ctx.stroke();
// ctx.lineTo(800, 300);
// ctx.stroke();
// ctx.moveTo(600, 300);
// ctx.lineTo(600, 400);
// ctx.stroke();

// ctx.fillRect(215 - 40, 200 - 40, 15, 100);
// ctx.fillRect(350 - 40, 200 - 40, 15, 100);
// ctx.fillRect(260 - 40, 200 - 40, 60, 200);

// ctx.arc(250, 100, 50, 0, 2 * Math.PI);
// ctx.fill();

// ctx.beginPath();
// ctx.fillStyle = "white";
// ctx.arc(270, 100, 8, -0.5, 1 * Math.PI);
// ctx.fill();
// ctx.beginPath();

// ctx.fillStyle = "white";
// ctx.arc(220, 100, 8, 0.5, 1 * Math.PI);
// ctx.fill();

/******************************************
 그림그리기
******************************************/
// const colors = [
//   "#ff3838",
//   "#ffb8b8",
//   "#c56cf0",
//   "#ff9f1a",
//   "#fff200",
//   "#32ff7e",
//   "#7efff5",
// ];

// function drawLine(move) {
//   let moveX = move.offsetX;
//   let moveY = move.offsetY;

//   ctx.lineTo(moveX, moveY);
//   ctx.stroke();
// }

// let isSecondClick = false;
// function onClick(click) {
//   if (isSecondClick === false) {
//     let valueX = click.offsetX;
//     let valueY = click.offsetY;
//     ctx.moveTo(valueX, valueY);
//     isSecondClick = true;
//     canvas.addEventListener("mousemove", drawLine);
//     drawLine();
//   }
//   if (isSecondClick) {
//     isSecondClick = false;
//     function stopDraw(e) {
//       e.preventDefault();
//     }
//     canvas.addEventListener("mousemove", stopDraw);

//   }
// }

// canvas.addEventListener("click", onClick);

///////////////////////////////////////////////////////////////

// ctx.lineWidth = 2;
// ctx.moveTo(0, 0); // 이래야 두번클릭하지 않아도 바로 그려짐( 대신 0,0에서부터 그려짐)

// const colors = [
//   "#ff3838",
//   "#ffb8b8",
//   "#c56cf0",
//   "#ff9f1a",
//   "#fff200",
//   "#32ff7e",
//   "#7efff5",
// ];

// function stopDraw() {
//   ctx.beginPath();
// }

// function drawLine(event) {
//   ctx.lineTo(event.offsetX, event.offsetY);
//   ctx.stroke();
// }

// canvas.addEventListener("mousedown", (event) => {
//   if (event) {
//     ctx.moveTo(event.offsetX, event.offsetY);
//     canvas.addEventListener("mousemove", drawLine);
//   }
// });

// console.log(moveX, moveY);
////////////////////////////////////////////////////////////////////////////

// const colors = ["#7A2F49", "#FBABC7", "#FA5F95", "#7A002A", "#C74C77"];
// const colors2 = ["#2F7A34", "#ABFBB0", "#5FFA69", "#197A1F", "#4CC754"];

// function onMousemove(event) {
//   ctx.beginPath();
//   ctx.moveTo(0, 0);
//   const color = colors[Math.floor(Math.random() * colors.length)];
//   ctx.strokeStyle = color;
//   ctx.lineTo(event.offsetX, event.offsetY);
//   ctx.stroke();
// }

// function onMouseMoveCounter(event) {
//   ctx.beginPath();
//   ctx.moveTo(800, 800);
//   const color2 = colors2[Math.floor(Math.random() * colors2.length)];
//   ctx.strokeStyle = color2;
//   ctx.lineTo(event.offsetX, event.offsetY);
//   ctx.stroke();
// }

// canvas.addEventListener("mousemove", onMousemove);
// canvas.addEventListener("mousemove", onMouseMoveCounter);

///////////////////////////////////////////////////////////////////////

// ctx.lineWidth = 2;
// function onClick(event) {
//   ctx.lineTo(event.offsetX, event.offsetY);
//   ctx.stroke();
// }

// canvas.addEventListener("click", onClick);
/////////////////////////////////////////////////////

// ctx.lineWidth = 2;
// let isPainting = false;
// function onMove(event) {
//   if (isPainting) {
//     ctx.lineTo(event.offsetX, event.offsetY);
//     ctx.stroke();
//     return;
//   }
//   ctx.moveTo(event.offsetX, event.offsetY);
// }
// function onMouseDown() {
//   isPainting = true;
// }
// function onMouseUp(event) {
//   isPainting = false;
// }

// canvas.addEventListener("mousemove", onMove);
// canvas.addEventListener("mousedown", onMouseDown);
// canvas.addEventListener("mouseup", onMouseUp);

////////////////////////////////////////////////////////////

// ctx.lineWidth = lineWidth.value;

// let isMouseDown = false;

// function drawLine(event) {
//   if (isMouseDown) {
//     ctx.lineTo(event.offsetX, event.offsetY);
//     ctx.stroke();
//     console.log(event);
//     return;
//   }
//   ctx.moveTo(event.offsetX, event.offsetY);
// }
// function startPoint() {
//   isMouseDown = true;
// }
// function endPoint() {
//   isMouseDown = false;
//   ctx.beginPath();
// }
// function onLineWidthChange(event) {
//   console.log(event.target.value);
//   ctx.lineWidth = event.target.value;
// }

// document.addEventListener("mousemove", drawLine);
// document.addEventListener("mousedown", startPoint);
// document.addEventListener("mouseup", endPoint);
// document.addEventListener("mouseleave", endPoint);

// lineWidth.addEventListener("change", onLineWidthChange);

///////////////////////////////////////////////////
const colorSelection = document.querySelectorAll(".color-option");

const CANAVAS_WIDTH = 800;
const CANAVAS_HEIGHT = 800;

const textInput = document.getElementById("text");
const fileInput = document.getElementById("file");

const saveBtn = document.getElementById("save-btn");

const eraserBtn = document.getElementById("eraser-btn");
const destroyBtn = document.getElementById("destroy-btn");
const modeBtn = document.getElementById("mode-btn");
const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);
const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = CANAVAS_WIDTH;
canvas.height = CANAVAS_HEIGHT;
ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";
let isPainting = false;
let isFilling = false;
let isErasing = false;

function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  if (isErasing) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 10;
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}
function startPainting() {
  isPainting = true;
}

function cancelPainting() {
  isPainting = false;

  ctx.beginPath();
}

function onLineWidthChange(event) {
  console.log(event.target.value);
  ctx.lineWidth = event.target.value;
}
function onColorChange(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}

function setColor(colorCode) {
  ctx.strokeStyle = colorCode;
  ctx.fillStyle = colorCode;
  color.value = colorCode;
}

function onColorClick(event) {
  console.log(event.target);
  const colorCode = event.target.dataset.color;
  setColor(colorCode);
}

function onModeClick(event) {
  if (isFilling) {
    isFilling = false;
    modeBtn.innerText = "Background color";
  } else {
    isFilling = true;
    modeBtn.innerText = "Draw";
  }
}

function onCavasClick() {
  if (isFilling) {
    ctx.fillRect(0, 0, CANAVAS_WIDTH, CANAVAS_HEIGHT);
  }
}
function onDestroyClick() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANAVAS_WIDTH, CANAVAS_HEIGHT);
}
function onEraserClick() {
  ctx.strokeStyle = "white";
  isFilling = false;
  modeBtn.innerText = "Fill";
}
function onFileChange(event) {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  const image = new Image();
  image.src = url;
  image.onload = function () {
    ctx.drawImage(image, 0, 0, CANAVAS_WIDTH, CANAVAS_HEIGHT);
    fileInput.value = null;
  };
}
function onDoubleClick(event) {
  ctx.save();
  const text = textInput.value;
  ctx.font = "48px serif";
  ctx.lineWidth = 1;
  ctx.fillText(text, event.offsetX, event.offsetY);
  ctx.restore();
}

function onSaveClick() {
  const url = canvas.toDataURL();
  const a = document.createElement("a");
  a.href = url;
  a.download = "myDrawing.png";
  a.click();
}

canvas.addEventListener("dblclick", onDoubleClick);
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCavasClick);
lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);
modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", onDestroyClick);
saveBtn.addEventListener("click", onSaveClick);

eraserBtn.addEventListener("click", onEraserClick);
fileInput.addEventListener("change", onFileChange);

colorOptions.forEach((ele) => {
  ele.addEventListener("click", onColorClick);
});
