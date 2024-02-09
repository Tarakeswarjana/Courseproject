import darlene from '../../asstes1/images/icon/darlene.png'
import kristin from '../../asstes1/images/icon/kristin.png'
import janecooper from '../../asstes1/images/icon/janecooper.png'
import leslie from '../../asstes1/images/icon/leslie.png'
import profile from '../../asstes1/images/icon/profile.png'
import calendartick from '../../asstes1/images/icon/calendar-tick.png'
import sort from '../../asstes1/images/icon/sort.png'
import profileimg from '../../asstes1/images/icon/profileimg.png'
import message from '../../asstes1/images/icon/message.png'
import seen from '../../asstes1/images/icon/seen.png'
import diannerussel from '../../asstes1/images/icon/diannerussel.png'
import people from '../../asstes1/images/icon/people.png'
import country from '../../asstes1/images/icon/country.png'
import bessie from '../../asstes1/images/icon/bessie.png'
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from 'react'
import HttpClient from '../../utils/HttpClient'
import moment from 'moment'
import StudentEngaementTable from '../../Component/Courses/StudentEngaementTable'

export default function StudentEngagement() {
    const [students,setStudents] = useState([])

    useEffect(()=>{
        fetchStudent()
    },[])

    const fetchStudent =async ()=>{
        let result = await HttpClient.requestData("StudentEngagementDashboard","GET")
      // console.log('hjhfsdhfjsdffsdfdsfsdfsdffsdf', result);
        if(result&&result.status){
            setStudents(result.data);
        }
    }

 const enrollthismonth = useMemo(()=>{
     return filterStudent(students)
 },[students])

 function filterStudent (students){
    let todayMonth = moment().month()
    let filter = students.filter((item)=>moment(item.createdOn).month()==todayMonth)

    return filter.length
 }
    return (
        <>
            <div className="table-responsive">
                <div className="table-wrapper">
                    <div className="table-wrap">
                        <div className="table-studenttext">
                            <p className="table-header">Student Engagement</p>
                            <p className="table-students-para">
                                <img src={people} />
                               {enrollthismonth} students enrolled this month
                            </p>
                        </div>
                    </div>
                    <div className="table-wrap">
                        <select>
                            <option value="monthly">This Month</option>
                            {/* <option value="monthly">This Month</option>
                            <option value="monthly">This Month</option> */}
                        </select>
                    </div>
                </div>
                <StudentEngaementTable studentList={students}/>
                {/* <table className="table table-hover table-student">
                    <thead>
                        <tr>
                            <th>
                                <img src={profile} />
                                Student Name
                            </th>
                            <th>
                                <img src={calendartick} />
                                Enrollment Date
                            </th>
                            <th>
                                <img src={country} />
                                Country
                            </th>
                            <th>
                                <img src={sort} />
                                sort by
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                       {students.map((item,index)=>{
                           return <tr key={item._id}>
                           <td>
                               <img src={item.student[0].image} style={{height:"50px",width:"50px",borderRadius:"50%"}}/>
                               {item.student[0].name}
                           </td>
                           <td>{moment(item.createdOn).format("D MMMM YYYY")}</td>
                           <td>{item.student[0].country}</td>
                           <td>
                               <p>
                                   <img
                                       src={message}
                                       className="noti-msg"
                                       onClick={SendMessage}
                                   />
                                   <img
                                       src={seen}
                                       className="noti-seen"
                                   />
                               </p>
                           </td>
                       </tr>
                       })} 
                      
                    </tbody>
                </table> */}
                {/* <div className="show-more-data">
                    <Link to={"/student_enrollment_list"}>
                        <p>Show More 300</p>
                    </Link>
                </div> */}
            </div>
        </>
    )
}