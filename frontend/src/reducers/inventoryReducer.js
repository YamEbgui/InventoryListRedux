import { fullEquipmentList } from "../db/equipmentList";
import { addCurrentPropertyList, updateQuantityHelper } from "../utils";

const initialState = addCurrentPropertyList(fullEquipmentList);

const inventoryReducer = (state = initialState, action) => {
  let id = 0;
  switch (action.type) {
    case "ADD_ITEM":
      //generate id for new item
      id = Math.max(...state.map((item) => item.id)) + 1;
      return [
        ...state,
        {
          id,
          name: action.name,
          fullQuantity: action.fullQuantity,
          currentQuantity: action.currentQuantity,
        },
      ];
    case "UPDATE_QUANTITY":
      return updateQuantityHelper(action.id, action.currentQuantity, state);
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};

export default inventoryReducer;
