import React from 'react'

function SmallCard({heading,logo,data}) {
  return (
    <div className="col-md-3 col-12 col-lg-3 col-xl-3">
    <div className="_masterclass_box">
        <p>{heading}</p>
        <h2 className=" d-flex justify-content-between text-dark font-weight-bold total_data_own">
            {data??"00"}
            <img src={logo} />
        </h2>
    </div>
</div>  )
}

export default SmallCard