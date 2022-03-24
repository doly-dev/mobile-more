type NamePath = string | number;
type NamePaths = NamePath[];

const getNamePaths = (name: NamePath | NamePaths, parentListName?: (NamePath | NamePaths)[]) => {
  const paths: NamePaths = [];
  if (Array.isArray(parentListName) && parentListName.length > 0) {
    parentListName.forEach((parentItemPath) => {
      if (Array.isArray(parentItemPath)) {
        paths.push(...parentItemPath);
      } else {
        paths.push(parentItemPath);
      }
    });
  }
  if (Array.isArray(name)) {
    paths.push(...name);
  } else {
    paths.push(name);
  }
  return paths;
};

export default getNamePaths;
