import React from "react";
import "./Recommended.css";
import Button from "../components/Button";

function Recommended({ handleClick }) {
  return (
    <>
      <section>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <button className="btn" value="" onClick={handleClick}>
            All Products
          </button>
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>
      </section>
    </>
  );
}

export default Recommended;
