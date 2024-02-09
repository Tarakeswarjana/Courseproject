import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { reactLocalStorage } from "reactjs-localstorage";
import HttpClient from "../../utils/HttpClient";

export default function ChoosePlans({ subsId, edit = false, closeModal }) {
  const [subscription, setSubscription] = useState([]);
  const [duration, setduration] = useState("")
  const [numberOfCourse, setnumberOfCourse] = useState("")
  const [numberOfCoTeacher, setnumberOfCoTeacher] = useState("")
  const Navigate = useNavigate();
  const handleSubmit = async (id, duration, numberOfCoTeacher, numberOfCourse) => {
    if (!edit) {
      let dataSend = {
        subs_id: id,
        // nextRoute: "/Upload_basic_information",
        nextRoute: '/dashboard',
        duration: duration,
        numberOfCourse: numberOfCourse,
        numberOfCoTeacher: numberOfCoTeacher,
      };
      let result = await HttpClient.requestData(
        "make-subcsription",
        "POST",
        dataSend
      );
      console.log("subscrip", result)
      console.log("dataSend", dataSend);
      if (result && result.status) {
        reactLocalStorage.set("token", result.data.token)
        // toast.success("Subscription Added successfully");
        toast.success('congratulations !!  Subscription Added successfully', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setTimeout(() => {
          Navigate('/dashboard', { state: { prvPath: 'upload_certification' } });
        }, 2000);
      } else {
        // toast.warn("something went wrong");
        toast.error('something went wrong', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
    else {
      let dataSend = {
        subs_id: id,
        duration: duration
      };
      console.log(dataSend);
      let result = await HttpClient.requestData("teacher-changed-plan", "PUT", dataSend);
      console.log("subscrip", result)
      if (result && result.status) {
        reactLocalStorage.set("token", result.data.token)
        toast.success("Subscription Added successfully");
        setTimeout(() => {
          // Navigate("/Upload_basic_information");
          closeModal()
        }, 2000);
      } else {
        // toast.warn("something went wrong");
        toast.success('congratulations !!  Subscription Added successfully', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }

  };
  useEffect(() => {
    fetchSubscription();
    console.log(subsId);
  }, []);
  const fetchSubscription = async () => {
    let result = await HttpClient.requestData("viewallsubscription", "GET");
    console.log("subscription", result)
    if (result && result.status) {
      console.log();
      setSubscription(result.data);

    }
  };
  return (
    <>
      <div id="wrapper">
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
        <div
          id="content-wrapper"
          className="d-flex flex-column"
          style={{ background: 'rgb(242 243 247);', height: '100vh', overflowX: 'auto', width: '100%' }}
        >
          <div id="content" style={{ margin: '20px 0', display: 'grid', alignContent: 'center' }}>
            <div className="container">
              <h2 className="text-center chooseplanteacher">Choose Your Suitable Plan</h2>
              <div className="table-responsive tableCustom">
                <table className="table table-bordered tableBox tablechooseplan">
                  <thead>
                    <tr>
                      <th>Features</th>
                      {subscription.map(item => {
                        return <th key={item._id}> {item.name}</th>;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Total number of courses</td>
                      {subscription.map(item => {
                        return (
                          <td key={item._id}>
                            <p>{item.numberOfCourse}</p>
                          </td>
                        );
                      })}
                    </tr>
                    <tr>
                      <td>Total number of Co - Teachers</td>
                      {subscription.map(item => {
                        return (
                          <td key={item._id}>
                            <p>{item.numberOfCoTeacher}</p>
                          </td>
                        );
                      })}
                    </tr>
                    <tr>
                      <td>Price</td>
                      {subscription.map(item => {
                        return (
                          <td key={item._id}>
                            <p> ₹ {item.price} </p>
                          </td>
                        );
                      })}
                    </tr>
                    {/* <tr>
                      <td>Total number of Duration</td>
                      <td>
                        <p>5</p>
                      </td>
                      <td>
                        <p>15</p>
                      </td>
                      <td>
                        <p>50</p>
                      </td>
                    </tr> */}
                    {/* <tr>
                      <td>Total number of courses</td>
                      <td>
                        <p>5</p>
                      </td>
                      <td>
                        <p>15</p>
                      </td>
                      <td>
                        <p>50</p>
                      </td>
                    </tr>
                    <tr>
                      <td>Total number of courses</td>
                      <td>
                        <p>5</p>
                      </td>
                      <td>
                        <p>15</p>
                      </td>
                      <td>
                        <p>50</p>
                      </td>
                    </tr>
                    <tr>
                      <td>Total number of courses</td>
                      <td>
                        <p>5</p>
                      </td>
                      <td>
                        <p>15</p>
                      </td>
                      <td>
                        <p>50</p>
                      </td>
                    </tr>
                    <tr>
                      <td>Total number of courses</td>
                      <td>
                        <p>5</p>
                      </td>
                      <td>
                        <p>15</p>
                      </td>
                      <td>
                        <p>50</p>
                      </td>
                    </tr> */}
                    <tr>
                      <td>Total Duration</td>
                      {subscription.map((item, index) => {
                        return (
                          <td key={item._id}>
                            <p>{item.duration}</p>
                            <button
                              type="button"
                              onClick={() =>
                                handleSubmit(item._id, item.duration, item.numberOfCoTeacher, item.numberOfCourse)
                              }
                              className={
                                index == 0
                                  ? 'btn btn-selectorange w-100'
                                  : index == 1
                                  ? 'btn btn-selectblue w-100'
                                  : 'btn btn-selectgreen w-100'
                              }
                            >
                              {subsId && subsId == item._id ? 'Current Plan' : edit ? 'Change Plan' : 'Buy Now'}
                            </button>
                          </td>
                        );
                      })}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="choose_plans_preloader">
        <div className="loader">
          <span className="loader-inner-1"></span>
          <span className="loader-inner-2"></span>
          <span className="loader-inner-3"></span>
          <span className="loader-inner-4"></span>
        </div>
      </div>
    </>
  );
}
