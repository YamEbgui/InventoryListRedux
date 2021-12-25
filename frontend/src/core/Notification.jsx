import React from "react";
//import component
import { Alert } from "react-bootstrap";

export default function Notification({ message }) {
  return <Alert variant={"danger"}>{message}</Alert>;
}
