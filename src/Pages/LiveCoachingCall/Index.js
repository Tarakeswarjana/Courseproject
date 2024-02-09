import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SetupLivecoachingCall() {

    const basicForm = useRef()
    const setup = useRef()
    const navigate = useNavigate()

    const setSchedule =(e)=>{
        e.preventDefault()
        if(basicForm.current.checked && setup.current.checked){
            navigate("/scheduled_day")

        }
    }
    return (
        <>
            <div className="container-fluid ">
                <div className="p-3">
                    <div className="_enrollment">
                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-12">
                                <div className="form-course">
                                    <form action="">
                                        <h1 className="title-setup">Setup Individual Coaching</h1>
                                        <div className="form-group form-check cust-form">
                                            <label className="form-check-label cust-label">
                                                <input className="form-check-input"
                                                 type="checkbox"
                                                 ref={basicForm} />
                                                Input Basic Form
                                            </label>
                                            <label className="form-check-label cust-label">
                                                <input className="form-check-input" type="checkbox" 
                                                ref={setup}/>
                                                Setup Schedule
                                            </label>
                                        </div>
                                        {/* <Link to={"/hour_per_day"}> */}
                                        <button onClick={setSchedule} className="btn btn-primary btn-start">
                                            Start
                                        </button>
                                        {/* </Link> */}

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}