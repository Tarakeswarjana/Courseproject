import React, { useEffect,useState } from 'react'
import audio from '../../asstes1/images/audio.png'
import HttpClient from '../../utils/HttpClient'
import { doc, onSnapshot, collection } from "firebase/firestore";

import { db } from "../../firebase/firebase";
import { useSelector } from "react-redux";
import moment from 'moment';


function MessageTab({studentId}) {
    const [allMessages, setAllMessages] = useState([]);
    const {userData} = useSelector((state)=>state.User)


    useEffect(()=>{
         fetchConversationId()
    },[])

    const fetchConversationId = async()=>{
        let dataSend = {
            receiverId:studentId,
            senderType:"teacher",
            receiverType:"student",
            message:"hiii",
            lastMsgBy:"teacher"
        }
        let result = await HttpClient.requestData("createChat","POST",dataSend)
        console.log("conver",result);
        if(result&&result.status){
            fetchCoversation(result.data._id)
        }
    }

    const fetchCoversation = async (id) => {
     const unsubscribe=  onSnapshot(
          collection(db, "Chat", id, "message"),
          (data) => {
            let list = [];
            // Respond to data
            console.log(data.docs);
            data.forEach((documentSnapshot) => {
              list.push(documentSnapshot.data());
              console.log(
                "User ID: ",
                documentSnapshot.id,
                documentSnapshot.data()
              );
            });
    
            setAllMessages(list.sort(function (a,b) {
                return b.createOn < a.createOn ? -1
                    : b.createOn > a.createOn ? 1
                        : 0
            }))        
            // ...
          }
        )
        // unsubscribe()
    // console.log("all",list);
    
        //    let result= db.collection("Chat").doc(conversationId).collection("messages").get()
        //     console.log(result);
      };
  return (
<div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-meesages-tab"
          >




          {allMessages.map((item)=>{
              if(userData._id !=item.senderId){
                  return <div className="chatMsg" style={{ marginTop: 25 }}>
                  <p className="chatText">
                    {item.message}
                  </p>
                  <p className="ChatTime">{moment(item.createOn).format("LT")}</p>
                </div>
              }
              else{
                  return  <div className="ReplyMsg" style={{ textAlign: "right" }}>
                  <p className="ChatTime">{moment(item.createOn).format("LT")}</p>
                  <p className="chatText">
                   {item.message}
                  </p>
                </div>
              }
       
               
          
           
          })} 
              {/* <div className="chatMsg">
              <img src={audio} />
              <p className="ChatTime">09:47pm </p>
            </div> */}
            {/* <div className="chatMsg">
              <p className="chatText">
                I don’t know, it’s looks fine for me.
              </p>
              <p className="ChatTime">09:47pm </p>
            </div>
            <div className="chatMsg">
              <p className="chatText">
                Maybe <span className="nameTag">@Richard Wu</span> and{" "}
                <span className="nameTag">@Jimmy</span> will have a
                different though on this.
              </p>
              <p className="ChatTime">09:47pm </p>
            </div>
            <div className="chatMsg">
              <p className="chatText">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
              <p className="ChatTime">09:47pm </p>
            </div>
            <div className="ReplyMsg" style={{ textAlign: "right" }}>
              <p className="ChatTime">09:47pm</p>
              <p className="chatText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit
              </p>
            </div> */}




          </div>  )
}

export default MessageTab