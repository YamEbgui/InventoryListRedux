import React, { useRef } from "react";
//import for redux state management
import { useSelector } from "react-redux";
//import components
import Item from "./Item";
import { Table } from "react-bootstrap";

export default function InventoryList() {
  const refToList = useRef(null);
  const inventory = useSelector((state) => state.inventory);

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
          return <Item key={item.id} item={item} />;
        })}
      </tbody>
    </Table>
  );
}
