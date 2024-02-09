import React, { useRef, useEffect, useState } from 'react';
import profileimg from '../../../../asstes2/images/profileimg.png';
import { useOutletContext } from 'react-router-dom';
import HttpClient from '../../../../utils/HttpClient';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import { useFetch } from '../../../../customHooks/useFetch';
import moment from 'moment';

export default function Announcement() {
  const { id } = useOutletContext();
  const title = useRef();
  const description = useRef();

  const [annoucement, setAnnouncement] = useState([]);

  const submit = async e => {
    e.preventDefault();
    if (title.current.value != '' && description.current.value != '') {
      let dataSend = {
        courseId: id,
        title: title.current.value,
        description: description.current.value,
      };
      console.log(dataSend);
      //   return false;
      let result = await HttpClient.requestData('addAnnouncement', 'POST', dataSend);
      if (result && result.status) {
        title.current.value = '';
        description.current.value = '';
        fetchAnnouncement();
        toast.success('Add Announcement successfully');
      }
    } else {
      toast.warn('All feilds are required');
    }
  };

  useEffect(() => {
    fetchAnnouncement();
  }, []);

  const fetchAnnouncement = async () => {
    let result = await HttpClient.requestData('viewAnnouncement', 'GET');
    if (result && result.status) {
      setAnnouncement(result.data);
    }
  };

  return (
    <>
      <ToastContainer />
      <div
        className="tab-pane fade show active"
        id="pills-announcements"
        role="tabpanel"
        aria-labelledby="pills-announcements-tab"
      >
        <div className="mt-3 mb-3">
          <div className="announcements-item-wrapper">
            <div className="row">
              <div className="col-md-12 col-lg-12 col-12">
                <div className="_announcement_box_course">
                  <form action="">
                    <p className="entry-title entry_own_title_pst">Post Announcement</p>
                    <div className="form-group">
                      <input
                        ref={title}
                        type="text"
                        className="form-control box_control"
                        placeholder="Title"
                        id="email"
                        style={{ height: 64 }}
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        ref={description}
                        style={{
                          height: 160,
                          resize: 'none',
                          paddingTop: 20,
                        }}
                        className="form-control box_control"
                        placeholder="Description"
                        rows={5}
                        id="comment"
                        defaultValue={''}
                      />
                    </div>
                    <div className="btn-group-annoince">
                      <button onClick={submit} type="submit" name="submit" className="btn btn-primary post_btn">
                        Post Announcement
                      </button>
                      <button type="cancel" name="cancel " className="btn btn-primary cancel_btn cancel_btn_own_cncl">
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="border-btm mt-4 mb-2" />
          <div className="announcements-item-wrapper bg-clr announcements-item-wrapper_own">
            <div className="row">
              <div className="col-md-12 col-lg-12 col-12">
                <div className="_announcement_box_course_wrapper">
                  <p className="entry-header entry-own-headerpreann">Previous Announcements</p>
                  {annoucement.map((item, index) => {
                    return (
                      <div className="notice-box" key={item._id}>
                        <div className="notice-box-wrapper">
                          <div className="question-box-announcements" style={{ paddingBottom: '15px' }}>
                            <p style={{ maxWidth: '80%' }}>{item.title}</p>
                            <p className="announce-date" style={{ marginLeft: 'auto', maxWidth: '20%' }}>
                              {moment(item.createdOn).format('Do MMM YY')}
                            </p>
                          </div>
                          <div className="answers-box" style={{ paddingBottom: '15px' }}>
                            <p>{item.description}.</p>
                          </div>
                          <div className="media">
                            <img
                              src={item?.teacher?.image}
                              alt="image"
                              width="40px"
                              height="40px"
                              className="mr-3"
                              style={{ borderRadius: '50%' }}
                            />
                            <div className="media-body" style={{ marginTop: 5 }}>
                              <h6 className="text-dark author-desig" style={{ fontSize: 14 }}>
                                <span className="text-dark author-name">{item?.teacher?.name} -</span>
                                {item?.teacher?.landingPage?.teacherSubTitle}
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div
                          className="border-btm mt-3 mb-3"
                          style={index == annoucement.length - 1 ? { border: 'none' } : {}}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
