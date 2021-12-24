import React from "react";
import { useSelector } from "react-redux";
import FormCard from "./FormCard";
import InventoryForm from "./InventoryForm";

export default function Body() {
  const information = useSelector((state) => state.information);

  return information === null ? <FormCard /> : <InventoryForm />;
}
