import React, { useState } from "react";
import AddScheduleModal from "./AddScheduleModal";

function DayCard({ color, day, scheduleData ,fetchSchedule}) {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className="day-item">
        <button className="day sundy-colr" style={{ background: color }}>
          {day}
        </button>
        {scheduleData.map((item) => {
          return (
            <button
              key={item._id}
              className="day sundy-colr"
              style={{ background: color }}
            >
              {`${item.startTime} - ${item.endTime}`}
            </button>
          );
        })}
        <input
          onClick={() => setModal(true)}
          type="button"
          defaultValue="Add"
          className="btn add-btn sund-bg"
          style={{ background: color }}
        />
    
      </div>
      {modal && <AddScheduleModal day={day} callbackClose={setModal} fetchSchedule={fetchSchedule} />}
    </>
  );
}

export default DayCard;
