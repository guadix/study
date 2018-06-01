export default () => {
  const queue = [];

  return {
    add: (elem) => {
      queue.push(elem);
    },
    remove: () => (queue.length > 0 ? queue.splice(0, 1)[0] : null),
    isEmpty: () => (queue.length > 0),
    peek: () => (queue.length > 0 ? queue[0] : null),
  };
};
