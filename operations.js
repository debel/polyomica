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

function isEmptyRow(row) {
  return row.every(e => e === 0);
}

function filterRow(row) {
  return row.filter(e => e !== 0);
}

function minEnvelope(matrix) {
  const newMatrix = [];
  let startRow = -1;
  let endRow = -1;

  matrix.forEach((row, r) => {
    if (!isEmptyRow(row)) {
      newMatrix.push([]);
      if (startRow === -1) {
        startRow = r;
      }
      endRow = r;
    }
  });

  for (let i = 0; i < matrix[0].length; i += 1) {
    let allEmpty = true;

    for (let j = startRow; j <= endRow; j += 1) {
      if (matrix[j][i] !== 0) {
        allEmpty = false;
      }
    }

    if (allEmpty == true) {
      continue;
    }

    for (let j = 0, k = startRow; j < newMatrix.length; j += 1, k += 1) {
      newMatrix[j].push(matrix[k][i]);
    }
  }

  return newMatrix;
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