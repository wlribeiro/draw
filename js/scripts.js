var CANVASSELECTOR = document.getElementsByClassName("draw-zone")[0];
var isPressed = false;
const canvas = CANVASSELECTOR;
var ctx = canvas.getContext("2d");

var initialPosition = {
  x: undefined,
  y: undefined,
};

const DEFAULT_DRAW_COLOR = "white"
var drawColor = DEFAULT_DRAW_COLOR

function init() {
  console.warn("starting app");
  const canvas = CANVASSELECTOR;
  canvas.width = document.body.clientWidth; //document.width is obsolete
  canvas.height = document.body.clientHeight; //document.height is obsolete
  canvasW = canvas.width;
  canvasH = canvas.height;
}

CANVASSELECTOR.addEventListener('mousemove', getMouseMovement)
CANVASSELECTOR.addEventListener("pointerdown", getMousePointerDown);
CANVASSELECTOR.addEventListener("pointerup", getMousePointerUp);
// CANVASSELECTOR.addEventListener("pointerup", getMousePointerUp);

function getMousePointerDown(event) {
//   console.log(event);
  isPressed = true;
  initialPosition = { x: event.clientX, Y: event.clientY };
}

function getMouseMovement(event) {
  if (isPressed){
    coordinates = {x: event.clientX, y: event.clientY}
    draw(coordinates)
  }
}

function getMousePointerUp(event) {
    isPressed = false;
}

function draw(coordinates){
        ctx.beginPath();
        ctx.moveTo(initialPosition.x, initialPosition.y);
        ctx.lineTo(coordinates.x, coordinates.y);
        ctx.strokeStyle = drawColor;
        // ctx.strokeStyle = 12;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.stroke();
        ctx.closePath();

        initialPosition = { ...coordinates}
}

function setDrawColor(event){
  console.log(event)
  drawColor = event.target.value;
}

function setPencilSize(){}
