import React, { useState, useCallback } from "react";
import adversity from "../../../asstes1/images/adversity.png";
import { toast } from "react-toastify";
import booksicon from "../../../asstes1/images/booksicon.png";
import videoBook from "../../../asstes1/images/videoBook.png";
import HttpClient from "../../../utils/HttpClient";
import ReactHlsPlayer from "react-hls-player/dist";
import { useDropzone } from "react-dropzone";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Books({ books, setBooks }) {
  const [bookName, setBookName] = useState("");
  const [booklink, setBookLink] = useState("");
  const [bookImage, setBookImage] = useState("");
  const [bookVideo, setBookVideo] = useState("");
  const [edit_enable, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [playVideo, setPlayVideo] = useState("");
  const [upDocs, setUpDocs] = useState();
  // const imageHandle = async (file) => {
  //   const image = file;

  //   if (!image.name.match(/\.(jpg|jpeg|png|gif)$/)) {
  //     toast.warn("select valid image.");
  //     return false;
  //   } else {
  //     if (image.size < 10e6 / 2) {
  //       let data = new FormData();
  //       data.append("image", file);
  //       let result = await HttpClient.fileUplode("booksimage", "POST", data);
  //       console.log(result);
  //       if (result && result.status) {
  //         setBookImage(result.url);
  //       } else {
  //         toast.warn("something error");
  //       }
  //     } else {
  //       toast.warn("image size should be less than 5 mb");
  //     }
  //   }
  // };

  // const videoHandle = async (file) => {
  //   //   console.log(file)
  //   const video = file;
  //   if (!video.name.match(/\.(mp4|mov|wmv|avi|avchd|mkv|webm)$/)) {
  //     toast.warn("select valid Video.");
  //     return false;
  //   } else {
  //     if (video.size < 10e6 / 2) {
  //       let result = await HttpClient.uploadFileRequest(
  //         "explainatoryvideo",
  //         file,
  //         (data) => {
  //           console.log(data);
  //         }
  //       );
  //       // console.log(result);
  //       if (result && result.status) {
  //         // console.log(result.transcoderUrl)
  //         setPlayVideo(result.originalUrl);
  //         setBookVideo(result.transcoderUrl);
  //       } else {
  //         toast.warn("something error");
  //       }
  //     } else {
  //       toast.warn("video size should be less than 5 mb");
  //     }
  //   }
  // };

  const AddBooks = () => {
    if (bookImage != "" && booklink != "" && bookName != "") {
      let data = {
        name: bookName,
        link: booklink,
        book_image: bookImage,
        book_video: bookVideo,
      };
      if (edit_enable) {
        let prev = [...books];
        let Newdata = { ...prev[editIndex], ...data };
        prev[editIndex] = Newdata;
        setBooks(prev);
        setEdit(false);
        setEditIndex(null);
        setBookImage("");
        setBookName("");
        setBookLink("");
        //  setBookVideo("")
      } else {
        setBooks((prev) => [...prev, data]);
        setBookImage("");
        setBookName("");
        setBookLink("");
        // setBookVideo("")
      }
    } else {
      toast.warn("please add all books details");
    }
  };

  const RemoveBooks = (i) => {
    let old = [...books];
    old.splice(i, 1);
    setBooks(old);
  };

  // Drag and Drop

  // const maxSize = 1048576;

  const onDrop = useCallback(async (acceptedFiles) => {
    console.log("drop", acceptedFiles);

    const image = acceptedFiles[0];

    if (!image.name.match(/\.(jpg|jpeg|png|gif|pdf|doc)$/)) {
      toast.warn("select valid image.");
      return false;
    } else {
      if (image.size < 10e6 / 2) {
        // let data = new FormData();
        // data.append("image", acceptedFiles[0]);
        let result = await HttpClient.uploadFileRequestForImage(
          "booksimage",
          acceptedFiles[0],
          (data) => {
            console.log(data);
            setUpDocs(data);
          }
        );
        console.log(result);
        if (result && result.status) {
          setBookImage(result.url);
        } else {
          toast.warn("something error");
        }
      } else {
        toast.warn("image size should be less than 5 mb");
      }
    }
  }, []);

  const {
    isDragActive,
    getRootProps,
    getInputProps,
    isDragReject,
    acceptedFiles,
    // rejectedFiles,
  } = useDropzone({
    onDrop,
    accept:{
      'image/*': ['.jpeg', '.png',".jpg"],
      'pdf/doc':['.pdf','.doc']
    },
    minSize: 0,
  });

  // const isFileTooLarge =
  //   rejectedFiles?.length > 0 && rejectedFiles[0].size > maxSize;

  return (
    <>
      <div className="pt-5 pt-lg-5 pt-sm-3">
        <div className="">
          <h5 className="pb-3 font-weight-bold text-dark">Books</h5>
          <div className="_Upload_pinpoint p-3 p-lg-5 p-md-3">
            {books.map((item, index) => {
              return (
                <div className="evolving_wrap " key={index}>
                  <div>
                    <h6
                      className="text-dark font-weight-bold pb-2"
                      style={{ fontSize: 15 }}
                    >
                      {index + 1}. {item.name}
                    </h6>
                    <h6>
                      <a
                        className=""
                        style={{
                          color: "#92929D",
                          fontSize: 15,
                          wordBreak: "break-all",
                        }}
                      >
                        {item.link}
                      </a>
                    </h6>
                    <div className="d-flex ">
                      <button
                        className="border-0 bg-transparent p-0 mr-4"
                        style={{ color: "#6D6D6D" }}
                        onClick={() => {
                          setEdit(true);
                          setEditIndex(index);
                          setBookName(item.name);
                          setBookLink(item.link);
                          setBookImage(item.book_image);
                          setBookVideo(item.book_video);
                        }}
                      >
                        <i
                          className="fa fa-pencil-square-o mr-2"
                          aria-hidden="true"
                        />
                        Edit
                      </button>
                      <button
                        className="border-0 bg-transparent p-0"
                        style={{ color: "#6D6D6D" }}
                        onClick={() => RemoveBooks(index)}
                      >
                        <i className="fa fa-trash-o mr-2" aria-hidden="true" />
                        Delete
                      </button>
                    </div>
                  </div>
                  <img src={item.book_image} />
                </div>
              );
            })}

            <div className="_add_bookwrap">
              <h5 className="text-dark font-weight-bold">Add Books</h5>
              <input
                type=""
                name=""
                placeholder="Book Name"
                value={bookName}
                onChange={(val) => setBookName(val.target.value)}
              />
              <input
                type=""
                name=""
                placeholder="Book Link"
                value={booklink}
                onChange={(val) => setBookLink(val.target.value)}
              />
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="Neon Neon-theme-dragdropbox mb-4 mb-lg-0 mb-md-4">
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
                  <div
                    className="Neon-input-dragDrop m-0 w-100 p-2"
                    style={{ height: "270px" }}
                  >
                    <div className="Neon-input-inner">
                      <div className="Neon-input-icon">
                        {upDocs && upDocs < 100 ? (
                          <div style={{ height: "80px", width: "80px" , marginLeft:"90px" ,marginBottom:"10px" }}>
                            <CircularProgressbar
                              value={upDocs}
                              text={`${upDocs}%`}
                              styles={buildStyles({
                                textSize: "13px",
                              })}
                            />
                          </div>
                        ) : upDocs === 100 && bookImage == "" ? (
                          <div style={{ height: "80px", width: "80px", marginLeft:"90px" ,marginBottom:"10px"}}>
                            <CircularProgressbar
                              value={upDocs}
                              text={"Please Wait"}
                              styles={buildStyles({
                                textSize: "13px",
                              })}
                            />
                          </div>
                        ) : bookImage !== "" ? (
                          <img
                            src={bookImage}
                            style={{ maxWidth: "100%", height: "120px" }}
                          />
                        ) : (
                          // <i className="fa fa-book" aria-hidden="true" />
                          <img src={booksicon} alt="Book Icon" />
                        )}
                      </div>
                      <div className="Neon-input-text">
                        <h5>Book Image</h5>
                        <span
                          style={{
                            display: "inline-block",
                            margin: 15,
                          }}
                        ></span>
                      </div>
                      <div className="container text-center mt-5">
                        <div {...getRootProps()}>
                          <input
                            {...getInputProps()}
                            style={{
                              zIndex: 999,
                              opacity: 0,
                              width: "100%",
                              height: 200,
                              position: "absolute",
                              right: 0,
                              left: 0,
                              top: 0,
                              marginRight: "auto",
                              marginLeft: "auto",
                            }}
                          />
                          {!isDragActive &&
                            "Click here or drop a file to upload!"}
                          {isDragActive &&
                            !isDragReject &&
                            "Drop it like it's hot!"}
                          {isDragReject && "File type not accepted, sorry!"}
                          {/* {isFileTooLarge && (
                            <div className="text-danger mt-2">
                              File is too large.
                            </div>
                          )} */}
                        </div>
                      </div>
                      <p
                        className=""
                        style={{ fontSize: "13px", lineHeight: "22px" }}
                      >
                        <a>Browse File size should be less than 5 MB</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-4">
                <div className="Neon Neon-theme-dragdropbox mb-5 mb-lg-0 mb-md-5">
                  <input
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
                    accept="video/*"
                    onChange={(val) => videoHandle(val.target.files[0])}
                  />
                  <div className="Neon-input-dragDrop m-0 w-100 p-2" style={{height:'270px'}}>
                    <div className="Neon-input-inner">
                      <div className="Neon-input-icon">
                        {bookVideo ? (
                              <video className="kartoon" width="100%" height="100vh" controls key={bookVideo} autoPlay>
                              <source src={playVideo} type="video/mp4"/>
                             </video>
                          // <ReactHlsPlayer
                          //   src={bookVideo}
                          //   autoPlay={true}
                          //   controls={true}
                          //   width="85%"
                          //   height="auto"
                          // />
                        ) : (
                          // <i className="fa fa-book" aria-hidden="true" />
                          <img src={videoBook} alt="Video Icon" />
                        )}
                      </div>
                      <div className="Neon-input-text">
                        <h5>Book Video</h5>
                        <span
                          style={{
                            display: "inline-block",
                            margin: 15,
                          }}
                        ></span>
                      </div>
                      <p className="" style={{fontSize: "13px", lineHeight: "22px"}}>
                        Drag and drop an image, or{" "}
                        <a >Browse File size should be less than 5 MB</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-md-4 position-relative">
                <button
                  className="px-3 py-1 border-0 text-white _addbtn"
                  style={{ background: "#138BFB", borderRadius: 8 }}
                  onClick={()=>{
                    setUpDocs()
                    AddBooks()}}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
