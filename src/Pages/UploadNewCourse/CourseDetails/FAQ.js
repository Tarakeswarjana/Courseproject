import { useState } from "react";
import { toast } from "react-toastify";
import trash from "../../../asstes1/images/trash.png";
import faqedit from "../../../asstes1/images/faqedit.png";
export default function FAQ({ faq, setFAQ }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [edit_enable,setEdit] = useState(false)
  const [editIndex,setEditIndex] = useState(null)


  const AddFaqHandle = () => {
    if (question != "" && answer != "") {
        if(edit_enable){
            let prev = [...faq]
           let data= {...prev[editIndex],question,answer}
           prev[editIndex] = data
            setFAQ(prev)
            setEdit(false)
            setEditIndex(null)
            setQuestion("")
            setAnswer("")
        }
        else{
            setFAQ((prev) => [...prev, { question, answer }]);

        }

    } else {
      toast.error("please add Question and Answer");
    }
  };

  const deleteFaq = (i) => {
    let faqs = [...faq];
    faqs.splice(i, 1);
    setFAQ(faqs);
  };
  return (
    <>
      <div className="pt-3 pt-lg-3 pt-sm-3">
        <h5 className=" font-weight-bold text-dark mb-2">FAQs</h5>
        {/* <p style={{ color: "#6D6D6D", fontSize: 13 }}>
          This will show in points that you want to focus
        </p> */}
        <div className="accordion" id="accordionExample">
          <div className="_Upload_pinpoint">
            {faq.map((item, index) => {
              return (
                <div key={index}>
                  <div className="d-flex justify-content-between _edit_texttl _faq_wrap">
                    <p
                      className=" text-dark"
                      style={{ fontWeight: 500, fontSize: 14 }}
                    >
                      {" "}
                      {item.question}.
                    </p>
                    <div>
                      <button
                        className="border-0 bg-transparent p-0 px-2"
                        onClick={() => deleteFaq(index)}
                      >
                        {/* <i className="fa fa-trash-o" aria-hidden="true" /> */}
                        <img src={trash} alt="Trash Icon"/>
                      </button>
                      <button className="bg-transparent border-0 p-0 px-2"
                      onClick={()=>{
                          setEdit(true)
                          setEditIndex(index)
                          setQuestion(item.question)
                          setAnswer(item.answer)
                      }}
                      >
                        {/* <i
                          className="fa fa-pencil-square-o"
                          aria-hidden="true"
                        /> */}
                        <img src={faqedit} alt="Edit Icon"/>
                      </button>
                      <button
                        className="bg-transparent border-0 p-0 px-2"
                        type="button"
                        data-toggle="collapse"
                        data-target={"#collapse" + index}
                        aria-expanded="true"
                        aria-controls={"collapse" + index}
                      >
                        {" "}
                        <i className="fa fa-angle-down" aria-hidden="true" />
                      </button>
                      {/* <button className="bg-transparent border-0 p-0 px-2">
                                     <i className="fa fa-angle-down" aria-hidden="true" />
                                 </button> */}
                    </div>
                  </div>
                  <p
                    style={{ color: "#92929D", fontSize: 11 }}
                    id={"collapse" + index}
                    className="collapse"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    {item.answer}.
                  </p>
                </div>
              );
            })}

            {/* <div className="d-flex justify-content-between  pt-3">
              <p
                className=" text-dark"
                style={{ fontWeight: 500, fontSize: 14 }}
              >
                {" "}
                How to design a product that can grow itself 10x in year.
              </p>
              <div>
                <button className="border-0 bg-transparent p-0 px-2">
                  <i className="fa fa-trash-o" aria-hidden="true" />
                </button>
                <button className="bg-transparent border-0 p-0 px-2">
                  <i className="fa fa-pencil-square-o" aria-hidden="true" />
                </button>
                <button
                  className="bg-transparent border-0 p-0 px-2"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseTwo"
                >
                  {" "}
                  <i className="fa fa-angle-down" aria-hidden="true" />
                </button>
                <button className="bg-transparent border-0 p-0 px-2">
                                    <i className="fa fa-angle-down" aria-hidden="true" />
                                </button>
              </div>
            </div> */}
            {/* <p
              style={{ color: "#92929D", fontSize: 11 }}
              id="collapseTwo"
              className="collapse "
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              Consider that for a moment: everything we see around us is assumed
              to have had a cause and is contingent upon something else.
              However, when it comes to existence itself, it takes on the
              opposite. It’s mind boggling to think that something has always
              been and always will be. It goes contrary to what we experience in
              our lives. But somehow, it’s possible. It also implies that cause
              is a misnomer: if existence is eternal.
            </p> */}
            <div className="_add_bookwrap">
              <input
                type=""
                name=""
                placeholder="Please Enter  Question"
                value={question}
                onChange={(val) => setQuestion(val.target.value)}
              />
              <textarea
                className="w-100"
                rows={5}
                placeholder="Please Enter  Answer"
                value={answer}
                onChange={(val) => setAnswer(val.target.value)}
              />
              <button
                className="border-0 text-white px-3 py-1 "
                style={{
                  background: "#138BFB",
                  borderRadius: 8,
                  float: "right",
                }}
                onClick={()=>{
                  AddFaqHandle()
                  setQuestion("")
                  setAnswer("")
                }}
              >
                Save & Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
