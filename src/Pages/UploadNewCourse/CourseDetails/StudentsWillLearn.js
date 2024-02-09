import { useState } from "react"
import { toast } from "react-toastify"
import iconlearn from "../../../asstes1/images/iconlearn.png";
import faqedit from "../../../asstes1/images/faqedit.png";
import pdf from "../../../asstes2/images/pdf.png";
import unsplash_vdo from "../../../asstes2/images/unsplash_vdo.png"
import wbp from "../../../asstes2/images/wbp.png"
export default function StudentsWillLearn({ learnAbout, setLearnAbout }) {
    const [about, setAbout] = useState("")
    const [edit_enable, setEdit] = useState(false)
    const [editIndex, setEditIndex] = useState(null)
    const [visible, setVisible] = useState(3);

    const initDetl = [
        {
            image: pdf,
            text1: "Docs",

        },
        {
            image: unsplash_vdo,
            text1: "Explainatory Video",
        },
        {
            image: wbp,
            text1: "Web File",
        }

    ]
    const [dtls, setDtls] = useState([initDetl]);

    const addAbout = () => {
        if (about != "") {
            if (edit_enable) {
                let prev = [...learnAbout]
                prev[editIndex] = about
                setLearnAbout(prev)
                setEdit(false)
                setEditIndex(null)
                setAbout("")
            }
            else {
                setLearnAbout((prev) => [...prev, about])
                setAbout("")

            }
        }
        else {
            toast.error("please add something")
        }
    }
    const removeAbout = (i) => {
        let oldAbout = [...learnAbout]
        oldAbout.splice(i, 1)
        setLearnAbout(oldAbout)
    }
    const editAbout = (i) => {
        setEdit(true)
        setEditIndex(i)
        setAbout(learnAbout[i])
    }
    const showMoreItems = () => {
        setDtls(prev => [...prev, initDetl])
    }

    const deleteMoreItems = (ind) => {
        const filteredData = dtls.filter((itm, i) => i !== ind);
        setDtls(filteredData);
    }
    return (
      <>
        {/* course module start */}
        <div className="pt-3 pt-lg-3 pt-sm-3">
          <h5 className="font-weight-bold text-dark">Highlight Course</h5>
          <p style={{ color: '#6D6D6D', fontSize: 13 }}>This will show in points that you want to focus </p>
          <div className="_Upload_pinpoint">
            <div
              className="d-flex flex-lg-row flex-md-row  flex-sm-column flex-column justify-content-between px-4 py-2"
              style={{
                background: 'rgba(19, 139, 251, 0.05)',
                border: '1px solid #138BFB',
                borderRadius: 12,
              }}
            >
              <input
                className="border-0 bg-transparent pb-2 pb-lg-0 pb-md-2 cutomuploadinput"
                type="text"
                name=""
                placeholder="Course Highlights"
                value={about}
                onChange={val => setAbout(val.target.value)}
              />
              <button
                className="text-white border-0 px-4 py-2"
                style={{ background: '#138BFB', borderRadius: 8 }}
                onClick={addAbout}
              >
                Add
              </button>
            </div>

            
            {learnAbout.map((item, index) => {
              return (
                <div className="d-flex justify-content-between _edit_texttl" key={index}>
                  <p className=" text-dark" style={{ fontWeight: 500, fontSize: 14 }}>
                    {index + 1}. {item}
                  </p>
                  <div>
                    <button className="border-0 bg-transparent p-0 px-3" onClick={() => editAbout(index)}>
                      {/* <i
                                  className="fa fa-pencil-square-o"
                                  aria-hidden="true"
                                  style={{ color: "#92929D" }}
                              /> */}
                      <img src={faqedit} alt="Edit Icon" />
                    </button>
                    <button className="border-0 bg-transparent p-0 px-3" onClick={() => removeAbout(index)}>
                      {/* <i
                                  className="fa fa-times"
                                  aria-hidden="true"
                                  style={{ color: "#92929D" }}
                              /> */}
                      <img src={iconlearn} alt="Close Icon" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* course module end */}

        {/*  */}
        {/* <div className="pt-3 pt-lg-3 pt-sm-3"> */}
          {/* <h5 className="font-weight-bold text-dark">Course Module </h5> */}
          {/* <p style={{ color: '#6D6D6D', fontSize: 13 }}>This will show in points that you want to focus </p> */}
          {/* <div className="_Upload_pinpoint"> */}
            {/* {learnAbout.map((item, index) => {
              return (
                <div className="d-flex justify-content-between _edit_texttl" key={index}>
                  <p className=" text-dark" style={{ fontWeight: 500, fontSize: 14 }}>
                    {index + 1}. {item}
                  </p>
                  <div>
                    <button className="border-0 bg-transparent p-0 px-3" onClick={() => editAbout(index)}>
                      <i className="fa fa-pencil-square-o" aria-hidden="true" style={{ color: '#92929D' }} />
                      <img src={faqedit} alt="Edit Icon" />
                    </button>
                    <button className="border-0 bg-transparent p-0 px-3" onClick={() => removeAbout(index)}>
                      <i className="fa fa-times" aria-hidden="true" style={{ color: '#92929D' }} />
                      <img src={iconlearn} alt="Close Icon" />
                    </button>
                  </div>
                </div>
              );
            })} */}

            {/* course modules */}
            {/* {dtls?.map((item, i) => { */}
              {/* return ( */}
                {/* <div className="pdf_explnvdo_wbp_fl_main" key={i}> */}
                  {/* <div
                    className="d-flex flex-lg-row flex-md-row  flex-sm-column flex-column justify-content-between px-4 py-2"
                    style={{
                      background: 'rgba(19, 139, 251, 0.05)',
                      border: '1px solid #138BFB',
                      borderRadius: 12,
                    }}
                  >
                    <input
                      className="border-0 bg-transparent pb-2 pb-lg-0 pb-md-2 cutomuploadinput"
                      type="text"
                      name=""
                      placeholder="Course Name"
                      value={about}
                      onChange={val => setAbout(val.target.value)}
                    />
                    <button
                            className="text-white border-0 px-4 py-2"
                            style={{ background: "#138BFB", borderRadius: 8 }}
                            onClick={addAbout}
                        >
                            Add
                        </button>
                  </div> */}

                  {/* <div className="pdf_explnvdo_wbp_fl">
                    {item.map((item, index) => {
                      return (
                        <>
                          <div className="dshbrd_brdr" key={index}>
                            <div className="inpt_fl">
                              <input type="file" id="myfile" name="myfile" className="aatchfl" />
                            </div>
                            <div className="upld_txt">
                              <div className="dshbrd_inpt_img">
                                <img src={item.image} alt="" />
                              </div>
                              <h2>{item.text1}</h2>
                              <p>Drag and drop an image or Browse File.</p>
                              <h4>File size should be less than 5 MB</h4>
                            </div>
                          </div>

                          <div className="dshbrd_brdr">
                            <div className="inpt_fl">
                              <input type="file" id="myfile" name="myfile" className="aatchfl" />
                            </div>
                            <div className="upld_txt">
                              <div className="dshbrd_inpt_img">
                                <img src={unsplash_vdo} alt="" />
                              </div>
                              <h2>Explainatory Video</h2>
                              <p>Explainatory Video</p>
                              <h4>File size should be less than 5 MB</h4>
                            </div>
                          </div>
                          <div className="dshbrd_brdr">
                            <div className="inpt_fl">
                              <input type="file" id="myfile" name="myfile" className="aatchfl" />
                            </div>
                            <div className="upld_txt">
                              <div className="dshbrd_inpt_img">
                                <img src={wbp} alt="" />
                              </div>
                              <h2>Web File</h2>
                              <p>Web File</p>
                              <h4>File size should be less than 5 MB</h4>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                  {i == 0 ? (
                    <button
                      className="text-white border-0 px-4 py-2 btnadd"
                      style={{ background: '#138BFB', borderRadius: 8, display: 'flex', justifyContent: 'center' }}
                      onClick={showMoreItems}
                    >
                      Add
                    </button>
                  ) : (
                    <button
                      className="text-white border-0 px-4 py-2 btnadd"
                      style={{ background: 'red', borderRadius: 8, display: 'flex', justifyContent: 'center' }}
                      onClick={() => deleteMoreItems(i)}
                    >
                      Delete
                    </button>
                  )} */}
                {/* </div> */}
              {/* ); */}
            {/* })} */}
          {/* </div> */}
        {/* </div> */}
      </>
    );
}