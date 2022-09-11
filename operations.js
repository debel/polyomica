function rotate(matrix) {
  const rows = matrix.length - 1;
  return matrix.map((row, i) =>
    row.map((_, j) => matrix[rows - j][i])
  );
}

function mirrorHorizontal(matrix) {
  return matrix.map((row, i) =>
    row.map((_, j) => matrix[i][row.length - 1 - j]))
}

function mirrorVertical(matrix) {
  const rows = matrix.length - 1;
  return matrix.map((row, i) =>
    row.map((_, j) => matrix[rows - i][j]))
}

function impose(mA, mB, y, x) {
  const copy = JSON.parse(JSON.stringify(mA));
  x = +x;
  y = +y;
  const rowsA = mA.length;
  const columnsA = mA[0].length;

  const rowsB = mB.length - 1;
  const columnsB = mB[0].length - 1;

  for (let i = 0; i < rowsA - x; i += 1) {
    for (let j = 0; j < columnsA - y; j += 1) {
      if (i > rowsB || j > columnsB) {
        continue;
      }

      copy[x + i][y + j] = mB[i][j] || copy[x + i][y + j];
    }
  }

  return copy;
}