import React, { useRef } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import QuantityInput from "./QuantityInput";

export default function InventoryList() {
  const refToList = useRef(null);
  const inventory = useSelector((state) => state.inventory);
  console.log(inventory);
  return (
    <Table
      ref={refToList}
      responsive="sm"
      striped
      bordered
      hover
      size="sm"
      className="mt-1"
    >
      <thead>
        <tr>
          <th>#</th>
          <th>Item </th>
          <th>Full Quantity</th>
          <th>CurrentQuantity</th>
          <th>Missing</th>
        </tr>
      </thead>
      <tbody>
        {inventory.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.fullQuantity}</td>
              <td>
                <QuantityInput />
              </td>
              <td></td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
