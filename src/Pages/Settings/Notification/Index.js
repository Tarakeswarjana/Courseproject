import React, { useEffect, useState } from "react";
import { toast, ToastContainer ,Zoom} from "react-toastify";
import HttpClient from "../../../utils/HttpClient";

export default function Notification() {
  const [welcomeMessege, setwelcomeMessege] = useState("");
  const [notification, setNotification] = useState();
  const [notificationId, setNotificationId] = useState("");
  const [enableButton, setEnableButton] = useState(false)

  useEffect(() => {
    fetchNotification();
  }, []);
  const fetchNotification = async () => {
    let result = await HttpClient.requestData("viewNotification", "GET");
    if (result && result.status) {
      setwelcomeMessege(result.data.welcomeMessege);
      setNotification(result.data.isTurnedOn);
      setNotificationId(result.data._id);
    }
  };

  const Submit = async () => {
    let data = {
      welcomeMessege,
    };
    let result = await HttpClient.requestData(
      "createNotification",
      "POST",
      data
    );
    if (result && result.status) {
      toast.success("Notification Saved Successfully");
      fetchNotification();
      // setNotification()
      // setwelcomeMessege(result.data[0].welcomeMessege)
    }
  };
  const notificationStatusChange = async () => {
    if (notificationId != "") {
      let data = {
        isTurnedOn: !notification,
      };
      let result = await HttpClient.requestData(
        "updateTurnOnStatus/" + notificationId,
        "PUT",
        data
      );
      if (result && result.status) {
        toast.success("Notification Saved Successfully");
        fetchNotification();
        setNotification();
        // setwelcomeMessege(result.data[0].welcomeMessege)
      }
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
          <div className="_enrollment">
            <section className="profile__NotiFication py-3">
              <h4 className="notification__Title  mb-4">Notification</h4>
              <div className="card mb-5">
                <div className="card-body">
                  <div className="d-block d-md-flex align-items-center justify-content-between ">
                    <div className="d-block d-sm-flex align-items-center justify-content-between update mb-3 mb-md-0">
                      <h6 className="allow__Updatetext mr-sm-5 my-0 mb-2 mb-md-0">Allow Email Updates</h6>
                      <span className="turn_ONtext">is turned {notification ? 'on' : 'off'} </span>
                    </div>
                    <button
                      className="btn trunOffBTN"
                      style={{ background: notification && '#138BFB' }}
                      onClick={notificationStatusChange}
                    >
                      {notification ? 'Turn off' : 'Turn on'}
                    </button>
                  </div>
                </div>
              </div>
              <div className="card mb-5 sectNotify_card">
                <div className="card-body">
                  <div className="form-group">
                    <label for="">Default messages to be sent to students after enrolling the course </label>
                    <textarea
                      className="form-control textarea__NotiFI"
                      value={welcomeMessege}
                      onChange={val => {
                        setEnableButton(true);
                        setwelcomeMessege(val.target.value);
                      }}
                    ></textarea>
                    {enableButton ? (
                      <button
                        className="btn btn-success"
                        style={{ float: 'right', marginTop: '10px' }}
                        onClick={() => {
                          setEnableButton(false);
                          Submit();
                        }}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        className="btn trunOffBTN"
                        style={{ float: 'right', marginTop: '10px' }}
                        // onClick={Submit}
                      >
                        Save
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
