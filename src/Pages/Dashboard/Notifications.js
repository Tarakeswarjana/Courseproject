import videoeditingicon from '../../asstes1/images/icon/video-editing-icon.png'
import darlene from '../../asstes1/images/icon/darlene.png'
import kristin from '../../asstes1/images/icon/kristin.png'
import janecooper from '../../asstes1/images/icon/janecooper.png'
import leslie from '../../asstes1/images/icon/leslie.png'
import { useEffect, useState } from 'react'
import HttpClient from '../../utils/HttpClient'
import moment from 'moment'

export default function Notifications() {

    const [notifications,setNotifications] = useState([])

    useEffect(()=>{
        fetchNotification()
    },[])

    
    const  fetchNotification = async()=>{
        let result = await HttpClient.requestData("TeacherAllNotification")
        if(result&&result.status){
            setNotifications(result.data)
        }
    }
    return (
        <>
            <div
                className="course-notifications-item"
                style={{ width: "calc(40% - 30px)" }}
            >
                <div className="entry-title dashbrd_style_lft_spcl">
                    <p className="entry-header">Notification</p>
                    <p
                        className="entry-ongoing entry_going_own_spc"
                        style={{
                            fontSize: "12px",
                            lineHeight: "14px",
                            letterSpacing: "0.06em",
                            color: "#138BFB",
                            fontWeight: 700
                        }}
                    >
                        MARK AS ALL READ
                    </p>
                </div>
                <div className="progress-section">
                   {notifications.map((item)=>{
                       return <div className="progressimgtext" key={item._id}>
                       <div className="ongoing-img-notification">
                           <img src={item.icon} />
                           <div className="ongoing-img-notification-para">
                               <p
                                   className="profileName"
                                   style={{ marginBottom: 5 }}
                               >
                                  {item.title??""}
                               </p>
                               <p className="noti-paraline">
                                  {item.desc??""}
                               </p>
                           </div>
                       </div>
                       <div className="ongoing-text-notification">
                           <div className="ongoing-text-sec">
                               <p style={{ marginBottom: 5 }}>{moment(item.createdOn).startOf('hour').fromNow()}</p>
                           </div>
                       </div>
                   </div>
                   })} 
                   
                </div>
            </div>
        </>
    )
}