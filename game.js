let boardState = generateGrid(10);
let drawnBoard = drawGrid(boardState);

const market = document.getElementById("market");
const board = document.getElementById("board");

board.appendChild(drawnBoard);

let currentColorIndex = 0;
let selectedShape = [[]];

board.addEventListener("mouseup", e => {
  boardState = impose(boardState, selectedShape, e.target.dataset.x, e.target.dataset.y);
  const newGrid = drawGrid(boardState);
  board.replaceChild(newGrid, drawnBoard);
  drawnBoard = newGrid;
  selectedShape = [[]];
}, false);

board.addEventListener("mousemove", e => {
  const temporaryBoardState = impose(boardState, selectedShape, e.target.dataset.x, e.target.dataset.y);
  const newGrid = drawGrid(temporaryBoardState);
  board.replaceChild(newGrid, drawnBoard);
  drawnBoard = newGrid;
}, false);

const allShapes = Object.values(shapes).map(shape => drawShape(shape));
allShapes.forEach(shape => market.appendChild(shape));