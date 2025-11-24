import { Button } from "react-bootstrap";
import React from "react";

export default function SingleButtonJobForm({ callback, text, testid }) {
  return (
    <Button onClick={callback} data-testid={`${testid}-job-submit`}>
      {text}
    </Button>
  );
}
