import React, { useEffect, useState } from "react";
import studentuser from "../../asstes1/images/icon/studentuser.png"
import emptyWallet from '../../asstes1/images/icon/empty-wallet.png'
import stickynote from '../../asstes1/images/icon/stickynote.png'
import directNotification from '../../asstes1/images/icon/direct-notification.png'
import { async } from "@firebase/util";
import HttpClient from "../../utils/HttpClient";

export default function TotalEngagement() {
    const [data, setData] = useState(null)
    useEffect(() => {
        fetchCount()
    }, [])

    const fetchCount = async () => {
        let result = await HttpClient.requestData("countDashboardData", "GET")
        console.log("countDashboardData", result);
        if (result && result.status) {
            setData(result.data)
        }
    }
    return (
      <>
        <div className="_masterclass_main_box">
          <div className="d-flex" style={{ width: '100%', justifyContent: 'space-between' }}>
            <div className="_masterclass_box_wrapper1" style={{ width: '23%' }}>
              <div className="no_master_st_country">
                <p className="no_master_jn_st">No. of Students Joined </p>

                <div className="chse_cnt_srch">
                  <i class="fa-solid fa-caret-down"></i>
                </div>
              </div>
              <div className=" d-flex justify-content-between rwd_data_img">
                <h5 className="data_number">{data?.studentcount ?? 0}</h5>
                <div className="master_img">
                  <img src={studentuser} />
                </div>
              </div>
            </div>
            <div className="_masterclass_box_wrapper2 ordr3" style={{ width: '23%' }}>
              <div className="no_master_st_country">
                <p className="no_master_jn_st">Total Hours Spent By Students</p>
                {/* <select className="form-control form-control-sm chse_cnt_srch">
                            <option>Choose a Country</option>
                            <option>India</option>
                            <option>USA</option>
                            <option>Nepal</option>
                        </select> */}
                <div className="chse_cnt_srch">
                  <i class="fa-solid fa-caret-down"></i>
                </div>
              </div>
              <div className=" d-flex justify-content-between rwd_data_img">
                <h5 className="data_number"> {data?.totalHr ?? 0}</h5>
                <div className="master_img">
                  <img src={emptyWallet} />
                </div>
              </div>
            </div>

            <div className="_masterclass_box_wrapper3" style={{ width: '23%' }}>
              <div className="no_master_st_country">
                <p className="no_master_jn_st">No. of Courses Completed</p>
                {/* <select className="form-control form-control-sm chse_cnt_srch">
                            <option>Choose a Country</option>
                            <option>India</option>
                            <option>USA</option>
                            <option>Nepal</option>
                        </select> */}
                <div className="chse_cnt_srch">
                  <i class="fa-solid fa-caret-down"></i>
                </div>
              </div>
              <div className=" d-flex justify-content-between rwd_data_img">
                <h5 className="data_number"> {data?.compleatCourse ?? 0}</h5>
                <div className="master_img">
                  <img src={stickynote} />
                </div>
              </div>
            </div>
            <div className="_masterclass_box_wrapper5" style={{ width: '23%' }}>
              <div className="no_master_st_country">
                <p className="no_master_jn_st">No. of Referral</p>
                {/* <select className="form-control form-control-sm chse_cnt_srch">
                                <option>Choose a Country</option>
                                <option>India</option>
                                <option>USA</option>
                                <option>Nepal</option>
                            </select> */}
                <div className="chse_cnt_srch">
                  <i class="fa-solid fa-caret-down"></i>
                </div>
              </div>
              <div className=" d-flex justify-content-between rwd_data_img">
                <h5 className="data_number"> {data?.totalreference ?? 0}</h5>
                <div className="master_img">
                  <img src={directNotification} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}