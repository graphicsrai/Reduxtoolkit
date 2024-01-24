import React from "react";
import { Alert } from "react-bootstrap";

export default function Popup({ bgColor, msg }) {
  return (
    <>
      <Alert style={{ color: "white", backgroundColor: `${bgColor}` }}>
        {msg}
      </Alert>
    </>
  );
}
