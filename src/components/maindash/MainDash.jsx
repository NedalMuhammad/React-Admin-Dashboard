import React from "react";
import Cards from "../cards/Cards";
import "./MainDash.css";
import Table from "../table/Table";

function MainDash() {
  return (
    <div className="MainDash">
      <h2>DashBoard</h2>
      <Cards />
      <Table />
    </div>
  );
}

export default MainDash;
