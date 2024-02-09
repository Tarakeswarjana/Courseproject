import React from 'react'

function DropDown({title="",data=[],onSelect,value, className=''}) {
  return (
    <div className={`${className} form-group `}>
    <label htmlFor="example-text-input" className="col-md-12 col-form-label">{title}
    <span style={{ color: "red" }}>*</span></label>
    <div className="col-md-12 p-0">
        <select className="form-control"  value={value} onChange={(e)=>onSelect(e.target.value)}>
            <option>Select</option>
           {data.map((item)=>{
            return<option value={item}>{item}</option>
           })} 
        </select>
    </div>
</div>  )
}

export default DropDown