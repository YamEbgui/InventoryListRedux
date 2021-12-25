import React from "react";
import QuantityInput from "./QuantityInput";

export default function Item({
  item: { id, name, fullQuantity, currentQuantity },
}) {
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{fullQuantity}</td>
      <td>
        <QuantityInput
          id={id}
          fullQuantity={fullQuantity}
          currentQuantity={currentQuantity}
        />
      </td>
      <td>
        {currentQuantity === null
          ? fullQuantity
          : fullQuantity - currentQuantity}
      </td>
    </tr>
  );
}
