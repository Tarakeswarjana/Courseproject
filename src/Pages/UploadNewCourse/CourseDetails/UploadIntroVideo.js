import React, { useState,useCallback } from "react";
import cameraicon from "../../../asstes1/upload22 (1).png";
import DotLoading from "../../../Component/FullPageLoader/DotLoading";
import HttpClient from "../../../utils/HttpClient";
import { toast } from "react-toastify";
import { useDropzone } from "react-dropzone";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";



export default function UploadIntroVideo({video,playVideo,loading,setLoading,setPlayVideo,setVideo}){
    let [upVideo,setUpVideo]=useState()

    const videoHandle = async (file) => {
        // console.log(file.size)
        // return false
        setLoading(true);
        const video = file;
        if (!video.name.match(/\.(mp4|mov|wmv|avi|avchd|mkv|webm)$/)) {
          setLoading(false);
          toast.error("select valid Video.");
          return false;
        } else {
          if (video.size < 10e6 / 2) {
            let result = await HttpClient.uploadFileRequest(
              "introvideo",
              file,
              (data) => {
                console.log(data);
                setUpVideo(data)
              }
            );
            console.log(result);
            if (result && result.status) {
              console.log(result.transcoderUrl);
              setPlayVideo(result.originalUrl);
              setVideo(result.transcoderUrl);
            } else {
              toast.error("something error");
            }
            setLoading(false);
          } else {
            setLoading(false);
    
            toast.error("video size must be less than 5mb");
          }
        }
      };

      // Drag and Drop


      const onDrop = useCallback(async(acceptedFiles) => {
        console.log(acceptedFiles);
               // console.log(file.size)
        // return false
        setLoading(true);
        const video = acceptedFiles[0];
        if (!video.name.match(/\.(mp4|mov|wmv|avi|avchd|mkv|webm)$/)) {
          setLoading(false);
          toast.error("select valid Video.");
          return false;
        } else {
          if (video.size < 10e6 / 2) {
            let result = await HttpClient.uploadFileRequest(
              "introvideo",
              acceptedFiles[0],
              (data) => {
                console.log(data);
                setUpVideo(data)
              }
            );
            console.log(result);
            if (result && result.status) {
              console.log(result.transcoderUrl);
              setPlayVideo(result.originalUrl);
              setVideo(result.transcoderUrl);
            } else {
              toast.error("something error");
            }
            setLoading(false);
          } else {
            setLoading(false);
    
            toast.error("video size must be less than 5mb");
          }
        }
      }, []);
    
      const { isDragActive, getRootProps, getInputProps, isDragReject, acceptedFiles } = useDropzone({
        onDrop,
        accept: 'image/png',
        minSize: 0,
      });
    
    return (
      <div className="col-md-6 col-12">
        <div className="Neon Neon-theme-dragdropbox" style={{ maxWidth: '100%' }}>
          {/* <input
            style={{
              zIndex: 999,
              opacity: 0,
              width: 320,
              height: 200,
              position: "absolute",
              right: 0,
              left: 0,
              marginRight: "auto",
              marginLeft: "auto",
            }}
            name="files[]"
            id="filer_input2"
            multiple="multiple"
            type="file"
            accept="video/*"
            onInput={(e) => videoHandle(e.target.files[0])}
            onClick={(event) => {
              event.target.value = null;
            }}
          /> */}
          <div className="Neon-input-dragDrop m-0">
            <h5 className="font-weight-bold text-dark  pt-lg-0 pt-md-4 new_upld_own">Upload Intro Video</h5>
            <div className="Neon-input-inner">
              <div className="Neon-input-icon">
                {/* {video ? (
                  <video controls key={playVideo} style={{ width: "100%" }}>
                    <source src={playVideo} type="video/mp4" />
                  </video>
                ) : (
                  <img src={cameraicon} />
                )} */}
                {upVideo && upVideo < 100 ? (
                  <div style={{ height: '80px', width: '80px', margin: '0 auto' }}>
                    <CircularProgressbar
                      value={upVideo}
                      text={`${upVideo}%`}
                      styles={buildStyles({
                        textSize: '13px',
                      })}
                    />
                  </div>
                ) : upVideo === 100 && video == '' ? (
                  <div style={{ height: '80px', width: '80px', margin: '0 auto' }}>
                    <CircularProgressbar
                      value={upVideo}
                      text={'Please Wait'}
                      styles={buildStyles({
                        textSize: '13px',
                      })}
                    />
                  </div>
                ) : video !== '' ? (
                  <video controls key={playVideo} style={{ width: '100%' }}>
                    <source src={playVideo} type="video/mp4" />
                  </video>
                ) : (
                  // <i className="fa fa-book" aria-hidden="true" />
                  <img src={cameraicon} alt="Book Icon" />
                )}
              </div>
              {/* {loading && <DotLoading />} */}

              {/* <div className="Neon-input-text">
                <h2
                  className="pt-4 font-weight-bold"
                  style={{ color: "#E2E2EA", fontSize: 25 }}
                >
                  Intro Video
                </h2>
                <span
                  style={{ display: "inline-block", margin: 15 }}
                ></span>
              </div> */}
              <div className="container text-center mt-3">
                <div {...getRootProps()}>
                  <input
                    {...getInputProps()}
                    style={{
                      zIndex: 999,
                      opacity: 0,
                      width: '100%',
                      height: 300,
                      position: 'absolute',
                      right: 0,
                      left: 0,
                      top: 0,
                      marginRight: 'auto',
                      marginLeft: 'auto',
                    }}
                  />
                  {!isDragActive && 'Click here or drop a file to upload!'}
                  {isDragActive && !isDragReject && "Drop it like it's hot!"}
                  {isDragReject && 'File type not accepted, sorry!'}
                </div>
              </div>
              <p className="">
                Drag and drop a video or Browse File. <a>File size should be less than 5 MB.</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}