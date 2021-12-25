//gets item and add property of currentQuantity
function addCurrentProperty(item) {
  item["currentQuantity"] = null;
  return item;
}

export function addCurrentPropertyList(itemsArray) {
  if (itemsArray.length === 0) {
    return [];
  } else {
    return [addCurrentProperty(itemsArray[0])].concat(
      addCurrentPropertyList(itemsArray.slice(1))
    );
  }
}

export function updateQuantityHelper(id, currentQuantity, itemsArray) {
  return itemsArray.map((item) => {
    if (item.id === id) {
      item.currentQuantity = currentQuantity;
      return item;
    } else {
      return item;
    }
  });
}

function informationAnalysisForItem({ name, fullQuantity, currentQuantity }) {
  let str = name;
  if (!isNaN(currentQuantity)) {
    if (currentQuantity === fullQuantity) {
      str = str + "- Full of this product\r\n";
    } else {
      str =
        str +
        "-" +
        (fullQuantity - currentQuantity).toString() +
        " are missing\r\n";
    }
  } else {
    str = str + "-" + fullQuantity.toString() + " are missing\r\n";
  }
  return str;
}

export function informationAnalysis(itemsArray) {
  let str = "";
  itemsArray.forEach((item) => {
    str = str + informationAnalysisForItem(item);
  });
  return str;
}
