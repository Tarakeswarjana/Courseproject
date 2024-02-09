import React from "react";

function CountCard({title,logo,data}) {
  return (
    <div className="_masterclass_box_wrapper_teacher">
      <p>{title}</p>
      <h2 className=" d-flex justify-content-between text-dark font-weight-bold">
        {data}
        <img src={logo} />
      </h2>
    </div>
  );
}

export default CountCard;
