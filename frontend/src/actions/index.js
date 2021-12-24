function workerEntered(name, workPlace, date) {
  return {
    type: "WORKER_ENTERED",
    name,
    workPlace,
    date,
  };
}

export { workerEntered };
