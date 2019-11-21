import React from "react";
import styled from "styled-components";

const Icon = styled.i`
  margin: 1rem;
`;

const Loader = () => {
  return <Icon className="fa fa-sun-o fa-spin fa-2x" />;
};

export default Loader;
