import React from "react";

const VisualControl = (props) => {
  return (
    <div className="form-check">
      <input type="checkbox" 
      className="form-check-input" 
      checked={props.isCheked}
      onChange={ e => props.callback(e.target.checked)}
      />
      <label htmlFor="form-check-label"></label>
      show {props.description} completed task
    </div>
  );
};

export default VisualControl;
