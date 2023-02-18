import React from "react";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const IndexRoutes = () => {
  return <div>{true ? <PublicRoutes /> : <PrivateRoutes />}</div>;
};

export default IndexRoutes;
