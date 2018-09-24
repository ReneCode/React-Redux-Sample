const logger = store => next => action => {
  // console.log("dispatching:", action);
  const result = next(action);
  // console.log("finished dispatching:", store.getState());
  return result;
};

export { logger };
