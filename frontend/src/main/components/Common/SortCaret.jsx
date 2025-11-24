import { getSortCaret } from "main/components/Common/SortCaretUtils";
import React from "react";

export default function SortCaret({ header, testId = "testid" }) {
  return (
    <span data-testid={`${testId}-header-${header.column.id}-sort-carets`}>
      {getSortCaret(header)}
    </span>
  );
}
