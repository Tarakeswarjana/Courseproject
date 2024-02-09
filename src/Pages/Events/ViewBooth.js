import moment from "moment";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { toast, ToastContainer } from "react-toastify";
import { deleteEventBooth, viewEventBooth } from "../../Api/eventapi";
import a from "../../asstes1/images/design2.png";


export default function ViewBooth({ id ,childFunc,handleEdit}) {
  const [boothData, setBoothData] = useState([]);

  useEffect(() => {
    fetchBooth();
    childFunc.current = fetchBooth  ;
  }, []);

  async function fetchBooth() {
    let result = await viewEventBooth(id);
    // console.log(result);
    if (result && result.status) {
      let arr = result.data.map((item, index) => {
        return {
          ...item,
          sl: index + 1,
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
                 
              }}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          ),
        };
      });
      console.log("arr", arr);
      setBoothData(arr);
    }
  }
// console.log(boothData);
const sessiondelete = async (id) => {
    let res = await deleteEventBooth(id);
    // console.log("res", res);
    if (res && res.status) {
      toast.success("Booth deleted !");
      setTimeout(() => {
        fetchBooth()
      }, 1000);
    }
  };

const edit = (data) => {
    let obj = { ...data, eventId: data._id };
    handleEdit(obj);
  };

  const columns = [
    {
      name: <span style={{ fontSize: "16px", fontWeight: "600" }}>Sl.</span>,
      selector: (row) => row.sl,
    },
    {
      name: <span style={{ fontSize: "16px", fontWeight: "600" }}>Company Name</span>,
      selector: (row) => row.companyName,
    },
    {
        name: <span style={{ fontSize: "16px", fontWeight: "600" }}>Logo</span>,
        selector: (row) => 

        <div className="dataimgtable" style={{width: "100%", maxWidth: "50px", height: "50px", overflow: "hidden", margin: "auto 0px",}}>
            <img src={row.logo[0]} className="img-fluid" alt="logo" style={{width: "100%",height: "100%", objectFit: "contain"}}/>
        </div>,

      },
    {
      name: (
        <span style={{ fontSize: "16px", fontWeight: "600" }}>CEO Name</span>
      ),
      selector: (row) => row.ceoName,
    },
    {
        name: <span style={{ fontSize: "16px", fontWeight: "600" }}>CEO Image</span>,
        selector: (row) => 

        <div className="dataimgtable" style={{width: "100%", maxWidth: "50px", height: "50px", overflow: "hidden", margin: "auto 0px",}}>
            <img src={row.ceoImage[0]} className="img-fluid" alt="logo" style={{width: "100%",height: "100%", objectFit: "contain"}}/>
        </div>,

      },
    {
      name: (
        <span style={{ fontSize: "16px", fontWeight: "600" }}>CEO Designation</span>
      ),
      selector: (row) => row.ceoDesignation,
    },
    {
        name: <span style={{ fontSize: "16px", fontWeight: "600" }}>Banner Image</span>,
        selector: (row) => 

        <div className="dataimgtable" style={{width: "100%", maxWidth: "50px", height: "50px", overflow: "hidden", margin: "auto 0px",}}>
            <img src={row.bannerImage[0]} className="img-fluid" alt="logo" style={{width: "100%",height: "100%", objectFit: "contain"}}/>
        </div>,

      },

    // {
    //   name: (
    //     <span style={{ fontSize: "16px", fontWeight: "600" }}>Details</span>
    //   ),
    //   selector: (row) => row.details,
    // },
    {
      name: <span style={{ fontSize: "16px", fontWeight: "600" }}>Edit</span>,
      selector: (row) => row.edit,
    },
    {
      name: <span style={{ fontSize: "16px", fontWeight: "600" }}>Delete</span>,
      selector: (row) => row.delete,
    },
  ];


  return (
      <div className="container-fluid ">
        <ToastContainer />
        <div className="p-3 mt-5">
            <div className="row">
              <div className="col-md-12 col-lg-12 col-12 m-auto">
                <div className="d-flex justify-content-between align-items-center w-100 mb-4">
                  <h5
                    className="p-0 m-0"
                    style={{
                      fontSize: "22px",
                      fontWeight: "600",
                      color: "#000000",
                    }}
                  >
                    BOOTHS
                  </h5>
                  {/* <a className="btn btn-danger mr-2" href="#">
                    Deleted Events
                  </a> */}
                </div>
                <DataTable columns={columns} data={boothData} pagination />
              </div>
            </div>
        </div>
      </div>    
  );
}
