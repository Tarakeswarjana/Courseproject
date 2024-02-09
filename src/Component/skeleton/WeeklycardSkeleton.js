import React from 'react'

function WeeklycardSkeleton() {
  return (
    
    <div className="col-lg-5 " >
    <div className="card cUstom_Card mt-3 ">
        <div className="card-body animation_Box">
            <div className="d-flex align-items-center justify-content-between ">
                <span className="skeleton-box" style={{width:'100%',height:'50px'}}></span>
            </div>
            <div className="course__FOrm mt-3">
                <span className="skeleton-box" style={{width:'30%',height:'19px'}}></span>
                <div className="media">
                    <div className="media__Image mr-3">
                        <span className="skeleton-box" style={{width:'50px',height:'50px'}}></span>
                    </div>
                    <div className="media-body">
                        <span className="skeleton-box d-block mb-2" style={{width:'90%',height:'19px'}}></span>
                        <span className="skeleton-box" style={{width:'90%',height:'19px'}}></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>  )
}

export default WeeklycardSkeleton