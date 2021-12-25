import React from "react";
import { useSelector } from "react-redux";
import { informationAnalysis } from "../utils";
import { Button } from "react-bootstrap";

export default function SubmitButton() {
  const itemsList = useSelector((state) => state.inventory);

  function handleSubmit(e) {
    e.preventDefault();
    alert(informationAnalysis(itemsList));
  }

  return (
    <Button
      onClick={(e) => handleSubmit(e)}
      className="align-self-center"
      variant="warning"
    >
      Submit
    </Button>
  );
}
