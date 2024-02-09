import React, { useState } from 'react'
import profile from './../../asstes1/images/icon/profile.png'
import sort from './../../asstes1/images/icon/sort.png'
import calendartick from './../../asstes1/images/icon/calendar-tick.png'
import country from './../../asstes1/images/icon/country.png'

import profileimg from './../../asstes1/images/icon/profileimg.png'
import message from './../../asstes1/images/icon/message.png'
import seen from './../../asstes1/images/icon/seen.png'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import HttpClient from '../../utils/HttpClient'
import { db } from '../../firebase/firebase'
import { doc, setDoc } from "firebase/firestore";
import Modal from "react-modal"

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function StudentEngaementTable({ studentList }) {

  console.log('dhjfhsdhfjkhdkuf', studentList);
  let subtitle;
    const navigate = useNavigate()
      const [modalIsOpen, setIsOpen] = useState(false);

      function openModal() {
        setIsOpen(true);
      }

      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
      }

      function closeModal() {
        setIsOpen(false);
      }

    const MessageSend = async (id) => {
        // console.log(id);
        let dataSend = {
            receiverId: id,
            senderType: "teacher",
            receiverType: "student",
            message: ".",
            lastMsgBy: "teacher"
        }
        console.log(dataSend);
        let result = await HttpClient.requestData("createChat", "POST", dataSend)
        console.log(result);
        if (result && result.status) {
            navigate("/chat", { state: { id: result.data._id } })
            //  let res =   await setDoc(doc(db, "messages", result.data[0]._id), {
            //         // message: "Hii",

            //       },{merge:true});

            //     console.log(res);
        }
    }
    return (
      <>
        <table className="table table-hover table-student table_student_own_brdr table_own_hvr_brd table_simple_nonbrd">
          <thead>
            <tr>
              <th style={{ textAlign: 'left' }}>
                <img src={profile} />
                <span className="rcnt_coaching" style={{ fontSize: '15px' }}>
                  Student Name
                </span>
              </th>
              <th style={{ textAlign: 'left' }}>
                <img src={calendartick} />
                <span className="rcnt_coaching" style={{ fontSize: '15px' }}>
                  {' '}
                  Enrollment Date
                </span>
              </th>
              <th style={{ textAlign: 'center' }}>
                <img src={country} />
                <span className="rcnt_coaching" style={{ fontSize: '15px' }}>
                  {' '}
                  Country
                </span>
              </th>
              <th style={{ textAlign: 'left' }}>
                <img src={sort} />
                <span className="rcnt_coaching" style={{ fontSize: '15px' }}>
                  {' '}
                  Action
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {studentList.map(item => {
              return (
                <tr key={item._id}>
                  <td
                    onClick={() => navigate('/enrolled_student_profile/' + item.student._id)}
                    style={{ textAlign: 'left' }}
                  >
                    <img src={item?.student?.image} style={{ height: '32px', width: '30px', borderRadius: '50%' }} />
                    <span
                      className="cname"
                      style={{ fontSize: '15px' }}
                    >{`${item?.student?.fristName} ${item?.student?.lastName}`}</span>
                  </td>
                  <td style={{ textAlign: 'left' }}>
                    <span className="cname" style={{ fontSize: '15px' }}>
                      {moment(item?.createdOn).format('LL')}
                    </span>
                  </td>

                  <td style={{ textAlign: 'center' }}>
                    <span className="cname" style={{ fontSize: '15px' }}>
                      {item?.student?.country}
                    </span>
                  </td>
                  <td style={{ textAlign: 'left', cursor: 'pointer' }}>
                    <p>
                      <img
                        title="Chat"
                        src={message}
                        className="noti-msg"
                        onClick={() => MessageSend(item.student._id)}
                      />
                      <img
                        title="Notification"
                        src={seen}
                        className="noti-seen"
                        onClick={() => {
                          setIsOpen(true);
                        }}
                      />
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button style={{ backgroundColor: 'red' }} onClick={closeModal}>
            X
          </button>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </Modal>
      </>
    );

        
}

export default StudentEngaementTable