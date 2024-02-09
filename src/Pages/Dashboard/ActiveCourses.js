
import { async } from '@firebase/util'
import moment from 'moment'
import { useCallback, useEffect, useMemo, useState, } from 'react'
import active1 from '../../asstes1/images/active1.png'
import active2 from '../../asstes1/images/active2.png'
import active3 from '../../asstes1/images/active3.png'
import active4 from '../../asstes1/images/active4.png'
import active5 from '../../asstes1/images/active5.png'
import HttpClient from '../../utils/HttpClient'

export default function ActiveCourses() {
    const [activeCourses,setActiveCourses] = useState([])

    const [sort,setSort] = useState("")
 
    useEffect(()=>{
        fetchActiveCourse()
    },[])
    const fetchActiveCourse  = async()=>{
        let result = await HttpClient.requestData("ActiveCoursesdashboard","GET")
        if(result&&result.status){
            setActiveCourses(result.data)
        }
    }

    const fileterCourse = useMemo(()=>{
        return findCourse(activeCourses)
    },[sort,activeCourses])

    function findCourse (activeCourses){
        if(sort=="monthly"){
            let todayMonth = moment().month()
            // setActiveCourses()
            console.log(todayMonth);
            console.log(activeCourses);
            let filterData= activeCourses.filter((item)=>moment(item.created_on).month()==todayMonth)
            console.log(filterData);
            return filterData
        }
        if(sort=="week"){
            let todayWeek = moment().week()
            // setActiveCourses()
            let filterData= activeCourses.filter((item)=>moment(item.created_on).week()==todayWeek)
            // setActiveCourses(filterData) 
            return filterData
        }
        else{
            return activeCourses
        }
    }
    return (
      <>
        <div className="course-notifications-item" style={{ width: 'calc(60% - 30px)' }}>
          <div className="entry-title">
            <p className="entry-header">Active Courses</p>
            <select value={sort} onChange={val => setSort(val.target.value)}>
              <option value="all">All time</option>
              <option value="monthly">This Month</option>
              <option value="week">This Week</option>
              {/* <option value="year">This Year</option> */}
            </select>
          </div>
          <div className="entry-title-botttom">
            <p className="entry-header">NAME</p>
            <p className="entry-ongoing" style={{}}>
              No. of students
            </p>
          </div>
          <div className="progress-section">
            {fileterCourse.length > 0
              ? fileterCourse.map((item, index) => {
                  return (
                    <div className="progressimgtextActive" key={index}>
                      <div className="ongoing-img">
                        <img src={item?.thumb_image} />
                        <p style={{ marginBottom: 5 }}>{item?.courseName}</p>
                      </div>
                      <div className="ongoing-text">
                        <div className="ongoing-text-sec">
                          <p style={{ marginBottom: 5 }}>{item?.studentCount ?? '0'}</p>
                        </div>
                      </div>
                    </div>
                  );
                })
              : 'No active course Found'}
          </div>
        </div>
      </>
    );
}