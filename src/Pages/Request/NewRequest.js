import React, { useState, useEffect } from "react";
import profile from "../../asstes1/images/icon/profile.png"
import calendartick from '../../asstes1/images/icon/calendar-tick.png'
import sort from '../../asstes1/images/icon/sort.png'
import NewRequestRow from "../../Component/Request/NewRequestRow";
import HttpClient from "../../utils/HttpClient";
import Loader from '../../Component/FullPageLoader/DotLoading'

export default function NewRequests({ changeBarFunc }) {
    const [NewRequest, setNewRequest] = useState([])
    const [loder, setloder] = useState(false)


    useEffect(() => {
        fetchNewRequest()
    }, [])

    const fetchNewRequest = async () => {
        setloder(true)
        let result = await HttpClient.requestData("newRequest", "GET")
        console.log(result);
        if (result && result.status) {
            setNewRequest(result.data)
        }
        setloder(false)
    }

    return (
        <>

            <div className="_enrollment mt-0" style={{ marginLeft: "0" }}>
                <div className="row">
                    <div className="col-md-12 col-lg-12 col-12">
                        <div className="table-responsive m-0" style={{ background: "transparent" }}>
                            <table className="table table-hover table_own_csn_brdr">
                                <thead>
                                    <tr>
                                        <th style={{ textAlign: "left" }}>
                                            <img src={profile} />
                                            <span className="sch_time" style={{ fontSize: "15px" }}> Client</span>
                                        </th>
                                        <th style={{ textAlign: "center" }}>
                                            <img src={calendartick} />
                                            <span className="sch_time" style={{ fontSize: "15px" }}> Schedule</span>
                                        </th>
                                        <th style={{ textAlign: "right" }}>
                                            <img src={sort} />
                                            <span className="sch_time" style={{ fontSize: "15px" }}> Sort by</span>
                                        </th>

                                    </tr>
                                </thead>
                                {loder ? <div style={{ textAlign: "center", position: "absolute", width: "100%" }}><Loader /></div> : <tbody>
                                    {/* {loder && <Loader/> } */}
                                    {NewRequest.length > 0 ? NewRequest.map((item, index) => {
                                        return <NewRequestRow key={item._id} rowData={item} changeBarFunc={changeBarFunc} />
                                    }) : <p style={{ textAlign: "center" }}>No Call(s) Found</p>}

                                </tbody>}
                            </table>
                        </div>
                        {/*----Meeting Requested sidebar---*/}


                        {/*----End Meeting Requested sidebar---*/}
                    </div>
                </div>
            </div>
        </>
    )
}