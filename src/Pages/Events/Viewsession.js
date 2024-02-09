import moment from "moment";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { toast, ToastContainer } from "react-toastify";
import { deleteSession, viewSession } from "../../Api/eventapi";

const Viewsession = ({ id, childFunc, handleEdit }) => {
  const [sessionData, setSessionData] = useState([]);
  useEffect(() => {
    sessionView();
    childFunc.current = sessionView;
  }, []);
  async function sessionView() {
    let res = await viewSession(id);
    // console.log("res", res);
    if (res && res.status) {
      let arr = res.data.map((item, index) => {
        return {
          ...item,
          sl: index + 1,
          date: moment(item.data).format("LL"),
          details: item.details.slice(0, 11),
          edit: (
            <button
              onClick={() => edit(item)}
              className="btn btn-primary btn-sm"
            >
              edit
            </button>
          ),
          delete: (
            <button
              onClick={() =>{
                 sessiondelete(item._id)
                 sessionView()
              }}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          ),
        };
      });
      // console.log("arr", arr);
      setSessionData(arr);
    }
  }
  const sessiondelete = async (id) => {
    let res = await deleteSession(id);
    console.log("res", res);
    if (res && res.status) {
      toast.success("session deleted !");
      setTimeout(() => {
        sessionView();
      }, 1000);
    }
  };
  const columns = [
    {
      name: <span style={{ fontSize: "16px", fontWeight: "600" }}>Sl.</span>,
      selector: (row) => row.sl,
    },
    {
      name: <span style={{ fontSize: "16px", fontWeight: "600" }}>Name</span>,
      selector: (row) => row.name,
    },
    {
      name: (
        <span style={{ fontSize: "16px", fontWeight: "600" }}>Start Time</span>
      ),
      selector: (row) => row.startTime,
    },
    {
      name: (
        <span style={{ fontSize: "16px", fontWeight: "600" }}>End Time</span>
      ),
      selector: (row) => row.endTime,
    },
    {
      name: <span style={{ fontSize: "16px", fontWeight: "600" }}>Date</span>,
      selector: (row) => row.date,
    },
    {
      name: (
        <span style={{ fontSize: "16px", fontWeight: "600" }}>Details</span>
      ),
      selector: (row) => row.details,
    },
    {
      name: <span style={{ fontSize: "16px", fontWeight: "600" }}>Edit</span>,
      selector: (row) => row.edit,
    },
    {
      name: <span style={{ fontSize: "16px", fontWeight: "600" }}>Delete</span>,
      selector: (row) => row.delete,
    },
  ];
  const edit = (data) => {
    let obj = { ...data, eventId: data._id };
    handleEdit(obj);
  };
  return (
    <>
      <div className="container-fluid ">
        <ToastContainer />
        <div className="p-3">
          <div className="_enrollment showevent_cnt_area">
            <div className="row">
              <div className="col-md-12 col-lg-12 col-12">
                <div className="d-flex justify-content-between align-items-center w-100 mb-4">
                  <h5
                    className="p-0 m-0"
                    style={{
                      fontSize: "22px",
                      fontWeight: "600",
                      color: "#000000",
                    }}
                  >
                    SESSIONS
                  </h5>
                  <a className="btn btn-danger mr-2" href="#">
                    Deleted Events
                  </a>
                </div>
                <DataTable columns={columns} data={sessionData} pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Viewsession;
