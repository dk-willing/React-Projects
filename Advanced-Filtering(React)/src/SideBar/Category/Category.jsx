import React from "react";
import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <label className="sidebar-label-container">
        <input type="radio" name="test" value="" onChange={handleChange} />
        <span className="checkMark"></span>
        All
      </label>

      <Input
        name="test"
        value="sneakers"
        title="Sneakers"
        handleChange={handleChange}
      />
      <Input
        name="test"
        value="flats"
        title="Flats"
        handleChange={handleChange}
      />
      <Input
        name="test"
        value="sandals"
        title="Sandals"
        handleChange={handleChange}
      />
      <Input
        name="test"
        value="heels"
        title="Heels"
        handleChange={handleChange}
      />
    </div>
  );
}
export default Category;
