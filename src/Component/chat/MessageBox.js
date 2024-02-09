import React, { useRef, useState, useEffect } from "react";
import tripledots from "../../asstes1/images/tripledots.png";
import audio from "../../asstes1/images/audio.png";
import mic from "../../asstes1/images/icon/mic.png";
import upload from "../../asstes1/images/icon/upload.png";
import share from "../../asstes1/images/icon/share.png";
import Messages from "./Messages";
import { db } from "../../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import moment from "moment";
import { socket } from "../../Socket/socket";
import HttpClient from "../../utils/HttpClient";
import { toast, ToastContainer } from "react-toastify";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";

function MessageBox({ chatMember }) {
  // const [audioLink, setAudiolink] = useState("")
  const addAudioElement = async (blob) => {
    // console.log(blob);

    let data = new FormData()
    data.append("audio", blob)

    let result = await HttpClient.fileUplode("upload/audioUpload", "POST", data)
    // console.log(result);
    if (result && result.status) {
      setFileUrl(result.url)
      setFileType("audio")
    }

    // const url = URL.createObjectURL(blob);
    // // setAudiolink(url)
    // const audio = document.createElement('audio');
    // audio.src = url;
    // audio.controls = true;
    // document.body.appendChild(audio);
  };
  const [btn, setBtn] = useState(false);
  const { userData } = useSelector((state) => state.User);
  const [allMessages, setAllMessages] = useState([]);

  const [fileUrl, setFileUrl] = useState("");
  const [fileType, setFileType] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");

  // console.log("chatmember", chatMember);
  // const [message,setMessages] = useState("")
  const messageRef = useRef();

  const SendMessage = async () => {
    if (messageRef.current.value != "") {
      let dataSend = {
        senderId: chatMember?.userData?._id,
        chatData: {
          message: messageRef.current.value,
          type: "text",
          room_id: chatMember._id,
          created_at: moment().format(),
        },
      };
      // console.log(dataSend);
      socket.emit("chat", dataSend);
      let messegeData = {
        created_at: moment().format(),
        message: messageRef.current.value,
        sender_id: userData?._id,
        type: "text",
      };
      setAllMessages([...allMessages, messegeData]);
      messageRef.current.value = "";
    }
    // if (messageRef.current.value != "") {
    //   let result = await setDoc(
    //     doc(db, "Chat", chatMember._id, "message", uniqueId()),
    //     {
    //       message: messageRef.current.value,
    //       createOn: moment().format(),
    //       senderId: userData._id,
    //       receiverId: chatMember.userId,
    //     }
    //   );

    //   //   console.log("send",result);
    //   messageRef.current.value = "";
    // }
    if (fileUrl !== "" && fileType !== "") {
      let dataSend = {
        senderId: chatMember?.userData?._id,
        chatData: {
          message: fileUrl,
          type: fileType,
          room_id: chatMember._id,
          created_at: moment().format(),
          fileName: fileName,
          fileSize: fileSize,
        },
      };
      socket.emit("chat", dataSend);
      let messegeData = {
        created_at: moment().format(),
        message: fileUrl,
        type: fileType,
        sender_id: userData?._id,
        fileName: fileName,
        fileSize: fileSize,
      };
      // console.log("messegeData",messegeData);
      setAllMessages([...allMessages, messegeData]);
      setFileType("");
      setFileUrl("");
    }
  };

  const fetchAllMessage = async () => {
    let result = await HttpClient.requestChat(
      `viewallchatdetails/${chatMember?._id}`,
      "GET"
    );
    // console.log("result", result);
    if (result && result.status) {
      setAllMessages(result.data);
    }
  };
  // const uniqueId = () => parseInt(Date.now() * Math.random(), 10).toString();
  useEffect(() => {
    socket.on("chat", (payload) => {
      setAllMessages([...allMessages, payload]);
      // console.log("medd", payload);
    });
    return () => { };
  });

  const callBackSetMessage = () => { };
  useEffect(() => {
    fetchAllMessage();
  }, [chatMember]);
  // console.log(allMessages);

  const uploadImage = async (e) => {
    setFileSize(`${e.size / 1000} KB`);
    let data = new FormData();
    data.append("files", e);
    let result = await HttpClient.fileUplode(
      "upload/filesUpload",
      "POST",
      data
    );
    // console.log(result);
    if (result && result.status) {
      setFileUrl(result.url);
      setFileName(result.originalname);
    }
  };

  const FileUpload = async (e) => {
    // console.log(e.size);
    setFileSize(`${e.size / 1000} KB`);
    if (!e.name.match(/\.(jpg|JPG|gif|GIF|doc|DOC|pdf|PDF)$/)) {
      toast.warn("select valid document.");
      return false;
    } else {
      let data = new FormData();
      data.append("files", e);
      let result = await HttpClient.fileUplode(
        "upload/filesUpload",
        "POST",
        data
      );
      if (result && result.status) {
        setFileUrl(result.url);
        setFileName(result.originalname);
      }
    }
  };

  // For audio
  return (
    <>
      <div className="col-md-9 col-lg-9 col-12">
        {chatMember && (
          <div className="chaTprofile">
            <div className="col-md-12 col-lg-12 col-12">
              <div
                className="chatListProfileItem"
                style={{ borderBottom: "2px solid #E9E9F3" }}
              >
                <div className="dpImg">
                  <img src={chatMember?.userData?.image} />
                </div>
                <div className="dpNameMsg">
                  <p className="dpnname">{chatMember?.userData?.name}</p>
                  <p className="dpText">Active now</p>
                </div>
                <img src={tripledots} className="tripledots" />
              </div>
              <Messages
                conversationId={chatMember?._id}
                allMessages={allMessages}
                chatMember={chatMember}
                fileType={fileType}
                fileUrl={fileUrl}
                setFileType={setFileType}
                setFileUrl={setFileUrl}
                fileName={fileName}
              />
              <div className="commentBox">
                <div className="commentBoxleft">
                  <AudioRecorder onRecordingComplete={addAudioElement} />
                  <input
                    type="text"
                    placeholder="Write a message"
                    ref={messageRef}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        SendMessage();
                        setFileName("");
                        setFileSize("");
                      }
                    }}
                    disabled={fileUrl !== "" ? true : false}

                  />
                </div>
                <div className="commentBoxright" style={{ display: "flex" }}>
                  <img
                    src={upload}
                    className="upload"
                    onClick={() => {
                      setBtn(!btn);
                    }}
                  />

                  {/* <button type="submit" value="Submit">  */}
                  <img
                    src={share}
                    className="share"
                    onClick={SendMessage}
                    style={{ cursor: "pointer" }}
                  />
                  {/* </button> */}
                </div>
                {btn && (
                  <div className="whtspbtnShow">
                    <div>
                      <a>
                        <label className="form_label">
                          <i className="fa fa-image" aria-hidden="true"></i>
                          <input
                            type="file"
                            className="form-control"
                            id="uploadFile"
                            accept="image/*"
                            onChange={(e) => {
                              uploadImage(e.target.files[0]);
                              setFileType("image");
                              setBtn(!btn);
                            }}
                          />
                        </label>
                      </a>
                    </div>
                    <div>
                      <div>
                        <a>
                          <label className="form_label">
                            <i className="fa fa-file" aria-hidden="true"></i>
                            <input
                              type="file"
                              className="form-control"
                              id="uploadFile"
                              onChange={(e) => {
                                FileUpload(e.target.files[0]);
                                setFileType("doc");
                                setBtn(!btn);
                              }}
                            />
                          </label>
                        </a>
                      </div>
                    </div>
                    {/* <div>
                      <a>
                        <i className="fa fa-whatsapp" aria-hidden="true"></i>
                      </a>
                    </div> */}
                  </div>
                )}
              </div>
            </div>
            {/* <div className="col-md-4 col-lg-4 col-12">
                                                <div className="dp-details">
                                                    <div className="dp-detailsBox">
                                                        <p className="live-call-taken">Live Call Taken</p>
                                                        <p className="total-calls">Total (2)</p>
                                                    </div>
                                                </div>
                                                <div className="dpAnout">
                                                    <h1 className="dpAboutTitle">About Bessie Cooper</h1>
                                                    <p className="fromTitle">From</p>
                                                    <div className="dp-detailsBox">
                                                        <p
                                                            className="live-call-taken"
                                                            style={{ color: "#898989" }}
                                                        >
                                                            On Educare since
                                                        </p>
                                                        <p
                                                            className="total-calls"
                                                            style={{
                                                                color: "#171725",
                                                                fontSize: 14,
                                                                lineHeight: "22px",
                                                                textDecoration: "none"
                                                            }}
                                                        >
                                                            Mar 2021
                                                        </p>
                                                    </div>
                                                </div>
                                            </div> */}
          </div>
        )}
      </div>
    </>
  );
}

export default MessageBox;
