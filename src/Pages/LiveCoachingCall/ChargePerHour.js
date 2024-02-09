import React from "react";
import { Link } from "react-router-dom";

export default function ChargePerHour() {
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
                                            <label htmlFor="selectBox">Charge for Hour</label>
                                            <select className="form-control" id="selectBox">
                                                <option>10$</option>
                                                <option>20$</option>
                                                <option>30$</option>
                                                <option>40$</option>
                                                <option>50$</option>
                                                <option>60$</option>
                                            </select>
                                            <label htmlFor="selecttotalcall">
                                                Select Total Call Per Day{" "}
                                            </label>
                                            <select className="form-control" id="selecttotalcall">
                                                <option>3</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                        <Link to={"/scheduled_day"}>
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