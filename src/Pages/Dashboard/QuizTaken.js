import kristin from '../../asstes1/images/icon/kristin.png';
import janecooper from '../../asstes1/images/icon/janecooper.png';
import diannerussel from '../../asstes1/images/icon/diannerussel.png';
import profile from '../../asstes1/images/icon/profile.png';
import calendartick from '../../asstes1/images/icon/calendar-tick.png';
import timer from '../../asstes1/images/icon/timer.png';
import sort from '../../asstes1/images/icon/sort.png';
import profileimg from '../../asstes1/images/icon/profileimg.png';
import message from '../../asstes1/images/icon/message.png';
import seen from '../../asstes1/images/icon/seen.png';
import NewRequests from '../Request/NewRequest';
import AcceptedCalls from '../Request/AcceptedCalls';
import { useNavigate } from 'react-router-dom';
import TotalCourse from './TotalCourse';

export default function QuizTaken() {
  const navigate = useNavigate();
  return (
    <>
      <div className="table-responsive">
        <div className="table-wrapper">
          <div className="table-wrap">
            <div className="table-text">
              <p className="table-header">Quiz Taken (Total 50 Students have taken Quiz)</p>
            </div>
          </div>
          <div className="table-wrap">
            <select>
              <option value="monthly">This Month</option>
              {/* <option value="monthly">This Month</option>
                            <option value="monthly">This Month</option> */}
            </select>
          </div>
        </div>
        {/* <NewRequests/> */}
        <TotalCourse />
        {/* <table className="table table-hover">
                    <thead>
                        <tr>
                            <th style={{ textAlign: "left" }}>
                                <img src={profile} />
                                Client
                            </th>
                            <th style={{ textAlign: "right" }}>
                                <img src={calendartick} />
                                Schedule
                            </th>
                            <th style={{ textAlign: "right" }}>
                                <img src={timer} />
                                Next Meeting
                            </th>
                            <th style={{ textAlign: "right" }}>
                                <img src={sort} />
                                sort by
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ textAlign: "left" }}>
                                <img src={profileimg} />
                                Kristin Watson
                            </td>
                            <td>
                                <span className="schedule-onge">5th Feb - </span>16:00
                                - 17:00
                            </td>
                            <td>
                                <span className="schedule-onge">5th Feb - </span>16:00
                                - 17:00
                            </td>
                            <td>
                                <img
                                    src={message}
                                    className="noti-msg"
                                />
                                <img
                                    src={seen}
                                    className="noti-seen"
                                />
                                <p />
                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: "left" }}>
                                <img src={janecooper} />
                                Esther Howard
                            </td>
                            <td>
                                <span className="schedule-onge">5th Feb - </span>16:00
                                - 17:00
                                <br />- 20:00 - 21:00 <br />
                                <span className="schedule-onge">5th Feb - </span>16:00
                                - 17:00
                                <br />
                                <span className="schedule-onge">6 more meetings</span>
                            </td>
                            <td>
                                <span className="schedule-onge">5th Feb - </span>16:00
                                - 17:00
                            </td>
                            <td>
                                <img
                                    src={message}
                                    className="noti-msg"
                                />
                                <img
                                    src={seen}
                                    className="noti-seen"
                                />
                                <p />
                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: "left" }}>
                                <img src={diannerussel} />
                                Kristin Watson
                            </td>
                            <td>
                                <span className="schedule-onge">5th Feb - </span>16:00
                                - 17:00
                            </td>
                            <td>
                                <span className="schedule-onge">5th Feb - </span>16:00
                                - 17:00
                            </td>
                            <td>
                                <img
                                    src={message}
                                    className="noti-msg"
                                />
                                <img
                                    src={seen}
                                    className="noti-seen"
                                />
                                <p />
                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: "left" }}>
                                <img src={kristin} />
                                Esther Howard
                            </td>
                            <td>
                                <span className="schedule-onge">5th Feb - </span>16:00
                                - 17:00
                                <br />- 20:00 - 21:00 <br />
                                <span className="schedule-onge">5th Feb - </span>16:00
                                - 17:00
                                <br /> -22:00 - 23:00
                            </td>
                            <td>
                                <span className="schedule-onge">5th Feb - </span>16:00
                                - 17:00
                            </td>
                            <td>
                                <img
                                    src={message}
                                    className="noti-msg"
                                />
                                <img
                                    src={seen}
                                    className="noti-seen"
                                />
                                <p />
                            </td>
                        </tr>
                    </tbody>
                </table> */}
        {/* <div className="show-more-data">
                    <p>Show More 300</p>
                </div> */}
      </div>
    </>
  );
}
