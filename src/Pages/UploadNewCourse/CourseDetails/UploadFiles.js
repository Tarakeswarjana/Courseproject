import imageicon from "../../../asstes1/file22-upload.png";
import cameraicon from "../../../asstes1/images/cameraicon.png";
import { toast } from "react-toastify";
import HttpClient from "../../../utils/HttpClient";
import ReactHlsPlayer from "react-hls-player";
import { useState,useCallback } from "react";
import Loader from "../../../Component/Loader";
import ReactPlayer from "react-player";
import DotLoading from "../../../Component/FullPageLoader/DotLoading";
import { useDropzone } from "react-dropzone";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import UploadIntroVideo from "./UploadIntroVideo";

export default function UploadFiles({ image, setImage, video, setVideo }) {
  const [loading, setLoading] = useState(false);
  const [upImage,setUpImage]=useState()
  const imageHandle = async (file) => {
    const image = file;

    if (!image.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      toast.error("select valid image.");
      return false;
    } else {
      if (image.size < 10e6 / 2) {
        let data = new FormData();
        data.append("image", file);
        let result = await HttpClient.fileUplode(
          "thumbnailimage",
          "POST",
          data
        );
        console.log(result);
        if (result && result.status) {
          setImage(result.url);
        } else {
          toast.error("something error");
        }
      } else {
        toast.error("image size should be less than 5mb");
      }
    }
  };

  const [playVideo, setPlayVideo] = useState("");

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
    console.log("drop",acceptedFiles);

    const image = acceptedFiles[0];

    if (!image.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      toast.error("select valid image.");
      return false;
    } else {
      if (image.size < 10e6 / 2) {

        let result = await HttpClient.uploadFileRequestForImage(
          "thumbnailimage",
          acceptedFiles[0],
          (data)=>{
            console.log(data);
            setUpImage(data)
          }
        );
        console.log(result);
        if (result && result.status) {
          setImage(result.url);
        } else {
          toast.error("something error");
        }
      } else {
        toast.error("image size should be less than 5mb");
      }
    }
  }, []);

  const {
    isDragActive,
    getRootProps,
    getInputProps,
    isDragReject,
    acceptedFiles,
  } = useDropzone({
    onDrop,
    accept: "image/png",
    minSize: 0,
  });

  return (
    <>
      {/* <Loader/> */}
      <div className="pt-3 pt-lg-3 pt-sm-3">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="Neon Neon-theme-dragdropbox" style={{ maxWidth: '95%' }}>
              {/* <input
                style={{
                  zIndex: 999,
                  opacity: 0,
                  width: "100%",
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
                accept="image/*"
                onChange={(e) => imageHandle(e.target.files[0])}
              /> */}
              <div className="Neon-input-dragDrop m-0">
                <h5 className="font-weight-bold text-dark  pt-lg-0 pt-md-4 new_upld_own">Upload Thumbnail Image</h5>
                <div className="Neon-input-inner">
                  <div className="Neon-input-icon">
                    {/* {image ? (
                      <img
                        src={image}
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "contain",
                        }}
                      />
                    ) : (
                      <img src={imageicon} />
                    )} */}
                    {upImage && upImage < 100 ? (
                      <div style={{ height: '80px', width: '80px', margin: '0 auto' }}>
                        <CircularProgressbar
                          value={upImage}
                          text={`${upImage}%`}
                          styles={buildStyles({
                            textSize: '13px',
                          })}
                        />
                      </div>
                    ) : upImage === 100 && image == '' ? (
                      <div style={{ height: '80px', width: '80px', margin: '0 auto' }}>
                        <CircularProgressbar
                          value={upImage}
                          text={'Please Wait'}
                          styles={buildStyles({
                            textSize: '13px',
                          })}
                        />
                      </div>
                    ) : image !== '' ? (
                      <img src={image} style={{ maxWidth: '100%', height: '120px' }} />
                    ) : (
                      // <i className="fa fa-book" aria-hidden="true" />
                      <img src={imageicon} alt="Book Icon" />
                    )}
                  </div>
                  {/* <div className="Neon-input-text">
                    <h2
                      className="pt-4 font-weight-bold"
                      style={{ color: "#E2E2EA", fontSize: 25 }}
                    >
                      Thumbnail Image
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
                    <a>Drag and drop an image or Browse File. File size should be less than 5 MB. </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <UploadIntroVideo
            video={video}
            playVideo={playVideo}
            loading={loading}
            setLoading={setLoading}
            setPlayVideo={setPlayVideo}
            setVideo={setVideo}
          />
          {/* <div className="col-md-6 col-12">
            <h5 className="pb-3 font-weight-bold text-dark pt-4 pt-lg-0 pt-md-4">
              Upload Intro Video
            </h5>
            <div
              className="Neon Neon-theme-dragdropbox"
              style={{ maxWidth: "100%" }}
            >
              <input
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
              />
              <div className="Neon-input-dragDrop m-0">
                <div className="Neon-input-inner">
                  <div className="Neon-input-icon">
                    {video ? (
                      <video controls key={playVideo} style={{ width: "100%" }}>
                        <source src={playVideo} type="video/mp4" />
                      </video>
                    ) : (
                      <img src={cameraicon} />
                    )}
                  </div>
                  {loading && <DotLoading />}

                  <div className="Neon-input-text">
                    <h2
                      className="pt-4 font-weight-bold"
                      style={{ color: "#E2E2EA", fontSize: 25 }}
                    >
                      Intro Video
                    </h2>
                    <span
                      style={{ display: "inline-block", margin: 15 }}
                    ></span>
                  </div>
                  <p className="">
                    Drag and drop an image, or{" "}
                    <a href="#">Browse File size should be less than 5 MB</a>
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
