import React from "react";

export default function AllScheduled() {
    return (
        <>
            <div className="container-fluid ">
                <div className="p-3">
                    <div className="_enrollment">
                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-12">
                                <div className="day-list mb-60">
                                    <h1 className="title-schedule">Your Schedule</h1>
                                    <div className="_masterclass_box_course">
                                        <button
                                            className="btn  btn-sm rounded-0"
                                            type="button"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            title="Edit"
                                        >
                                            <i className="fa fa-edit" />
                                            Edit
                                        </button>
                                    </div>
                                </div>
                                <div className="day-list">
                                    <div className="day-item">
                                        <div className="day sundy-colr">Sunday</div>
                                        <div className="day time-sundy-colr">Sunday</div>
                                        <div className="day time-sundy-colr">Sunday</div>
                                        <div className="day time-sundy-colr">Sunday</div>
                                    </div>
                                    <div className="day-item">
                                        <div className="day mondy-colr">Monday</div>
                                        <div className="day time-mondy-colr">14:00-15:00</div>
                                    </div>
                                    <div className="day-item">
                                        <div className="day tuesdy-colr">Tuesday</div>
                                        <div className="day time-tuesdy-colr">14:00-15:00</div>
                                        <div className="day time-tuesdy-colr">8:00-9:30</div>
                                    </div>
                                    <div className="day-item">
                                        <div className="day weddy-colr">Wednesday</div>
                                        <div className="day time-weddy-colr">14:00-15:00</div>
                                        <div className="day time-weddy-colr">8:00-9:30</div>
                                        <div className="day time-weddy-colr">8:00-9:30</div>
                                        <div className="day time-weddy-colr">8:00-9:30</div>
                                    </div>
                                    <div className="day-item">
                                        <div className="day thursdy-colr">Thursday</div>
                                        <div className="day time-thursdy-colr">14:00-15:00</div>
                                        <div className="day time-thursdy-colr">8:00-9:30</div>
                                    </div>
                                    <div className="day-item">
                                        <div className="day fridy-colr">Friday</div>
                                        <div className="day time-fridy-colr">14:00-15:00</div>
                                        <div className="day time-fridy-colr">8:00-9:30</div>
                                        <div className="day time-fridy-colr">14:00-15:00</div>
                                        <div className="day time-fridy-colr">8:00-9:30</div>
                                        <div className="day time-fridy-colr">8:00-9:30</div>
                                    </div>
                                    <div className="day-item">
                                        <div className="day satdy-colr">Saturday</div>
                                        <div className="day time-satdy-colr">14:00-15:00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}