import JoditEditor from 'jodit-react';
import { useEffect, useRef, useState } from 'react';
import { useMemo } from 'react';
import HttpClient from '../../../utils/HttpClient';
import { toast } from 'react-toastify';
export default function CoursseNameAndDescription({
  courseName,
  setCourseName,
  courseDesc,
  preference,
  setPreference,
  setCourseDesc,
  duration,
  setDuration,
  slug,
  setSlug,
  coursePrice,
  setCoursePrice,
}) {
  const editor = useRef(null);
  const [unicSlug, setUnicSlug] = useState('');
  const [liveclass, setLiveClass] = useState('');
  const numVelidation = /^[0-9]*$/;
  const [getAllPrefData, setAllPrefData] = useState([]);

  useEffect(() => {
    getAllPreferenceData();
  }, []);

  const getAllPreferenceData = async () => {
    let result = await HttpClient.requestData('get-all-preference', 'GET');
    console.log('course', result);
    if (result && result.status) {
      setAllPrefData(result?.data);
    } else {
      toast.error('Api Error');
    }
  };

  // const config = {
  //     // readonly: false,
  //     buttons: ["bold", "italic", "link", "unlink", "underline", "source"],
  //   };

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/,
    placeholder: 'Start typing ',
    buttons: ['bold', 'italic', 'link', 'unlink', 'underline', 'source'],
  };
  const DescriptionHandle = val => {
    // setCourseDesc(val)
  };

  const checkSlug = async val => {
    if (val !== '') {
      let result = await HttpClient.requestData(`checkUniqueSlug/${val}`, 'GET');
      // console.log("slug Result",result);
      if (result && result.status) {
        setUnicSlug('true');
      } else if (result && !result.status) {
        setUnicSlug('false');
      }
    }
  };
  return (
    <>
      {/* <input
                className="w-100  px-4 px-lg-4 px-sm-3 py-4 py-lg-4 py-md-3 _Typetext"
                type="text"
                name=""
                placeholder="Type Your Course Name here"
                style={{ background: "rgb(151 148 148 / 32%)", borderRadius: 20, border: "1px solid #E2E2EA", color: "#858796" }}
                value={courseName}
                onChange={(val) => setCourseName(val.target.value)}
            /> */}

      <form>
        <br />
        <div className="form-row">
          <div className="promax form-group col-md-6">
            <label htmlFor="inputEmail4">Course Name</label>

            <input
              type="text"
              className="form-control"
              id="inputEmail4"
              placeholder="Enter your course name"
              onChange={val => setCourseName(val.target.value)}
              value={courseName}
            />
          </div>
          <div className="promax form-group col-md-6">
            <label htmlFor="inputPassword4">Enter Slug</label>
            {unicSlug === 'true' && <i className="fa-sharp fa-solid fa-circle-check"></i>}
            <input
              type="text"
              className="form-control"
              id="inputPassword4"
              placeholder="Enter Slug"
              // disabled={true}

              onChange={val => {
                setSlug(val.target.value);
              }}
              onBlur={e => {
                checkSlug(slug);
              }}
              value={slug}
            />
            {unicSlug === 'false' && <p style={{ color: 'red' }}>slug already exists ****</p>}
          </div>
        </div>
      </form>
      <div className="pt-2 pt-lg-1 pt-sm-2">
        <h5 className="font-weight-bold text-dark">Preference</h5>
        <select
          class="form-select"
          aria-label="Default select example"
          value={preference}
          onChange={e => setPreference(e.target.value)}
          style={{
            width: '34.4rem',
            height: '3.6rem',
            border: '1px solid cornflowerblue',
            borderRadius: '12px',
          }}
        >
          <option value="">Select Preference</option>
          {getAllPrefData?.map((ele, i) => {
            return (
              <option value={ele?._id} key={i}>
                {ele?.name}
              </option>
            );
          })}
        </select>
      </div>

      <div className="pt-2 pt-lg-1 pt-sm-2">
        <h5 className="font-weight-bold text-dark">Course Description</h5>
        {/* <p style={{ color: "#6D6D6D", fontSize: 13 }}>
                    Description should be between 400-3000 letters
                </p> */}

        <JoditEditor
          ref={editor}
          value={courseDesc}
          config={config}
          // onChange={newContent => {DescriptionHandle(newContent);}}

          tabIndex={1} // tabIndex of textarea
          onBlur={newContent => setCourseDesc(newContent)} // preferred to use only this option to update the content for performance reasons
          // onChange={newContent => {setCourseDesc(newContent)}}
        />
        {/* <textarea
                    className="w-100 _ckeditor"
                    name="editor1"
                    id="editor1"
                    rows={10}
                    cols={80}
                 
                    value={courseDesc}
                    onChange={(val)=>setCourseDesc(val.target.value)}
                /> */}
      </div>
      <div className="row">
        <div className="pt-3 pt-lg-3 pt-sm-2 col-md-6">
          <h5 className="font-weight-bold text-dark mb-2">Course Duration in Hours</h5>

          <input
            type="text"
            value={duration}
            onChange={val => {
              if (numVelidation.test(val.target.value)) {
                setDuration(val.target.value);
              }
            }}
            className="form-control"
            style={{ borderRadius: '20px' }}
          />
        </div>
        <div className="pt-3 pt-lg-3 pt-sm-2 col-md-6">
          <h5 className="font-weight-bold text-dark mb-2">Total No. Of Free Live Coaching Calls</h5>

          <input
            type="number"
            value={liveclass}
            onChange={val => {
              setLiveClass(val.target.value);
            }}
            className="form-control"
            style={{ borderRadius: '20px' }}
          />
        </div>
      </div>
    </>
  );
}
