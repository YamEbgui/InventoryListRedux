const initialState = null;

const workerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "WORKER_ENTERED":
      return {
        worker: action.name,
        workPlace: action.workPlace,
        date: action.date,
      };
    default:
      return state;
  }
};

export default workerReducer;
