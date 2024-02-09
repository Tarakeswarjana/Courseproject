import React, { useEffect } from "react";
import studentuser from '../../../asstes1/images/icon/studentuser.png'
import emptyWallet from '../../../asstes1/images/icon/empty-wallet.png'
import teacher from '../../../asstes1/images/icon/teacher.png'
import people from '../../../asstes1/images/icon/people.png'
import profile from '../../../asstes1/images/icon/profile.png'
import sort from '../../../asstes1/images/icon/sort.png'
import calendartick from '../../../asstes1/images/icon/calendar-tick.png'
import country from '../../../asstes1/images/icon/country.png'
import CourseInfo from "./CourseInfo/CourseInfo";
import AllQuiz from "./Quiz/AllQuiz";
import QandA from "./Q&A/Q&A";
import Announcement from "./Announcement/Announcement";
import Notifications from "./Notifications/Notifications";
import profileimg from '../../../asstes1/images/icon/profileimg.png'
import message from '../../../asstes1/images/icon/message.png'
import seen from '../../../asstes1/images/icon/seen.png'
import darlene from '../../../asstes1/images/icon/darlene.png'
import kristin from '../../../asstes1/images/icon/kristin.png'
import janecooper from '../../../asstes1/images/icon/janecooper.png'
import leslie from '../../../asstes1/images/icon/leslie.png'
import diannerussel from '../../../asstes1/images/icon/diannerussel.png'
import bessie from '../../../asstes1/images/icon/bessie.png'
import { Outlet, useParams } from "react-router-dom";
import HttpClient from "../../../utils/HttpClient";
import SmallCard from "../../../Component/SmallCard/SmallCard";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import StudentEngaementTable from "../../../Component/Courses/StudentEngaementTable";
import EarningsChat from "../../Dashboard/EarningsChat";
import moment from "moment";
function Overview() {
    const { id } = useOutletContext();
    console.log("hjhfsdjhfjhdsjfhsdjhf", id);
    const [total_student,setTotalSudent]= useState()
    const [total_revenue,setTotalRevenue]= useState()
    const [studentList,setStudentList] = useState([])
    const [currentMonthStudentList,setCurrentMonthStuentList]=useState([])


    useEffect(()=>{
        fetchOverview()
        
    },[]);


    useEffect(() => {
  fetstudentEngagementlist(id);
    },[id])

    const fetchOverview = async ()=>{
        let result = await HttpClient.requestData("overview/"+id,"GET")
        
        if(result && result.status){
            setTotalSudent(result?.data[0]?.totalStudent) 
            setTotalRevenue(result?.data[0]?.totalRevenue)
        }

    }

    const fetstudentEngagementlist = async (id)=>{
      
        let result = await HttpClient.requestData(`studentEngagementlist/${id}`,"GET")
      console.log('fetchOverviewfdsfsdfsdfsd', result);
        if(result && result.status){
            let todayMonth = moment().month()
            // console.log(todayMonth);
            setStudentList(result.data)
            let filterData= result.data.filter((item=>moment(item.createdOn).month()==todayMonth))
            setCurrentMonthStuentList(filterData)
        }

    }
  return (
    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
      <div className="mt-4 mb-4">
        <div className="row">
          <SmallCard heading="Total Student Enrolled" logo={studentuser} data={total_student} />
          <SmallCard heading="Course Completed" logo={studentuser} data={0} />
          <SmallCard heading="Total Revenue" logo={emptyWallet} data={total_revenue} />
          <SmallCard heading="Student Completion Rate" logo={teacher} data="0%" />
        </div>
        <div className="_Student_engagement" style={{ marginTop: '14px;' }}>
          {/*--Student Engagement Table--------*/}
          <div className="table-responsive" style={{ margin: 0 }}>
            <div className="table-wrapper" style={{ margin: 0 }}>
              <div className="table-wrap">
                <div className="table-studenttext">
                  <p className="table-header">Student Engagement</p>
                  <p className="table-students-para">
                    <img src={people} />
                    {currentMonthStudentList.length} Student enrolled this Month
                  </p>
                </div>
              </div>
              {/* <div className="table-wrap">
                Start Date : <input type="date" />
              </div>
              <div className="table-wrap">
                End Date : <input type="date" />
              </div> */}
              <div className="table-wrap">
                <select>
                  <option value="monthly">This Month</option>
                  <option value="monthly">This Year</option>
                  <option value="monthly">Last Year</option>
                </select>
              </div>
            </div>
            <StudentEngaementTable studentList={studentList} />
            {/* <div className="show-more-data">
                    <p>Show More 300</p>
                </div> */}
          </div>
          {/*---Student Eng. Tab End------------*/}
        </div>
        <EarningsChat />
      </div>
    </div>
  );
}

export default Overview