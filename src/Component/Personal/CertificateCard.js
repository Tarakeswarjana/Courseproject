import React from "react";
import profilepic from "../../asstes1/images/profilepic.png";
import Rectangle3160 from "../../asstes1/images/Rectangle 3160.jpg";
import Rectangle3161 from "../../asstes1/images/Rectangle 3161.jpg";
import Rectangle3162 from "../../asstes1/images/Rectangle 3162.jpg";

function CertificateCard({ certificates }) {
  return (
    <div className="card my-4">
      <div className="card-body">
        <div className="row">
          <div className="col-12">
            <div className="Certifications_part">
              <div className="Certifications_head_text d-flex">
                <h3>Certifications</h3>
                {/* <a href="#">Add another certifications</a> */}
              </div>
              <div className="Certificat_all  col-lg-10 d-flex pl-md-0">
                {certificates?.map((item, index) => {
                  return (
                    <div className="Certificat_img" key={index}>
                      <img src={item.document} alt="Certificat" />
                      <div className="Certificat_ident">
                        <h6>{item.certificationTitle}</h6>
                        <p>graduation year - {item.achiveYear}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CertificateCard;
