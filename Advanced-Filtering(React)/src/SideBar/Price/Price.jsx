import React from "react";
import "./Price.css";
import Input from "../../components/Input";

function Price({ handleChange }) {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>

      <label className="sidebar-label-container">
        <input type="radio" name="test2" value="" onChange={handleChange} />
        <span className="checkMark"></span>
        All
      </label>
      <Input
        name="test2"
        value={50}
        title="$50 - $100"
        handleChange={handleChange}
      />
      <Input
        name="test2"
        value={100}
        title="$50 - $100"
        handleChange={handleChange}
      />
      <Input
        name="test2"
        value={150}
        title="$100 - $150"
        handleChange={handleChange}
      />
      <Input
        name="test2"
        value={200}
        title="over $150"
        handleChange={handleChange}
      />
    </div>
  );
}
export default Price;
