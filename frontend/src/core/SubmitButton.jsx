import React from "react";
//import for redux state management
import { useSelector } from "react-redux";
//import components
import { Button } from "react-bootstrap";
//import helper function
import { informationAnalysis } from "../utils";

export default function SubmitButton() {
  const itemsList = useSelector((state) => state.inventory);
  const information = useSelector((state) => state.information);

  function handleSubmit(e) {
    e.preventDefault();
    alert(
      information.worker +
        " " +
        information.workPlace +
        " " +
        information.date +
        "\r\n" +
        informationAnalysis(itemsList)
    );
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
