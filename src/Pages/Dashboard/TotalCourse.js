import React, { useState, useEffect } from 'react';
import profile from '../../asstes1/images/icon/profile.png';
import calendartick from '../../asstes1/images/icon/calendar-tick.png';
import darlene from '../../asstes1/images/icon/darlene.png';
import kristin from '../../asstes1/images/icon/kristin.png';
import janecooper from '../../asstes1/images/icon/janecooper.png';
import leslie from '../../asstes1/images/icon/leslie.png';
import timer from '../../asstes1/images/icon/timer.png';
import sort from '../../asstes1/images/icon/sort.png';
import profileimg from '../../asstes1/images/icon/profileimg.png';
import message from '../../asstes1/images/icon/message.png';
import seen from '../../asstes1/images/icon/seen.png';
import diannerussel from '../../asstes1/images/icon/diannerussel.png';
import HttpClient from '../../utils/HttpClient';
import moment from 'moment';
import Loader from '../../Component/FullPageLoader/DotLoading';

export default function TotalCourse() {
  const [activeCourses, setActiveCourses] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    fetchActiveCourse();
  }, []);
  const fetchActiveCourse = async () => {
    setloading(false);
    let result = await HttpClient.requestData('ActiveCoursesdashboard', 'GET');
    if (result && result.status) {
      setActiveCourses(result.data);
    }
    setloading(false);
  };

  return (
    <>
      <div className="_enrollment mt-0" style={{ marginLeft: '0' }}>
        <div className="row">
          <div className="col-md-12 col-lg-12 col-12">
            <div className="table-responsive m-0" style={{ background: 'transparent' }}>
              <table className="table table-hover table_own_csn_brdr  table_brdr_simple">
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left' }}>
                      {/* <img src={profile} /> */}
                      <span className="rcnt_coaching" style={{ fontSize: '15px' }}>
                        Course Name
                      </span>
                    </th>
                    <th style={{ textAlign: 'left' }}>
                      {/* <img src={calendartick} /> */}
                      <span className="rcnt_coaching" style={{ fontSize: '15px' }}>
                        Number Of Students
                      </span>
                    </th>
                    <th style={{ textAlign: 'left' }}>
                      {/* <img src={timer} /> */}
                      <span className="rcnt_coaching" style={{ fontSize: '15px' }}>
                        Quiz Taken
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {loading && (
                    <div style={{ position: 'absolute', textAlign: 'center', width: '90%' }}>
                      <Loader />
                    </div>
                  )}

                  {activeCourses.length > 0 ? (
                    activeCourses.slice(0,3)?.map((item, index) => {
                      // console.log("FSffdf", item);
                      return (
                        <tr key={item._id}>
                          <td style={{ textAlign: 'left' }}>
                            {/* <img src={item?.image} style={{ width: '32px', height: '30px', borderRadius: '50%' }} /> */}
                            <span className="cname" style={{ fontSize: '15px' }}>
                              <img
                                style={{
                                  width: '34px',
                                  height: '34px',
                                  borderRadius: '6px',
                                  marginRight: '15px',
                                }}
                                src={item?.thumb_image}
                              />
                              {item?.courseName}
                            </span>
                          </td>
                          <td style={{ textAlign: 'left' }}>
                            <span className="schedule-onge">{item?.studentCount ?? '0'}</span>
                          </td>
                          <td style={{ textAlign: 'left' }}>
                            <span className="schedule-pink" style={{ fontSize: '15px' }}>2</span>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <p style={{ textAlign: 'center' }}>No Calls Found</p>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
