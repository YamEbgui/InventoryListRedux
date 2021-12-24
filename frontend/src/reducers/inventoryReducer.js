import { fullEquipmentList } from "../db/equipmentList";
const initialState = fullEquipmentList;

const inventoryReducer = (
  state = initialState,
  { type, name, fullQuantity, currentQuantity }
) => {
  let id = 0;
  switch (type) {
    case "ADD_ITEM":
      //generate id for new item
      id = Math.max(...state.map((item) => item.id)) + 1;
      return [...state, { name, fullQuantity, id }];
    default:
      return state;
  }
};

export default inventoryReducer;
