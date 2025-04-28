// dashboard is accessed on localhost:PORT/dashbaord
// it does not provide header and footer

import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default layout;
