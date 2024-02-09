import React from 'react'
import clockduration from '../../asstes1/images/icon/clock-duration.png'
import calendarduration from '../../asstes1/images/icon/calendarduration.png'
import durationprofile from '../../asstes1/images/icon/durationprofile.png'
import instrutor from '../../asstes1/images/icon/instrutor.png'
import moment from 'moment'

function ActiveCallCard({startTime,endTime, date, name,image}) {
  return (
    <div className="duration-item">
    <div className="duration-wrap">
        <h6>Duration</h6>
        <span />
        <h2>
            <img src={clockduration}/>
            {startTime} - {endTime}
        </h2>
    </div>
    <div className="duration-wrap">
        <h6>Date</h6>
        <span />
        <p>
            <img src={calendarduration} />
            {moment(date).format("MMM Do YY")}
        </p>
    </div>
    <div className="duration-wrap">
        <h6>Instructor</h6>
        <span />
        <p>
            <img src={image} />
           {name}
        </p>
    </div>
</div>  )
}

export default ActiveCallCard