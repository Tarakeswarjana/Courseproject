import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { toast, ToastContainer ,Zoom} from "react-toastify";
import HttpClient from "../../../utils/HttpClient";
import Modal from 'react-modal';
import ChoosePlans from "../../Authentication/Chooseplans";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    outerWidth:"100%"
  },
}

export default function PrivacyAndPlans() {
  const oldPassword = useRef();
  const newPassword = useRef();
  const [planDate,setPlanDate] = useState("")
  const [currentPlan,setCurrentPlan] = useState(null)
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }


  const changePassword = async () => {
    if (oldPassword.current.value != "" && newPassword.current.value != "") {
      let dataSend = {
        oldPassword: oldPassword.current.value,
        newPassword: newPassword.current.value,
      };

      let result = await HttpClient.requestData(
        "change-password",
        "PUT",
        dataSend
      );
      if (result && result.status) {
        toast.success("Password changed successfully");
      }
    } else {
      toast.warn("Both fields are required");
    }
  };

  useEffect(()=>{
fetchPlan()
  },[])

  const fetchPlan =async()=>{
let result = await HttpClient.requestData("viewTeacherPlan","GET")
console.log("sss",result);
if(result&&result.status){
setPlanDate(result.data[0].startDate)
setCurrentPlan(result.data[0].teacherSubscriptionplan[0])
}
  }
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
            <section className="privacy__Profile my-4">
              <h4 className="privacy__Title mb-4">Privacy</h4>
              <div className="card">
                <div className="card-body">
                  <h5 className="change__PasswordTExt">Change Password</h5>
                  <div className="row align-items-end mt-4">
                    <div className="col-md-6 col-lg-4">
                      <div className="form-group">
                        <label htmlFor="">Old Password</label>
                        <input
                          type="text"
                          className="form-control input"
                          placeholder="***************"
                          ref={oldPassword}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="form-group">
                        <label htmlFor="">New Password</label>
                        <input
                          type="text"
                          className="form-control input"
                          placeholder="***************"
                          ref={newPassword}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="form-group">
                        <button
                          className="btn save__BTn"
                          onClick={changePassword}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="privacy__Profile my-4">
              <h4 className="privacy__Title mb-4">Plans</h4>
              <div className="card">
                <div className="card-body">
                  <div className="d-block d-sm-flex d-md-block d-lg-flex align-items-center justify-content-between">
                    <h4 className="basic__Plan m-0 mb-2">Basic Plan</h4>
                    <span className="d-block purchase__Date mb-2">
                      Purchased on : {moment(planDate).format("l")}
                    </span>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <a  className="btn view__PlAnBTn"
                      onClick={openModal} >
                        <i className="fa fa-eye" aria-hidden="true" /> View plan
                      </a>
                      {/* <button className="btn change__PlanBTn" onClick={openModal} >
                        Change plan
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
      <ChoosePlans subsId={currentPlan?._id} edit={true} closeModal={closeModal} />
      </Modal>
    </>
  );
}
