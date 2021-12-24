import { fullEquipmentList } from "../db/equipmentList";
const initialState = fullEquipmentList;

const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default inventoryReducer;
