const merge = (a: any, b: any): any => {
  return {
    ...a,
    ...b
  };
};

const merged = merge({ foo: 1 }, { bar: 1 });

const merge2 = <A, B>(a: A, b: B): A & B => {
  return {
    ...a,
    ...b
  };
};

const merged2 = merge2({ foo: 1 }, { bar: 1 });

const wrap = <T>(param: T) => {
  return {
    param
  };
};
const wrapped = wrap(10);
