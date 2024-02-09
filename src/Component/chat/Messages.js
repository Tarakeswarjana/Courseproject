import React, { useEffect, useState, useRef } from "react";
import audio from "../../asstes1/images/audio.png";
import { doc, onSnapshot, collection } from "firebase/firestore";
import ScrollToBottom from "react-scroll-to-bottom";
import img from "../../asstes1/images/bgImageSignUp.PNG";

import { db } from "../../firebase/firebase";
import { useSelector } from "react-redux";
import moment from "moment";
import { socket } from "../../Socket/socket";

function Messages({
  conversationId,
  allMessages,
  chatMember,
  fileType,
  fileUrl,
  setFileType,
  setFileUrl,
  fileName,
}) {
  const divRef = useRef(null);
  // console.log(allMessages);

  useEffect(() => {
    // fetchCoversation();
    divRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  // const [allMessages, setAllMessages] = useState([]);
  const { userData } = useSelector((state) => state.User);
  // let reversedChat=

  //   const fetchCoversation = async () => {
  //     socket.on("chat",(payload)=>{
  //       // console.log(payload);
  //       setAllMessages([...allMessages,payload])
  //     })
  //     // console.log(conversationId);
  // //  const unsubscribe=  onSnapshot(
  // //       collection(db, "Chat", conversationId, "message"),
  // //       (data) => {
  // //         let list = [];
  // //         // Respond to data
  // //         // console.log(data.docs);
  // //         data.forEach((documentSnapshot) => {
  // //           list.push(documentSnapshot.data());
  // //           console.log(
  // //             "User ID: ",
  // //             documentSnapshot.id,
  // //             documentSnapshot.data()
  // //           );
  // //         });

  // //         setAllMessages(list.sort(function (a,b) {
  // //             return b.createOn < a.createOn ? -1
  // //                 : b.createOn > a.createOn ? 1
  // //                     : 0
  // //         }))
  // //         // ...
  // //       }
  // //     )
  //     // unsubscribe()
  // // console.log("all",list);

  //     //    let result= db.collection("Chat").doc(conversationId).collection("messages").get()
  //     //     console.log(result);
  //   };

  return (
    <>
      {/* <ScrollToBottom mode="bottom"> */}
      {/* <div className="chatMsg" style={{ marginTop: 25 }}>
        <p className="chatText">
          Dang, sorry for late reply, anyway.Hopefull, my thought will help you,
          BTW, Nice Work Man.{" "}
        </p>
        <p className="ChatTime">09:47pm </p>
      </div>
      <div className="chatMsg">
        <img src={audio} />
        <p className="ChatTime">09:47pm </p>
      </div> */}
      {/* <div className="ReplyMsg" style={{ textAlign: "right" }}>
        <p className="ChatTime">09:47pm</p>
        <p className="chatText">I think u made a mistake in the live class.</p>
      </div>
      <div className="chatMsg">
        <p className="chatText">I don’t know, it’s looks fine for me.</p>
        <p className="ChatTime">09:47pm </p>
      </div>
      <div className="chatMsg">
        <p className="chatText">
          Maybe <span className="nameTag">@Richard Wu</span> and{" "}
          <span className="nameTag">@Jimmy</span> will have a different though
          on this.
        </p>
        <p className="ChatTime">09:47pm </p>
      </div>
      <div className="chatMsg">
        <p className="chatText">Lorem ipsum dolor sit amet, consectetur.</p>
        <p className="ChatTime">09:47pm </p>
      </div> */}
      <div className="chat_msgINner" ref={divRef}>
        {allMessages.map((item, index) => {
          return (
            <div
              ref={divRef}
              key={index}
              className={
                userData._id == item.sender_id ? "ReplyMsg" : "chatMsg"
              }
              style={{ textAlign: userData._id == item.sender_id && "right" }}
            >
              <p className="ChatTime">
                {moment(item.created_at ?? "").format("LT")}
              </p>
              {item?.type === "image" ? (
                <div style={{ width: "200px", height: "150px", overflow : 'hidden' }}>
                  <img src={item?.message} className="img-fluid"  style={{ width: "100%", height: "100%", objectFit : 'cover' }} />
                </div>
              ) : item.type === "doc" ? (
                <div
                  className={
                    userData._id == item.sender_id ? "chatDoc" : "chatDocWhite"
                  }
                >
                  <div className="media">
                    <i className="fa-regular fa-file icons_MEdia"></i>
                    <div className="media-body ml-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <div style={{ maxWidth: "104px", width: "100%" }}>
                          <h4 className="text-left title_TExt">{item.fileName}</h4>
                          <div className="d-flex align-items-center">
                            {/* <span className="jsonFIle mr-2">Json</span>{" "}
                            <i className="fa-solid fa-circle circle_SIze"></i>{" "} */}
                            <span className="size">{item.fileSize}</span>
                          </div>
                        </div>

                        <div>
                          <a href={item?.message} download>
                            <i className="fa-solid fa-circle-arrow-down downloadiCOns"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : item.type === "audio" ? (
                <div>
                  <audio controls>
                    <source src={item?.message} type="audio/ogg" />
                  </audio>
                </div>
              ) :
                (
                  <p className="chatText">{item?.message}</p>
                )}
            </div>
          );
        })}
      </div>

      {fileType === "image" && fileUrl !== "" ? (
        <div className="uploadImgWrap">
          <a
            onClick={() => {
              setFileUrl("");
              setFileType("");
            }}
          >
            <i
              class="fa fa-times"
              aria-hidden="true"
              style={{ cursor: "pointer" }}
            ></i>
          </a>
          <div className="uploadImg">
            <img src={fileUrl} className="img-fluid" />
          </div>
        </div>
      ) : fileType === "doc" && fileUrl !== "" ? (
        <div className="uploadImgWrap">
          <a>
            <i
              className="fa fa-times"
              aria-hidden="true"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setFileType("");
                setFileUrl("");
              }}
            ></i>
          </a>
          <div className="uploadImg" style={{ justifyContent: "center" }}>
            <p className="m-0 mb-3 text-center">{fileName}</p>
            {/* <img src={fileUrl} className="img-fluid" /> */}
            <i
              className="fa-regular fa-file"
              style={{
                fontSize: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></i>
          </div>
        </div>
      ) : fileType === "audio" && fileUrl !== "" ? (
        <div className="uploadImgWrap">
          <a>
            <i
              className="fa fa-times"
              aria-hidden="true"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setFileType("");
                setFileUrl("");
              }}
            ></i>
          </a>
          <div className="uploadImg" style={{ justifyContent: "center" }}>
            {/* <p className="m-0 mb-3 text-center"></p> */}
            {/* <img src={fileUrl} className="img-fluid" /> */}
            <i class="fa-solid fa-microphone text-center mb-4" style={{ fontSize: '100px' }}></i>
            <audio controls>
              <source src={fileUrl} type="audio/ogg" />
            </audio>
          </div>
        </div>
      ) :
        null}

      {/* </ScrollToBottom> */}
    </>
  );
}

export default Messages;
