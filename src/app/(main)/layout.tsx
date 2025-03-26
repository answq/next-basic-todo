import React, { PropsWithChildren } from "react";
import TodoHeader from "../../../components/layout/TodoHeader";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <TodoHeader />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
