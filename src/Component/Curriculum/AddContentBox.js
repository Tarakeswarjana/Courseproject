import React from "react";
import { useState } from "react";
import HttpClient from "../../utils/HttpClient";
import UploadingArea from "./UploadingArea";
import { toast } from "react-toastify";
import documentImg from "../../asstes1/images/documentsicon.png"
import video from "../../asstes1/images/video.png"
import webImg from "../../asstes1/images/mdi_web.png"
function AddContentBox({setloadingStatus, setBoxShow ,id,contentResult,setLoading,setName,setType,hideContainer}) {
  const [upload, setUpload] = useState(false);
//   const []

  const videoUpload =async(file)=>{
    // console.log(file)
    // setloadingStatus(true)
    // return false
    const video = file;
  
    // return false
    if (!video.name.match(/\.(mp4|mov|wmv|avi|avchd|mkv|webm)$/)) {
      toast.warn("select valid Video.");
      return false;
    } else {
      hideContainer(false)
      setName(video.name)
      let result = await HttpClient.uploadFileRequest(
        "contentvideo",
        file,
        (data) => {
          // console.log(data);
        setLoading(data)
        }
      );
      console.log(result);
      if (result && result.status) {
     let name=   file.name.split(".")
        let data ={
        name:name[0],
        type:"video",
        url:result.transcoderUrl
        }
        contentResult(data)
        // console.log(result.transcoderUrl)
        // setVideo(result.transcoderUrl);
      } else {
        toast.warn("something error");
      }
    }  
    // setloadingStatus(false)
  }

    const documentUpload = async(file)=>{
      let video = file
      
      if (!video.name.match(/\.(jpg|JPG|gif|GIF|doc|DOC|pdf|PDF)$/)) {
        toast.warn("select valid document.");
        return false;
      } else {
        hideContainer(false)
        setName(video.name)
        let result = await HttpClient.uploadFileRequestForFile(
          "contentdocument",
          file,
          (data) => {
            console.log(data);
          setLoading(data)
          }
        );
        console.log("document",result);
        if (result && result.status) {
       let name=   file.name.split(".")
          let data ={
          name:result.originalname,
          type:"doc",
          url:result.url
          }
          contentResult(data)
          // console.log(result.transcoderUrl)
          // setVideo(result.transcoderUrl);
        } else {
          toast.warn("something error");
        }
      }  
    }
    const WebFileUpload = async (file)=>{
      let video = file
      
      if (!video.name.match(/\.(html|md|svg)$/)) {
        toast.warn("select valid web file.");
        return false;
      } else {
        hideContainer(false)
        setName(video.name)
        let result = await HttpClient.uploadFileRequestForFile(
          "contentwebfiles",
          file,
          (data) => {
            console.log(data);
          setLoading(data)
          }
        );
        console.log(result);
        if (result && result.status) {
       let name=   file.name.split(".")
          let data ={
          name:result.originalname,
          type:"doc",
          url:result.url
          }
          contentResult(data)
          // console.log(result.transcoderUrl)
          // setVideo(result.transcoderUrl);
        } else {
          toast.warn("something error");
        }
      }   
    }
  return (
    <div className="_Add_ContentBox" style={{ display: "block" }}>
      <h6
        className="d-flex justify-content-between pb-2"
      >
        Add Content
        <span style={{ color: "#92929D" }} onClick={() => setBoxShow(false)}>
          Cancel
        </span>
      </h6>
   
        <div className="row _btnUp_area">
          <div className="col-md-4 col-12">
            <label className="form_label_btn">
              {/* <i className="fa fa-video-camera mr-2" aria-hidden="true"></i> */}
              <img src={video} alt="Video Icon" className="mr-2"/>
              Video
              <input type="file" className="form-control _btn_video" id="uploadFile" onChange={(e)=>videoUpload(e.target.files[0])} />
              <label></label>
            </label>
        
          </div>
          <div className="col-md-4 col-12">
            <label className="form_label_btn">

              <img
                className="mr-2"
                src={documentImg}
               
              />
              Documents
              <input type="file" className="form-control _btn_video"
               id="uploadFile"
               onChange={(e)=>documentUpload(e.target.files[0])}
                />
              <label></label>
            </label>
          
          </div>
          <div className="col-md-4 col-12">
            <label className="form_label_btn">

              <img
                className="mr-2"
                src={webImg}
                
              />
             Web File
              <input type="file" className="form-control _btn_video"
               id="uploadFile" 
               onChange={(e)=>WebFileUpload(e.target.files[0])}
               />
              <label></label>
            </label>
           
          </div>
        </div>
    </div>
  );
}

export default AddContentBox;
