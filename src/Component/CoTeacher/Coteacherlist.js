import React from "react";

import darlene from "../../asstes1/images/icon/darlene.png";
import kristin from "../../asstes1/images/icon/kristin.png";
import janecooper from "../../asstes1/images/icon/janecooper.png";
import leslie from "../../asstes1/images/icon/leslie.png";
import profile from "../../asstes1/images/icon/profile.png";
import timer from "../../asstes1/images/icon/timer.png";
import sort from "../../asstes1/images/icon/sort.png";
import profileimg from "../../asstes1/images/icon/profileimg.png";
import seen from "../../asstes1/images/icon/seen.png";
import diannerussel from "../../asstes1/images/icon/diannerussel.png";
import { Link } from "react-router-dom";
import HttpClient from "../../utils/HttpClient";
import { toast } from "react-toastify";
import { ToastContainer } from "react-bootstrap";
import calender_tick from "../../asstes1/images/calendar-tick.png"



function Coteacherlist({ coTeachers ,fetchCoTeacher}) {
  const Permission = async(e, permission,id) => {
    console.log(e.target.checked);
    // console.log(permission);
    if (e.target.checked) {
      let dataSend = {
        permission: [...permission, e.target.value],
      };
    //   console.log(dataSend);
      let result = await HttpClient.requestData("updateaccesscontrol/"+id,"PUT",dataSend)
    //   console.log(result);
      if(result && result.status){
        fetchCoTeacher()
        //  toast.success("done") 
      }
    } else {
      let dataSend = {  permission: permission.filter((item) => item != e.target.value)}
    //   console.log(dataSend);
      let result = await HttpClient.requestData("updateaccesscontrol/"+id,"PUT",dataSend)
    //   console.log(result);
      if(result && result.status){
        fetchCoTeacher()
        //  toast.success("done") 
      }
    }
  };

  return (
    <div className="table-responsive" style={{ background: "transparent" }}>
        {/* <ToastContainer/> */}
      <table className="table table-hover add-teacher">
        <thead>
          <tr>
            <th style={{ textAlign: "left" }}>
              <img src={profile} />
              <span className="coteacher_styl" style={{fontSize:"15px"}}>Teacher</span> 
            </th>
            <th>
              <img src={calender_tick} />
              <span className="coteacher_styl" style={{fontSize:"15px"}}> Total Course</span> 
            </th>
            <th>
              <img src={timer} />
              <span className="coteacher_styl" style={{fontSize:"15px"}}> Total Students</span> 
            </th>
            <th style={{ textAlign: "right" }}>
              <img src={sort} />
              <span className="coteacher_styl" style={{fontSize:"15px"}}> Sort by</span> 
            </th>
          </tr>
        </thead>
        <tbody>
          {coTeachers.map((item) => {
            return (
              <tr key={item._id}>
                <td style={{ textAlign: "left" }}>
                  <Link to={"/co_teachers/teacher_profile/" + item._id}>
                    <img
                      src={item.image}
                      style={{
                        height: "50px",
                        width: "50px",
                        borderRadius: "50%",
                      }}
                    />
                    {item.username}
                  </Link>
                </td>
                <td>{item.courses?.totalCourse??0}</td>
                <td>{item.totalStudents}</td>
                <td>
                  <div
                    className="sort-table"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <ul>
                      <li className="dropdown">
                        <a
                          href="#"
                          data-toggle="dropdown"
                          className="dropdown-toggle"
                        >
                          Access Control
                          <b className="caret" />
                        </a>
                        <ul className="dropdown-menu cutom-menu-sort">
                          <li>
                            <label className="checkbox">
                              <input
                                type="checkbox"
                                style={{ marginRight: 10 }}
                                value="uploadCourse"
                                onChange={(e) => Permission(e, item.permission,item._id)}
                                checked={item.permission.some(item=>item=="uploadCourse")}
                              />
                              Upload course
                            </label>
                          </li>
                          <li>
                            <label className="checkbox">
                              <input
                                type="checkbox"
                                style={{ marginRight: 10 }}
                                value="takeCoachingClasses"
                                onChange={(e) => Permission(e, item.permission,item._id)}
                                checked={item.permission.some(item=>item=="takeCoachingClasses")}
                              />
                              Can take coaching classes
                            </label>
                          </li>
                          <li>
                            <label className="checkbox">
                              <input
                                type="checkbox"
                                style={{ marginRight: 10 }}
                                value="addCoTeacher"
                                onChange={(e) => Permission(e, item.permission,item._id)}
                                checked={item.permission.some(item=>item=="addCoTeacher")}
                              />
                              Can add new teacher
                            </label>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <p>
                      <img src={seen} className="noti-seen" />
                    </p>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Coteacherlist;
