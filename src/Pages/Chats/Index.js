import React, { useEffect, useState } from "react";
import dp from "../../asstes1/images/dp.png";
import dp2 from "../../asstes1/images/dp2.png";
import dp3 from "../../asstes1/images/dp3.png";
import dp4 from "../../asstes1/images/dp4.png";
import dp5 from "../../asstes1/images/dp5.png";
import dp6 from "../../asstes1/images/dp6.png";
import dp7 from "../../asstes1/images/dp7.png";
import dp8 from "../../asstes1/images/dp8.png";
import dp9 from "../../asstes1/images/dp9.png";
import tripledots from "../../asstes1/images/tripledots.png";
import audio from "../../asstes1/images/audio.png";
import mic from "../../asstes1/images/icon/mic.png";
import upload from "../../asstes1/images/icon/upload.png";
import share from "../../asstes1/images/icon/share.png";
import ChatCard from "../../Component/chat/ChatCard";
import MessageBox from "../../Component/chat/MessageBox";
import HttpClient from "../../utils/HttpClient";
import { useLocation } from "react-router-dom";
import ChatCardSkeleton from "../../Component/FullPageLoader/ChatCardSkeleton";
import io from 'socket.io-client';
import { SocketConnect } from "../../Socket/socket";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer, Zoom } from "react-toastify";




export default function Chats() {
  const [isConnected, setIsConnected] = useState()
  const [socketId, setSocketId] = useState("")
  const Navigate = useNavigate()

  useEffect(() => {
    fetchchatList();
    if (state?.id) {
      setActiveIndex(state.id)
    }
    SocketConnect()
  }, []);

  const { state } = useLocation()
  const [chatList, setChatList] = useState([]);
  const [activeIndex, setActiveIndex] = useState();
  const [chatMember, setChatMember] = useState(null)

  const fetchchatList = async () => {
    let result = await HttpClient.requestData("viewAllChat", "GET");
    console.log(result);
    if (result && result.status) {
      setChatList(result.data);
    }
  };
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Zoom}
        limit={3}
        theme="colored"
      />
      <div className="container-fluid ">
        <div className="p-3">
          <div className="_enrollment align-content-center " style={{ display: 'grid' }}>
            <div className="row h-100">
              <div className="col-md-12 col-lg-12 col-12">
                <div className="chtsbcmsg">
                <div className="chats">
                    <h5 className="chts">Chats</h5>
                  </div>
                 
                  <div className="ChatsTitle"
                    onClick={() => {
                      Navigate(-1)
                    }}
                    style={{ cursor: "pointer" }}
                  >

                    <span className="newMessageNoti mr-0">Back</span>
                  </div>
                  
                </div>
                <div className="chatboat">
                  <div className="col-md-3 col-lg-3 col-12">

                    <div className="form-group has-search chat-search">
                      <span className="fa fa-search form-control-feedback" />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                    </div>
                    {chatList.length > 0 ? <div className="chatListProfile">
                      {chatList.map((item, index) => {
                        return (
                          <ChatCard
                            key={index}
                            image={item.userData?.image}
                            name={item.userData?.name}
                            lastmsg={item.message}
                            active={activeIndex == item._id ? true : false}
                            onClick={() => {
                              setActiveIndex(item._id)
                              setChatMember(item)
                            }
                            }
                          />
                        );
                      })}

                    </div> : "No chat list found"}
                  </div>
                  <MessageBox chatMember={chatMember} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
