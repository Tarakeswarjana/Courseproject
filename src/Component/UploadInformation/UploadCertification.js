import uploadLogo from '../../asstes1/images/cloud-computing.png'
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";




export default function CertificatationUpload() {

    const [certificateDetail, setCertificateDetail] = useState({ title: "", year: '' })
    const [image, setImage] = useState('')
    const handelImage = (e) => {
        const targetfile = e.target.files[0]
        setImage(URL.createObjectURL(targetfile))
        // setImage(targetfile)

    }
    const handleChange = (event) => {
        event.persist()
        let { name, value } = event.target
        setCertificateDetail({ ...certificateDetail, [name]: value })
    }
    console.log(certificateDetail);
    console.log(image);

    const Navigate = useNavigate()

    const handleSubmit = () => {
        Navigate('/dashboard')
    }
    return (
        <>
            <form action="#" className="techerForm">
                <div className="border">
                    <div className="form-group">
                        <label className="form_label_certifications">
                            <img src={uploadLogo} alt="" />
                            Brows or click to upload
                            <input
                                onChange={(e) => handelImage(e)}
                                name='image'
                                type="file"
                                className="form-control"
                                id="uploadFile"
                                multiple
                            />
                            <label></label>
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cl">Certificatation Title</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            className="form-control"
                            id="cl"
                            placeholder=""
                            name="title"
                            value={certificateDetail.title}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="year">Achieved Year</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            className="form-control"
                            id="year"
                            placeholder=""
                            name="year"
                            value={certificateDetail.year}
                        />
                    </div>
                </div>
                <button  className="btn btn-another">
                    Add Another
                </button>
                <button  onClick={handleSubmit} className="btn btn-continue">
                    Continue
                </button>
            </form>
        </>
    )
}