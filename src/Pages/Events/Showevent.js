import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { deleteEvent, getEvent } from "../../Api/eventapi";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
function Showevent() {
  const navigate = useNavigate();
  const columns = [
    {
      name: <span style={{ fontSize: '16px', fontWeight: '600' }}>Sl.</span>,
      selector: row => row.sl,
    },
    {
      name: <span style={{ fontSize: '16px', fontWeight: '600' }}>Educare Virtual Events</span>,
      selector: row => row.event,
      width:"12rem"
    },
    {
      name: <span style={{ fontSize: '16px', fontWeight: '600' }}>Name</span>,
      selector: row => row.name,
    },
    {
      name: <span style={{ fontSize: '16px', fontWeight: '600' }}>Room type</span>,
      selector: row => row.room,
    },
    {
      name: <span style={{ fontSize: '16px', fontWeight: '600' }}>Seat Price</span>,
      selector: row => row.price,
    },
    {
      name: <span style={{ fontSize: '16px', fontWeight: '600' }}>Start Date</span>,
      selector: row => row.start_date,
    },
    {
      name: <span style={{ fontSize: '16px', fontWeight: '600' }}>End Date</span>,
      selector: row => row.end_date,
    },
    {
      name: <span style={{ fontSize: '16px', fontWeight: '600' }}>Start Time</span>,
      selector: row => row.stime,
    },
    {
      name: <span style={{ fontSize: '16px', fontWeight: '600' }}>End Time</span>,
      selector: row => row.etime,
    },
    {
      name: <span style={{ fontSize: '16px', fontWeight: '600' }}>Time Zone</span>,
      selector: row => row.tzone,
    },
    {
      name: <span style={{ fontSize: '16px', fontWeight: '600' }}>Host</span>,
      selector: row => row.host,
    },
    {
      name: <span style={{ fontSize: '16px', fontWeight: '600' }}>Priority</span>,
      selector: row => row.priority,
    },
    {
      name: <span style={{ fontSize: '16px', fontWeight: '600' }}>Created By</span>,
      selector: row => row.created,
    },
    {
      name: <span style={{ fontSize: '16px', fontWeight: '600' }}>Updated By</span>,
      selector: row => row.updated,
    },
    {
      name: <span style={{ fontSize: '16px', fontWeight: '600' }}>Session</span>,
      selector: row => row.session,
    },
    {
      name: <span style={{ fontSize: '16px', fontWeight: '600' }}>Sponsor</span>,
      selector: row => row.sponsor,
    },
    {
      name: <span style={{ fontSize: '16px', fontWeight: '600' }}>Booth</span>,
      selector: row => row.booth,
    },
    {
      name: <span style={{ fontSize: '16px', fontWeight: '600' }}>Event Joiner</span>,
      selector: row => row.ejoiner,
    },
    {
      name: <span style={{ fontSize: '16px', fontWeight: '600' }}>Status</span>,
      selector: row => row.status,
    },
    {
      name: <span style={{ fontSize: '16px', fontWeight: '600' }}>Action</span>,
      selector: row => row.action,
    },
  ];

  // const data = [
  //   {
  //     id: 1,
  //     sl: '1',
  //     event: 'yes',
  //     name: 'normal event',
  //     room: 'Table Networking',
  //     price: '0',
  //     date: 'December 3, 2022 To December 5, 2022',
  //     stime: '05:38:00 pm',
  //     etime: '06:28:00 pm',
  //     tzone: 'British Summer Time',
  //     host: 'no',
  //     priority: '1',
  //     created: 'admin on 12/10/2022, 12:29',
  //     updated: 'admin on 01/11/2022, 19:12',
  //     session: <a style={{ fontSize: "12px" }} className="btn btn-danger" href="/sessionsnormalevent">Session</a>,
  //     sponsor: <a style={{ fontSize: "12px" }} className="btn btn-danger" href="#">Sponsor</a>,
  //     booth: <a style={{ fontSize: "12px" }} className="btn btn-danger" href="#">Booth</a>,
  //     ejoiner: <a style={{ fontSize: "12px" }} className="btn btn-danger" href="#">View Joiners</a>,
  //     status: <button title="" style={{ fontSize: "12px" }} className="btn btn-success mr-2">Active</button>,
  //     action: (<><button title="Delete" style={{ fontSize: "12px" }} className="btn btn-danger mr-1"><i style={{ fontSize: "14px", color: "#fff" }} className="fa fa-trash"></i></button>
  //       <button title="Edit" style={{ fontSize: "12px", color: "#fff" }} className="btn btn-primary"><i style={{ fontSize: "14px", color: "#fff" }} className="fa fa-edit"></i></button></>)
  //   },

  // ]

  const [data, setData] = useState([]);
  useEffect(() => {
    fetchEvent();
  }, []);
  const editEvent = (item) => {
    navigate("/createevents", { state: item });
  };
  const deleteEve = async (id) => {
    let result = await deleteEvent(id);
    // console.log("result", result);
    if (result && result.status) {
      toast.success(result.message);
      setTimeout(() => {
        fetchEvent();
      }, 1500);
    } else {
      toast.error(result.message);
    }
  };
  const fetchEvent = async () => {
    let result = await getEvent();
    console.log("result",result);
    if (result && result.status) {
      let arr = result.data.map((item, i) => {
        return {
          id: item._id,
          sl: i + 1,
          event: item.ownEvent,
          name: item.eventName,
          room: item.eventRoom ?? "",
          price: item.seatPrice ?? "0",
          start_date: item.startDate,
          end_date: item.endDate,
          stime: item.startTime,
          etime: item.endTime,
          tzone: item?.timeZone?.value,
          host: item.hostedBy,
          priority: item?.priority,
          created: item?.createdOn,
          updated: "admin on 01/11/2022, 19:12",
          session: (
            <a
              style={{ fontSize: "12px" }}
              className="btn btn-danger"
              // href="/sessionsnormalevent"
              onClick={() => {
                navigate("/sessionsnormalevent", { state: { id: item._id,item } });
              }}
            >
              Session
            </a>
          ),
          sponsor: (
            <a style={{ fontSize: "12px" }} className="btn btn-danger" href="#">
              Sponsor
            </a>
          ),
          booth: (
            <a
              onClick={() => {
                navigate("/add-event-booths", { state: { id: item._id } });
              }}
              style={{ fontSize: "12px" }}
              className="btn btn-danger"
            >
              Booth
            </a>
          ),
          ejoiner: (
            <a style={{ fontSize: "12px" }} className="btn btn-danger" href="#">
              View Joiners
            </a>
          ),
          status: (
            <button
              title=""
              style={{ fontSize: "12px" }}
              className="btn btn-success mr-2"
            >
              Active
            </button>
          ),
          action: (
            <>
              <button
                onClick={() => deleteEve(item._id)}
                title="Delete"
                style={{ fontSize: "12px" }}
                className="btn btn-danger mr-1"
              >
                <i
                  style={{ fontSize: "14px", color: "#fff" }}
                  className="fa fa-trash"
                ></i>
              </button>
              <button
                title="Edit"
                onClick={() => editEvent(item)}
                style={{ fontSize: "12px", color: "#fff" }}
                className="btn btn-primary"
              >
                <i
                  style={{ fontSize: "14px", color: "#fff" }}
                  className="fa fa-edit"
                ></i>
              </button>
            </>
          ),
        };
      });

      setData(arr);
    }
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
                      fontSize: '22px',
                      fontWeight: '600',
                      color: '#000000',
                    }}
                  >
                    Manage Events
                  </h5>
                  {/* <a className="btn btn-danger mr-2" href="#">
                    Deleted Events
                  </a> */}
                </div>
                <DataTable columns={columns} data={data} pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Showevent;
