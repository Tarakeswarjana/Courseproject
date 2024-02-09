import React from "react";
import { Fragment } from "react";
import { useEffect, useState } from "react";
import faqedit from "../../../asstes1/images/faqedit2.png"
import trash from "../../../asstes1/images/trash2.png"
import { toast } from "react-toastify";
import AddContentBox from "../../../Component/Curriculum/AddContentBox";
import HttpClient from "../../../utils/HttpClient";

function Allcontent({ id }) {
  const [allContent, setAllContent] = useState([]);
  const [resources, setResource] = useState([]);

  const [edit_enable,setEditEnable] = useState(false)
  const [editCenter,setEditCenter] = useState("")
  const [edit_id,setEditId] = useState("")
const [res_index,setResIndex] = useState(null)
  const [loading,setLoading] = useState(null)
  const [name,setName] = useState("")

  useEffect(() => {
    fetchContect();
  }, []);
  const fetchContect = async () => {
    // console.log(id);
    // alert("before")

    let result = await HttpClient.requestData("viewcontent/" + id, "GET");
    // console.log("aaa", result);
    if (result && result.status) {
      // alert("njjn")
      setAllContent(result.data);
    }
  };

  const ShowResource = async (id) => {
    // let result = await HttpClient.requestData("viewresource/"+id,"GET" )
    // console.log("res",result);
    // if(result && result.status){
    //   setResource(result.data)
    // }
  };

  const deleteResorce = async (id, i) => {
    let chooseContent = allContent.filter((item) => item._id === id);
    // console.log(chooseContent);
    chooseContent[0].resource.splice(i, 1);
    let data = {
      resource: chooseContent[0].resource,
    };
    // console.log(data);
    let result = await HttpClient.requestData("editcontent/" + id, "PUT", data);
    // console.log(result);
    if (result && result.status) {
      fetchContect();
    }
    // alert("del")
    // console.log(id);
    // let result = await HttpClient.requestData("deleteresource/"+id,"DELETE")
    // console.log(result)
    // if(result && result.status){

    // }
  };

  const deleteContent = async (id) => {
    let result = await HttpClient.requestData("deletecontent/" + id, "PUT");
    if (result && result.status) {
      fetchContect();
    }
  };

  const editContent = async(id,val,i)=>{
    setEditEnable(true)
    setEditCenter(val)
    setEditId(id)
    setResIndex(i)

  }
  const contentResult = async(data)=>{
    console.log(data)
    if(editCenter == "content"){
      let senddata ={
        contentName:data.name,
        contentType:data.type,
        contentUrl:data.url
      }
      let result = await HttpClient.requestData("editcontent/" + edit_id, "PUT", senddata);
      if(result && result.status){
        toast.success("edited successfully")
        fetchContect()
      }
    }
    if(editCenter =="resource"){
      let setdata = {
        resourceName:data.name,
        resourceType:data.type,
        resourceUrl:data.url
      }
      console.log(res_index);
      console.log(edit_id);
let prevContent = allContent.filter((item)=>item._id ===edit_id)
console.log("prev",prevContent);

prevContent[0].resource[res_index] = setdata
let dattSend={
  resource:prevContent[0].resource
}
console.log(dattSend);
let result = await HttpClient.requestData("editcontent/" + edit_id, "PUT", dattSend);
console.log(result);
if (result && result.status) {
  fetchContect();
  toast.success("edited successfully")
}


    }

  }
  return (
    <Fragment>
      {!edit_enable ?<>
      {allContent.map((item, i) => {
        return (
          <div className="resourcesBlock" key={i}>
            <div className="dropdown  w-100">
              <div
                className="resources_Btn"
                type="button"
                id="dropdownMenuButton"
                data-toggle="collapse"
                data-target={`#dropdown_content${item._id}`}
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div className="d-block d-sm-flex align-items-center justify-content-between">
                  <div className="">
                    <i
                      className="fa fa-video-camera mr-2"
                      aria-hidden="true"
                    ></i>
                    <span className="intro_duc">{item.contentName}</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-sm-between ">
                    {/* <i
                      className="fa fa-trash pr-2 px-md-2"
                      aria-hidden="true"
                      onClick={() => deleteContent(item._id)}
                    ></i> */}
                    <img src={faqedit}  alt="Edit" onClick={()=>editContent(item._id,"content")}/>
                    {/* <i
                      className="fa fa-pencil-square-o pr-2 px-md-2"
                      aria-hidden="true"
                      onClick={()=>editContent(item._id,"content")}
                    ></i> */}
                    <img src={trash} style={{margin: "0 15px"}} alt="Trash" onClick={() => deleteContent(item._id)}/>
                    <span className="dropdown-toggle">
                      {item.resource?.length} Resources
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="dropdown-menu  dropdown-menu-right w-100 "
                id={`dropdown_content${item._id}`}
                aria-labelledby="dropdownMenuLink"
              >
                <span className="resources_dropdtext">
                  {item.resource?.length} Resources
                </span>
                <hr className="mx-3" />
                {item.resource?.map((it, index) => {
                  return (
                    <a className="dropdown-item" href="#" key={index}>
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <span>
                          {index + 1}. {it.resourceName}
                        </span>
                        <span>
                          {/* <i
                            className="fa fa-pencil-square-o px-2"
                            aria-hidden="true"
                            onClick={()=>editContent(item._id,"resource",index)}
                          ></i> */}
                          <img src={faqedit}  alt="Edit" onClick={()=>editContent(item._id,"resource",index)}/>
                          {/* <i
                            className="fa fa-trash px-2"
                            aria-hidden="true"
                            onClick={(e) => {
                              console.log(item._id);
                              deleteResorce(item._id, index);
                            }}
                          ></i> */}
                          <img src={trash} style={{margin: "0 15px"}} alt="Trash" onClick={(e) => {
                              console.log(item._id);
                              deleteResorce(item._id, index);
                            }}/>
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
</>:
 <AddContentBox
 setName={setName}
 setLoading={setLoading}
 contentResult={contentResult}
 setBoxShow={setEditEnable}
//  id={item._id}
//  setType={setcontentType}
 hideContainer={setEditEnable}
/>
}

    </Fragment>
  );
}

export default Allcontent;
