import axios from "axios";
import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import arrow from "../../asstes1/imagesHome/Vector-arrow.png";
import HttpClient from "../../utils/HttpClient";


export default function Plans() {
  const [subscription, setSubscription] = useState([]);

  useEffect(()=>{
    fetchSubscription()
  },[])


  const fetchSubscription = async () => {
    let result = await axios.get('https://api.mylearnr.app/api/v1/teacher/viewallsubscription')
    // console.log("subscription",result)
    if(result&&result.data.status){
      setSubscription(result.data.data);

    }
  };
// console.log("subscription",subscription);
  return (
    <section className="container">
      <div className="plan_Section">
        <h4 className="planTExt">Subscription Plan</h4>
        <div className="table-responsive custom_Tableres">
          <table className="table table-bordered tableBox tablechooseplan">
            <thead>
              <tr>
                <th>Features</th>
                {subscription?.map(item => {
                  return <th key={item._id}> {item.name}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Total number of courses</td>
                {subscription?.map(item => {
                  return (
                    <td key={item._id}>
                      <p>{item.numberOfCourse}</p>
                    </td>
                  );
                })}
              </tr>
              <tr>
                <td>Total number of Co - Teachers </td>
                {subscription?.map(item => {
                  return (
                    <td key={item._id}>
                      <p>{item.numberOfCoTeacher}</p>
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
                {subscription?.map((item, index) => {
                  return (
                    <td key={item._id}>
                      <p>{item.duration}</p>
                      <button
                        type="button"
                        // onClick={() => handleSubmit(item._id,item.duration)}
                        className="btn btn-selectblue w-100"
                        // {
                        //   index == 0
                        //     ? "btn btn-selectorange w-100"
                        //     : index == 1
                        //     ? "btn btn-selectblue w-100"
                        //     : "btn btn-selectgreen w-100"
                        // }
                      >
                        {/* {subsId && subsId== item._id?"Current Plan":edit? "Change Plan":"Submit"} */}
                        Submit
                      </button>
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="container-fluid" style={{ paddingRight: 0, paddingLeft: 0 }}>
          <div className="dashboard-get-btn-box">
            <Link to={'/register'} className="btn dashboard-get-btn" style={{ backgroundColor: '#D2F1FB' }}>
              Get started
              <img src={arrow} style={{ paddingLeft: 10 }} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
