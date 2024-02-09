import React from "react";

function TextBox({
  title,
  value,
  onChange,
  className,
  type = "text",
  min = "",
  disabled = false,
  max = "",
}) {
  return (
    <div className={`${className} form-group`}>
      <label htmlFor="example-text-input" className="col-md-12 col-form-label">
        {title}
        <span style={{ color: "red" }}>*</span>
      </label>
      <div className="col-md-12 p-0">
        <input
          disabled={disabled}
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          id="example-text-input"
          type={type}
          className="form-control form-control"
        />
      </div>
    </div>
  );
}

export default TextBox;
