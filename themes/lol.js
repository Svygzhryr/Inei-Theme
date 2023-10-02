function getCommonDirectoryPath(pathes) {
  const dirs = pathes.map((e) => e.split("/"));
  const index = dirs[0].findIndex((x, i) => dirs.some((dir) => x !== dir[i]));
  return index === 0 ? "" : `${dirs[0].slice(0, index).join("/")}/`;
}
