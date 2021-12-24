import React from "react";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addItem } from "../actions";

export default function AddForm() {
  //create states for this component
  const [name, setName] = useState("");
  const [fullQuantity, setFullQuantity] = useState(null);
  const [currentQuantity, setCurrentQuantity] = useState(null);

  const dispatch = useDispatch();

  function handleSubmit({ target }) {
    if (name !== "" && fullQuantity !== null) {
      if (currentQuantity !== null) {
        dispatch(addItem(name, fullQuantity, currentQuantity));
        return;
      } else {
        dispatch(addItem(name, fullQuantity, 0));
        return;
      }
    }
  }

  return (
    <Container>
      <h4>Add Item:</h4>
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
              setFullQuantity(value);
            }}
            defaultValue={fullQuantity}
            type="number"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCurrentQuantity">
          <Form.Label>Current Quantity</Form.Label>
          <Form.Control
            onInput={({ target: { value } }) => {
              setCurrentQuantity(value);
            }}
            defaultValue={currentQuantity}
            type="number"
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
