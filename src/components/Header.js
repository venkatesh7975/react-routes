import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="d-flex">
      <Link className="mr-5 p-3 " to="/even">
        Even
      </Link>
      <Link className="ml-5 p-3" to="/cards">
        Contacts
      </Link>
      <Link className="ml-5 p-3" to="/game">
        NumberGame
      </Link>
      <Link className="ml-5 p-3" to="/counter">
        Counter
      </Link>
    </div>
  );
}
