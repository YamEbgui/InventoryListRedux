import React, { useState } from "react";
//import for redux state management
import { useDispatch } from "react-redux";
import { addItem } from "../actions";
//import components
import Notification from "./Notification";
import { Button, Container, Form } from "react-bootstrap";

export default function AddForm() {
  //create states for this component
  const [name, setName] = useState("");
  const [fullQuantity, setFullQuantity] = useState(null);
  const [currentQuantity, setCurrentQuantity] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  function handleError(error) {
    setErrorMessage(error);
    setTimeout(() => {
      setErrorMessage(null);
    }, 3000);
  }

  function handleSubmit(event) {
    //handle input from the user
    //if input is logical update state, if not show notification that represent the error
    if (name !== "" && !isNaN(fullQuantity)) {
      if (fullQuantity < 1) {
        handleError("Full quantity should be more than 0  ");
      }
      if (!isNaN(currentQuantity)) {
        if (fullQuantity < currentQuantity) {
          handleError("Current quantity is more than full quantity ");
          return;
        } else {
          dispatch(addItem(name, fullQuantity, currentQuantity));
          return;
        }
      } else {
        dispatch(addItem(name, fullQuantity, null));
        return;
      }
    } else {
      handleError("Information Is Missing");
    }
  }

  return (
    <Container>
      <h4>Add Item:</h4>
      {errorMessage !== null ? <Notification message={errorMessage} /> : <></>}
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Item's Name</Form.Label>
          <Form.Control
            onInput={({ target: { value } }) => {
              setName(value);
            }}
            defaultValue={name}
            type="text"
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formFullQuantity">
          <Form.Label>Full Quantity</Form.Label>
          <Form.Control
            onInput={({ target: { value } }) => {
              setFullQuantity(parseInt(value));
            }}
            defaultValue={fullQuantity}
            type="number"
            min="1"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCurrentQuantity">
          <Form.Label>Current Quantity</Form.Label>
          <Form.Control
            onInput={({ target: { value } }) => {
              setCurrentQuantity(parseInt(value));
            }}
            defaultValue={currentQuantity}
            type="number"
            min="0"
          />
        </Form.Group>
        <Button
          onClick={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
          variant="warning"
          type="submit"
        >
          add
        </Button>
      </Form>
      <br />
    </Container>
  );
}
