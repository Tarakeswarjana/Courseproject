import React from "react";

function TextArea({title,value,onChange}) {
  return (
    <div className="form-group">
      <label htmlFor="example-text-input" className="col-md-2 col-form-label">
        {title}
        <span style={{ color: "red" }}>*</span>
      </label>
      <div className="col-md-12 p-0">
        <textarea
          id="example-text-input"
          value={value}
          onChange={(val) => onChange(val.target.value)}
          className="form-control form-control"
        />
      </div>
    </div>
  );
}

export default TextArea;
