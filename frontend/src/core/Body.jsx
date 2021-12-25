import React from "react";
//import for redux state management
import { useSelector } from "react-redux";
//import components
import FormCard from "./FormCard";
import InventoryForm from "./InventoryForm";

export default function Body() {
  const information = useSelector((state) => state.information);

  return information === null ? <FormCard /> : <InventoryForm />;
}
