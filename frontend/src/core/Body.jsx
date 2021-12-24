import React from "react";
import { useSelector } from "react-redux";
import FormCard from "./FormCard";

export default function Body() {
  const worker = useSelector((state) => state);

  return worker === null ? <FormCard /> : <p>123</p>;
}
