///////////////////////////////////////////////////
const colorSelection = document.querySelectorAll(".color-option");

const CANAVAS_WIDTH = 800;
const CANAVAS_HEIGHT = 800;

const textInput = document.getElementById("text");
const fileInput = document.getElementById("file");

const saveBtn = document.getElementById("save-btn");
const undoBtn = document.getElementById("undo-btn");
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

previous = { x: 0, y: 0, color: 0 };
let points = [];
let startPoint = { x: 0, y: 0, color: 0 };
let pathsry = [];

function onMove(event) {
  if (isPainting) {
    previous = { x: event.offsetX, y: event.offsetY };
    // console.log(previous);
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    points.push({ x: event.offsetX, y: event.offsetY, color: ctx.strokeStyle });
    startPoint = points[0];
    lastPoint = points[points.length - 1];
    // console.log(startPoint, lastPoint);

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
  points = [];
}

function cancelPainting() {
  isPainting = false;
  pathsry.push(points);
  ctx.beginPath();
  // console.log(pathsry);

  // console.log(pathsry.length - 1);
}
function cancelPainting2() {
  isPainting = false;

  // console.log(pathsry.length - 1);
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
function onUndoClick() {
  // remove the last path from the paths array
  pathsry.splice(-1, 1);
  // draw all the paths in the paths array
  drawPaths();
}
function drawPaths() {
  // delete everything
  ctx.clearRect(0, 0, CANAVAS_WIDTH, CANAVAS_HEIGHT);
  // draw all the paths in the paths array
  pathsry.forEach((path) => {
    ctx.moveTo(path[0].x, path[0].y);
    for (let i = 1; i < path.length; i++) {
      // ctx.moveTo(path[i].x, path[i].y);
      ctx.lineTo(path[i].x, path[i].y);
      ctx.strokeStyle = path[i].color;
    }
    ctx.stroke();
    ctx.beginPath();
  });
}

canvas.addEventListener("dblclick", onDoubleClick);
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting2);
canvas.addEventListener("click", onCavasClick);
lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);
modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", onDestroyClick);
saveBtn.addEventListener("click", onSaveClick);
undoBtn.addEventListener("click", onUndoClick);
eraserBtn.addEventListener("click", onEraserClick);
fileInput.addEventListener("change", onFileChange);

colorOptions.forEach((ele) => {
  ele.addEventListener("click", onColorClick);
});
