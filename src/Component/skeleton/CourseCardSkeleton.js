import React from 'react'

function CourseCardSkeleton() {
  return (
    <div className="row">
    {[1,2,3].map((item,index)=>{ return <div className="col-md-4">
      <div className="animation_Box">
        <div style={{}}>
          <span className="skeleton-box" style={{width:'100%',height:'198px',borderRadius: '20px 20px 0px 0px'}}></span>
        </div>


        <div className="p-3">
          <h3 className="blog-post__headline">
            <span className="skeleton-box" style={{width:'80%'}}></span>
          </h3>
          <div className="w-100">
            <span className="skeleton-box" style={{width:'40%'}}></span>
          </div>
          <div className="d-flex aiign-items-center justify-content-between py-3">
              <span className="skeleton-box" style={{width:'20%'}}></span>
              <span className="skeleton-box" style={{width:'20%'}}></span>
          </div>
          <div>
            <span className="skeleton-box" style={{width:'100%',height: "28px"}}></span>
          </div>
          <div>
            <span className="skeleton-box" style={{width:'100%',height: "28px"}}></span>
          </div>
          <div>
            <span className="skeleton-box" style={{width:'100%',height: "28px"}}></span>
          </div>
          <div>
            <span className="skeleton-box" style={{width:'100%',height: "28px"}}></span>
          </div>
        </div>


      </div>
    </div>})}
  </div>  )
}

export default CourseCardSkeleton