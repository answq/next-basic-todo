import React, { PropsWithChildren } from "react";

const Detaillayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <h1>Detail layout</h1>
      {children}
    </div>
  );
};

export default Detaillayout;
