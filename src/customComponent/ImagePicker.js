import React from "react";

function ImagePicker({onChange,multiple=false}) {
  return (
    <div className="form-group">
    
      <label htmlFor="example-text-input" className="col-md-2 col-form-label">
        Images<span style={{ color: "red" }}>*</span>
      </label>
      <div className="col-md-12 p-0">
        <div className="dropzone">
          <label htmlFor="hhh" className="w-100" style={{ cursor: "pointer" }}>
       
            <div className="dz-message needsclick mt-2" tabIndex={0}>
              <input
                accept=".jpeg,.jpg,.png,.svg,.webp,.jfif,.apng"
                type="file"
                autoComplete="off"
                tabIndex={-1}
                id="hhh"
                multiple={multiple}
                // style={{ display: "none" }}
                onChange={(e)=>{
                  console.log('e', e)
                  onChange(e)
                
                }}
              />
              <div className="mb-3">
                <i
                  className="display-4 text-muted ri-upload-cloud-2-line"
                />
              </div>
              <h4>Drop files here or click to upload.</h4>
            </div>
          </label>
        
        </div>
        <p style={{ color: "red" }}>
          [image should be in dimensions 1280 * 960 px]
        </p>
        <div className="dropzone-previews mt-3" id="file-previews" />
      </div>
    </div>
  );
}

export default ImagePicker;
