// imports
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <Link to={`/`}>
            <button className="btn btn-outline-light text-warning">Home</button>
          </Link>
          <Link to={`/products-list`}>
            <button className="btn btn-outline-light text-warning">
              Products List
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
