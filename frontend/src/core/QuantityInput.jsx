import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";

export default function QuantityInput() {
  return (
    <InputGroup className="mb-3">
      <FormControl type="number" />
    </InputGroup>
  );
}
