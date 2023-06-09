import React from "react";
import { Link } from "react-router-dom";

type Props = {};

function Gen({}: Props) {
  return (
    <div>
      gen page
      <Link to="/"> GO TO THE ABOUT PAGE </Link>
    </div>
  );
}

export default Gen;
