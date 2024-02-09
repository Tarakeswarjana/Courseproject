import React, { useState } from "react";
import message from "../../asstes1/images/icon/message.png";
import seen from "../../asstes1/images/icon/seen.png";
import janecooper from "../../asstes1/images/icon/janecooper.png";
import RequestDetails from "../../Pages/Request/RequestDetails";
import moment from "moment";

function NewRequestRow({ rowData,changeBarFunc }) {
  const [detailShow, setDetailShow] = useState(false);
  return (
    <>
      <tr onClick={() => setDetailShow(!detailShow)}>
        <td style={{ textAlign: "left" }}>
          <img
            src={rowData?.image}
            style={{ height: "50px", width: "50px", borderRadius: "50%" }}
          />
          {`${rowData?.fristName} ${rowData?.lastName}`}
        </td>
        <td style={{ textAlign: "end" }}>
          {rowData?.livecoacing?.map((item) => {
            return (
              <div key={item._id} style={{maxWidth:"200PX", marginLeft:"auto",display:"flex",justifyContent:"space-around"}}  >
                <span className="schedule-onge" style={{textAlign:"left"}}>
                  {moment(item.bookingOn).format("MMM Do")} -{" "}
                </span>
                {item.startTime} -{item.endTime} <br />{" "}
              </div>
            );
          })}
          {/* <br />- 20:00 - 21:00 <br />
        <span className="schedule-onge">5th Feb - </span>16:00 -
        17:00
        <br /> */}
          {/* <span className="schedule-onge">6 more meetings</span> */}
        </td>
        <td style={{ textAlign: "end" }}>
          <label className="form-check-label">
            <input
              type="checkbox"
              className="form-check-input accept_Checkbox3 "
              defaultChecked="checked"
              style={{ marginTop: 10 }}
            />
            Accept
          </label>
          <img src={message} className="noti-msg" />
          <img src={seen} className="noti-seen" />
          <p />
        </td>
      </tr>
      {detailShow && <RequestDetails id={rowData._id} closeCallBack={setDetailShow} changeBarFunc={changeBarFunc} />}
    </>
  );
}

export default NewRequestRow;
