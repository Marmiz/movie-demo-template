import React, { ReactNode } from "react";
import { MainNav } from "./MainNav";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div className="container mx-auto">
    <MainNav className="p-6" />
    <div className="p-6">{props.children}</div>
  </div>
);

export default Layout;
