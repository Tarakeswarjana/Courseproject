import React from "react";
import { Button, Modal } from "react-bootstrap";

export default function QuizModel({show,handleClose,quizName,quizPoint,totalStudent}) {
  return (
    <Modal show={show} onHide={()=>handleClose(false)} animation={false}>
      <Modal.Header>
        <Modal.Title style={{fontSize: "20px",fontWeight: "600",color: "#000000"}}>{quizName}</Modal.Title>
        <button type="button" className="btn-close" style={{padding: "0px 5px",fontSize: "18px",fontWeight: "700", border: "none", background: "transparent"}} aria-label="Close" onClick={()=>handleClose(false)}>X</button>
      </Modal.Header>
      <Modal.Body>
        <div>
          <h6>
            <span style={{fontSize: "18px", fontWeight: "500", color: "#000000", marginRight: "10px"}}>Total Point :</span>
            <span style={{fontSize: "16px", fontWeight: "400", color: "#000000",}}>{quizPoint}</span>
          </h6>
          <h6>
            <span style={{fontSize: "18px", fontWeight: "500", color: "#000000", marginRight: "10px"}}>Total Student :</span>
            <span style={{fontSize: "16px", fontWeight: "400", color: "#000000",}}>{totalStudent?.studentCount}</span>
          </h6>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={()=>handleClose(false)}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
