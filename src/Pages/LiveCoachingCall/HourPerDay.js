import React from "react";
import { Link } from "react-router-dom";

export default function HourPerDay() {
    return (
        <>
            <div className="container-fluid ">
                <div className="p-3">
                    <div className="_enrollment">
                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-12">
                                <div className="form-course wrapper">
                                    <h1
                                        className="title-setup text-center"
                                        style={{ paddingBottom: 40 }}
                                    >
                                        Input Basic Information
                                    </h1>
                                    <form action="">
                                        <div className="form-group form-check formbox">
                                            <select className="form-control" id="selectBox">
                                                <option>Select Maximum Hour Per Day</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                            <select className="form-control" id="selectBox">
                                                <option>Select Total Call </option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                        <Link to={"/charge_per_hour"}>
                                        <button type="submit" className=" btn-primary btn-start-setup">
                                            Setup
                                        </button>
                                        </Link>
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