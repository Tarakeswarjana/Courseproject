import React from "react";
import darlene from '../../asstes1/images/icon/darlene.png'
import kristin from '../../asstes1/images/icon/kristin.png'
import janecooper from '../../asstes1/images/icon/janecooper.png'
import leslie from '../../asstes1/images/icon/leslie.png'
import profile from '../../asstes1/images/icon/profile.png'
import calendartick from '../../asstes1/images/icon/calendar-tick.png'
import sort from '../../asstes1/images/icon/sort.png'
import profileimg from '../../asstes1/images/icon/profileimg.png'
import message from '../../asstes1/images/icon/message.png'
import seen from '../../asstes1/images/icon/seen.png'
import diannerussel from '../../asstes1/images/icon/diannerussel.png'
import country from '../../asstes1/images/icon/country.png'
import bessie from '../../asstes1/images/icon/bessie.png'
import { Link } from "react-router-dom";

export default function StudentEnrollmentList() {
    return (
        <>
            <div className="container-fluid ">
                <div className="p-3">
                    <div className="_enrollment">
                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-12">
                                <div className="enroll-box">
                                    <h1 className="entry-header">&lt; Student Enrollment Lists</h1>
                                    <div className="form-group has-search">
                                        <span className="fa fa-search form-control-feedback" />
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search from student list"
                                        />
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-hover table-student-list">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <img src={profile} />
                                                    Student Name
                                                </th>
                                                <th>
                                                    <img src={calendartick} />
                                                    Enrollment Date
                                                </th>
                                                <th>
                                                    <img src={country} />
                                                    Country
                                                </th>
                                                <th>
                                                    <img src={sort} />
                                                    sort by
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <img src={profileimg} />
                                                    <Link to={'/enrolled_student_profile'}>
                                                    Kristin Watson
                                                    </Link>
                                                   
                                                </td>
                                                <td>15 December, 2022</td>
                                                <td>Australia</td>
                                                <td>
                                                    <p>
                                                        <img src={message} className="noti-msg" />
                                                        <img src={seen} className="noti-seen" />
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img src={janecooper} />
                                                    <Link to={'/enrolled_student_profile'}>
                                                      Jane Cooper
                                                    </Link>
                                                </td>
                                                <td>22 January, 2022</td>
                                                <td>Tajikistan</td>
                                                <td>
                                                    <p>
                                                        <img src={message} className="noti-msg" />
                                                        <img src={seen} className="noti-seen" />
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img src={diannerussel} />
                                                    <Link to={'/enrolled_student_profile'}>
                                                    Dianne Russell
                                                    </Link>
                                                </td>
                                                <td>10 February, 2022</td>
                                                <td>South Africa</td>
                                                <td>
                                                    <p>
                                                        <img src={message} className="noti-msg" />
                                                        <img src={seen} className="noti-seen" />
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img src={kristin} />
                                                    Kristin Watson
                                                </td>
                                                <td>16 June, 2022</td>
                                                <td>Monaco</td>
                                                <td>
                                                    <p>
                                                        <img src={message} className="noti-msg" />
                                                        <img src={seen} className="noti-seen" />
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img src={darlene} />
                                                    Darlene Rober
                                                </td>
                                                <td>15 January, 2021</td>
                                                <td>Kiribati</td>
                                                <td>
                                                    <p>
                                                        <img src={message} className="noti-msg" />
                                                        <img src={seen} className="noti-seen" />
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img src={leslie} />
                                                    Leslie Alexander
                                                </td>
                                                <td>26 March, 2021</td>
                                                <td>Åland Islands</td>
                                                <td>
                                                    <p>
                                                        <img src={message} className="noti-msg" />
                                                        <img src={seen} className="noti-seen" />
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img src={bessie} />
                                                    Bessie Cooper
                                                </td>
                                                <td>14 August, 2022</td>
                                                <td>Réunion</td>
                                                <td>
                                                    <p>
                                                        <img src={message} className="noti-msg" />
                                                        <img src={seen} className="noti-seen" />
                                                    </p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}