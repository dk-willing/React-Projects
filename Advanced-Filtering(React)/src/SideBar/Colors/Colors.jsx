import React from "react";
import "./Colors.css";
import Input from "../../components/Input";

function Colors({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <label className="sidebar-label-container">
        <input type="radio" name="test1" value="" onChange={handleChange} />
        <span className="checkMark all"></span>
        All
      </label>
      <Input
        name="test1"
        value="black"
        title="Black"
        color="black"
        handleChange={handleChange}
      />
      <Input
        name="test1"
        value="blue"
        title="Blue"
        color="blue"
        handleChange={handleChange}
      />
      <Input
        name="test1"
        value="red"
        title="Red"
        color="red"
        handleChange={handleChange}
      />
      <Input
        name="test1"
        value="green"
        title="Green"
        color="green"
        handleChange={handleChange}
      />

      <label className="sidebar-label-container">
        <input
          type="radio"
          name="test1"
          value="white"
          onChange={handleChange}
        />
        <span
          className="checkMark"
          style={{ backgroundColor: "white", border: "2px solid #333" }}
        ></span>
        White
      </label>
    </div>
  );
}
export default Colors;
