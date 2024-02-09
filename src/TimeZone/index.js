import React, { useEffect } from "react";
import { useState } from "react";
import { Alltimezone } from "./timezonedata";
import "./Timezone.css"


function AllCountryTimezone({ onChange, value, disabled }) {
  const [timezone, setTimezone] = React.useState(Alltimezone);
  const [backupTimezone, setBackupTimezone] = React.useState(Alltimezone);
  const [selected_timezone, setSelectedTimezone] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [showList, setShowlist] = useState(false)

  const searchTimezone = (value) => {
    setShowlist(true)
    setInputValue(value);
    let filterData = backupTimezone.filter(
      (item) =>
        item.value.toLowerCase().includes(value.toLowerCase())
    );
    setTimezone(filterData);
    // onChange()
  };

  const selectTimezone = (item) => {
    console.log("item", item)
    onChange(item);
    setInputValue(`${item.value}`);
    setShowlist(false)
    
  };
  useEffect(() => {
    if (value && value != "") {
      // alert("wo")
      let filter = backupTimezone.filter((item) => item.value.toLowerCase().includes(value.toLowerCase()));
      setTimezone(filter);
      setInputValue(`${filter[0].value}`);
    }else{
      setInputValue('');
    }
  }, [value]);
  return (
    <>
      <div className="outside" onClick={() => setShowlist(false)} />
      <div className="dropdown test">
        <div id="myDropdown" className="dropdown-content">
          <input
            // style={{width:"auto"}}
            type="text"
            value={inputValue}
            placeholder="Select Timezone"
            id="myInput"
            onChange={val => searchTimezone(val.target.value)}
            disabled={disabled}
          />

          <div className="arrow" onClick={() => setShowlist(!showList)}></div>

          {showList && (
            <div className="dropdownList">
              {timezone.map((item, index) => (
                <a href="#" key={index} onClick={() => selectTimezone(item)}>{`${item.value}`}</a>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AllCountryTimezone;
