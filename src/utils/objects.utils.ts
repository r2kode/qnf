type Obj<Type> = {
  entry: Type;
};

export const cloneObj = (obj) => ({ ...obj });

export const cloneWithJson = (obj) => JSON.parse(JSON.stringify(obj));

export const cloneWithGlobalMethod = (obj) => structuredClone(obj);
