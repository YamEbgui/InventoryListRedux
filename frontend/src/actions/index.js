function workerEntered(name, workPlace, date) {
  return {
    type: "WORKER_ENTERED",
    name,
    workPlace,
    date,
  };
}

function addItem(name, fullQuantity, currentQuantity) {
  return {
    type: "ADD_ITEM",
    name,
    fullQuantity,
    currentQuantity,
  };
}

function updateQuantity(id, currentQuantity) {
  return {
    type: "UPDATE_QUANTITY",
    id,
    currentQuantity,
  };
}

export { workerEntered, addItem, updateQuantity };
