function omit<T extends object, K extends keyof any>(obj: T, propertyNames: K[]): Omit<T, K>;
function omit<T extends object, K extends keyof T>(obj: T, ...propertyNames: K[]): Omit<T, K>;
function omit<T extends object, K extends keyof T>(obj: T, ...propertyNames: K[]) {
  const newObj: any = {};
  const keys = Object.keys(obj) as (keyof T)[];
  keys.forEach((key) => {
    propertyNames.forEach((propNames) => {
      if (
        (Array.isArray(propNames) && !propNames.find((item) => item === key)) ||
        propNames !== key
      ) {
        newObj[key] = obj[key];
      }
    });
  });
  return newObj as Omit<T, K>;
}

export default omit;
