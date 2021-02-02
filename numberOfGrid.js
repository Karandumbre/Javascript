const numIslands = (grid) => {
  let islandCount = 0;
  for (let x = 0; x < grid.length; ++x) {
    for (let y = 0; y < grid[0].length; ++y) {
      if (grid[x][y] === 1) {
        traverseIsland(x, y, grid); //visit the whole island
        islandCount++;
      }
    }
  }
  return islandCount;
};

const traverseIsland = (x, y, grid) => {
  if (
    x < 0 ||
    x > grid.length - 1 ||
    y < 0 ||
    y > grid[0].length - 1 ||
    grid[x][y] !== 1
  ) {
    return;
  } else {
    grid[x][y] = "2"; //mark as visited
  }
  traverseIsland(x + 1, y, grid);
  traverseIsland(x, y + 1, grid);
  traverseIsland(x - 1, y, grid);
  traverseIsland(x, y - 1, grid);
};

console.log(
  numIslands([
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ])
);
