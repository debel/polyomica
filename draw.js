function generateGrid(n) {
  const grid = [];

  for (let i = 0; i < n; i += 1) {
    grid[i] = [];
    for (let j = 0; j < n; j += 1) {
      grid[i].push(0);
    }
  }

  return grid;
}

const allColors = ['red', 'green', 'blue', 'yellow', 'purple', 'cyan'];

function fullOrEmpty(cell) {
  return `class="${cell === 0 ? 'empty' : (allColors[cell - 1] || 'red')}"`;
}

function drawGrid(grid) {
  const drawnGrid = document.createElement('table');
  drawnGrid.innerHTML = `${grid.map((row, y) =>
    `<tr>${row.map((cellValue, x) => `<td data-x="${x}" data-y="${y}" ${fullOrEmpty(cellValue)}></td>`).join('')}</tr>`
  ).join('')}`;

  return drawnGrid;
}

function drawShape(shape) {
  const el = document.createElement('div');
  el.className = "shape";
  let drawnShape = drawGrid(shape);
  el.appendChild(drawnShape);

  const rotateBtn = document.createElement('button');
  rotateBtn.innerText = "r";
  rotateBtn.onclick = () => {
    shape = rotate(shape);
    const newShape = drawGrid(shape);
    el.replaceChild(newShape, drawnShape);
    drawnShape = newShape;
  };
  el.appendChild(rotateBtn);


  const hMirrorBtn = document.createElement('button');
  hMirrorBtn.innerText = "h";
  hMirrorBtn.onclick = () => {
    shape = mirrorHorizontal(shape);
    const newShape = drawGrid(shape);
    el.replaceChild(newShape, drawnShape);
    drawnShape = newShape;
  };
  el.appendChild(hMirrorBtn);

  const vMirrorBtn = document.createElement('button');
  vMirrorBtn.innerText = "v";
  vMirrorBtn.onclick = () => {
    shape = mirrorVertical(shape);
    const newShape = drawGrid(shape);
    el.replaceChild(newShape, drawnShape);
    drawnShape = newShape;
  };
  el.appendChild(vMirrorBtn);

  const select = document.createElement('button');
  select.innerText = "s";
  select.onclick = () => {
    selectedShape = minEnvelope(shape);
  };
  el.appendChild(select);

  return el;
}