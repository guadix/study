export default () => {
  const stack = [];

  return {
    pop: () => (stack.length > 0 ? stack.splice(-1)[0] : null),
    add: (elem) => {
      stack.push(elem);
    },
    peek: () => (stack.length > 0 ? stack[stack.length - 1] : null),
    isEmpty: () => (stack.length === 0),
  };
};
