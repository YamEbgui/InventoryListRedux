import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import QuantityInput from "./QuantityInput";

export default function InventoryList() {
  const inventory = useSelector((state) => state.inventory);
  console.log(inventory);
  return (
    <Table responsive="sm" striped bordered hover size="sm" className="mt-1">
      <thead>
        <tr>
          <th>#</th>
          <th>Item </th>
          <th>Full Quantity</th>
          <th>CurrentQuantity</th>
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
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
