export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};

export const yay = () => console.log('YIPPEE-KI-YAY');

export const nay = () => console.log("It' alive!!!");
