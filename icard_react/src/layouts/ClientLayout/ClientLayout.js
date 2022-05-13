import React from "react";
import "./ClientLayout.scss";

export function ClientLayout(props) {
  const { children } = props;
  return (
    <div>
      <p>ClientLayaout</p>
      {children}
    </div>
  );
}
