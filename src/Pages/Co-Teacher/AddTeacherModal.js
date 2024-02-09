import React, { useRef } from "react";
import HttpClient from "../../utils/HttpClient";

function AddTeacherModal({SetAddTeacherFalse}) {

    const email= useRef()
    const note = useRef()

    const sendInvitation = async()=>{
        if(email.current.value !=""){
            let dataSend ={
                email:email.current.value,
                note:note.current.value
            }
            console.log(dataSend);
            // return false
            let result = await HttpClient.requestData("sendinvitation","POST",dataSend)      
            if(result && result.status){
                SetAddTeacherFalse()
                alert("Invitation sent Successfully")
            }  
        }
        else{
            alert("Email  field  should not be blank")
        }
       
    }
  return (
    <div className="invitation-wrapper">
      <div className="invitation-box">
        <h1 className="title-invitation">Add Teacher</h1>
        <p className="closeInvitation" onClick={SetAddTeacherFalse}>
          x
        </p>
        <input
          type="name"
          className="form-control"
          placeholder="Enter your name"
          style={{
            border: '2px solid #E2E2EA',
            borderRadius: '12px',
            height: '40px',
          }}
        />
        <input
          ref={email}
          type="email"
          className="form-control"
          placeholder="Enter your email address "
          style={{
            border: '2px solid #E2E2EA',
            borderRadius: '12px',
            height: '40px',
            marginTop: '15px',
          }}
        />
        <textarea
          ref={note}
          className="form-control"
          rows={5}
          style={{
            background: '#FFFFFF',
            border: '2px solid #E2E2EA',
            borderRadius: 12,
            height: '160px',
            resize: 'none',
            marginTop: '15px',
          }}
          placeholder="Note"
        />
        <button
          onClick={sendInvitation}
          type="submit"
          className="btn btn-primary"
          style={{
            width: '100%',
            background: '#138BFB',
            borderRadius: 8,
            height: '35px',
            marginTop: '12px',
          }}
        >
          Send Invitation
        </button>
      </div>
    </div>
  );
}

export default AddTeacherModal;
