import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { workerEntered } from "../actions";

export default function WorkerForm() {
  const [name, setName] = useState("");
  const [workPlace, setWorkPlace] = useState("");
  const [date, setDate] = useState(null);

  const dispatch = useDispatch();

  function handleSubmit({ target: { value } }) {
    if (name !== "" && workPlace !== "" && date !== null) {
      dispatch(workerEntered(name, workPlace, date));
      return;
    }
  }

  function handleType(e) {
    e.preventDefault();
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "workPlace":
        setWorkPlace(e.target.value);
        break;
      case "date":
        setDate(e.target.value);
        break;
      default:
        return;
    }
  }

  return (
    <Form className="d-flex flex-column justify-content-center">
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Full name</Form.Label>
        <Form.Control
          onInput={(e) => {
            e.preventDefault();
            handleType(e);
          }}
          defaultValue={name}
          type="text"
          name="name"
          placeholder="Enter name"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicWorkplace">
        <Form.Label>Work place</Form.Label>
        <Form.Control
          onInput={(e) => {
            e.preventDefault();
            handleType(e);
          }}
          defaultValue={workPlace}
          type="text"
          name="workPlace"
          placeholder="Enter work place"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Date</Form.Label>
        <Form.Control
          onInput={(e) => {
            handleType(e);
          }}
          defaultValue={date}
          type="Date"
          name="date"
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
        Submit
      </Button>
    </Form>
  );
}
