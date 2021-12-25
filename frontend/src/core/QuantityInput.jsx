import React from "react";
//import for redux state management
import { useDispatch } from "react-redux";
import { updateQuantity } from "../actions";
//import components
import { FormControl, InputGroup } from "react-bootstrap";

export default function QuantityInput({ id, fullQuantity, currentQuantity }) {
  const dispatch = useDispatch();

  function handleInput(e) {
    e.preventDefault();
    if (!isNaN(parseInt(e.target.value))) {
      if (parseInt(e.target.value) < 0) {
        //handle situation that input lower than zero
        e.target.value = "";
      } else if (parseInt(e.target.value) > fullQuantity) {
        //handle situation that input bigger than fullQuantity
        e.target.value = fullQuantity;
        dispatch(updateQuantity(id, fullQuantity));
      } else {
        //handle situation that input is in the possible range
        dispatch(updateQuantity(id, parseInt(e.target.value)));
      }
    } else {
      dispatch(updateQuantity(id, 0));
    }
  }

  return (
    <InputGroup className="mb-3">
      <FormControl
        type="number"
        onInput={(e) => {
          handleInput(e);
        }}
        defaultValue={currentQuantity}
        min="0"
        max={fullQuantity.toString()}
      />
    </InputGroup>
  );
}
